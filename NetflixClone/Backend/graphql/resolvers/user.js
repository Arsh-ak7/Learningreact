const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserInputError } = require("apollo-server");

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

module.exports = {
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
			const newUser = await User.findOneAndUpdate(
				{ username },
				{ $set: { subscription: subsValue } },
				{ upsert: true, useFindAndModify: false },
				function (err, doc) {
					if (err) {
						throw new UserInputError();
					}
				}
			);

			const res = await newUser.save();
			console.log(res);
			return {
				...res.toJSON(),
				id: res._id,
			};
		},
	},
};
