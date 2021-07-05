const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserInputError } = require("apollo-server");
const Razorpay = require("razorpay");
const shortid = require("shortid");
const { GraphQLScalarType, Kind } = require("graphql");

const User = require("../../models/User");
const { SECRET_KEY } = require("../../secrets");
const { validateRegisterInput } = require("../../utils/validators");
const { validateLoginInput } = require("../../utils/validators");
const checkAuth = require("../../utils/checkAuth");

const generateToken = (user) => {
	return jwt.sign(
		{
			id: user.id,
			email: user.email,
			username: user.username,
		},
		SECRET_KEY,
		{ expiresIn: "1h" }
	);
};

var razorpay = new Razorpay({
	key_id: "rzp_test_nHaVbpE0xKVSil",
	key_secret: "iOS0KcO3cnttEbt7lNp6cv7F",
});

const dateScalar = new GraphQLScalarType({
	name: "Date",
	description: "Date custom scalar type",
	parseValue(value) {
		return new Date(value); // value from the client
	},
	serialize(value) {
		return value.getTime(); // value sent to the client
	},
	parseLiteral(ast) {
		if (ast.kind === Kind.INT) {
			return new Date(ast.value); // ast value is always in string format
		}
		return null;
	},
});

module.exports = {
	Date: dateScalar,
	Mutation: {
		async login(_, { username, password }) {
			const { errors, valid } = validateLoginInput(username, password);
			if (!valid) {
				throw new UserInputError("Error", { errors });
			}
			const user = await User.findOne({ username });

			if (!user) {
				errors.general = "User not found";
				throw new UserInputError("User not found", { errors });
			}

			const match = await bcrypt.compare(password, user.password);
			if (!match) {
				errors.general = "Wrong Credentials";
				throw new UserInputError("Wrong Credentials", { errors });
			}
			const token = generateToken(user);
			return {
				...user.toJSON(),
				id: user._id,
				token,
			};
		},
		async register(
			_,
			{ registerInput: { username, email, password, confirmPassword } },
			context,
			info
		) {
			const { valid, errors } = validateRegisterInput(
				username,
				email,
				password,
				confirmPassword
			);

			if (!valid) {
				throw new UserInputError("Errors", { errors });
			}

			const user = await User.findOne({ username });
			if (user) {
				throw new UserInputError("Username already exists", {
					errors: {
						username: "This Username is taken",
					},
				});
			}
			const hashedpassword = await bcrypt.hash(password, 12);
			const newUser = new User({
				email,
				username,
				password: hashedpassword,
				createdAt: new Date().toISOString(),
			});
			const res = await newUser.save();
			const token = generateToken(newUser);
			return {
				...res.toJSON(),
				id: res._id,
				token,
			};
		},

		async subscribe(_, { subsValue }, context) {
			const user = checkAuth(context);
			const username = user.username;
			var futureDate = new Date();
			futureDate.setDate(futureDate.getDate() + 30);
			const newUser = await User.findOneAndUpdate(
				{ username },
				{ $set: { subscription: subsValue, expiresOn: futureDate } },
				{ upsert: true, useFindAndModify: false },
				function (err, doc) {
					if (err) {
						throw new UserInputError();
					}
				}
			);
			const payment_capture = 1;
			const amount = subsValue;
			const currency = "INR";
			const options = {
				amount: (amount * 100).toString(),
				currency,
				receipt: shortid.generate(),
				payment_capture,
			};
			try {
				const response = await razorpay.orders.create(options);
				const res = await newUser.save();
				return {
					...res.toJSON(),
					id: response.id,
					currency: response.currency,
					amount: response.amount,
				};
			} catch (err) {
				console.log(err);
				throw new UserInputError(err);
			}
		},
	},
	Query: {
		async getUserData(_, { username }) {
			try {
				if (!username) {
					throw new UserInputError("Invalid Input");
				}
				const user = await User.findOne({ username });
				if (!user) {
					throw new UserInputError("User not found");
				}
				const expiresOn = new Date(user.expiresOn);
				return {
					...user.toJSON(),
					expiresOn,
				};
			} catch (err) {
				throw new UserInputError(err);
			}
		},
	},
};
