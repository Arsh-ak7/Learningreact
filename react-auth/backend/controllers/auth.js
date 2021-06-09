const User = require("../models/User");

exports.register = async (req, res, next) => {
	const { username, email, password } = req.body;

	try {
		const user = await User.create({
			username,
			email,
			password,
		});

		sendToken(user, 201, res);
	} catch (err) {
		next(err);
	}
};

exports.login = async (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password) {
		res.status(400).json({
			success: false,
			error: "Provide email/password",
		});
	}
	try {
		const user = await User.findOne({ email }).select("+password");
		if (!user)
			res.status(404).json({
				success: false,
				error: "User not found",
			});
		const isMatch = await user.matchPassword(password);
		if (!isMatch) {
			res.status(404).json({
				success: false,
				error: "Invalid Password",
			});
		}
		sendToken(user, 200, res);
	} catch (error) {
		next(error);
	}
};

exports.forgotpassword = (req, res, next) => {
	res.send("forgot password Route");
};

exports.resetpassword = (req, res, next) => {
	res.send("Reset password Route");
};

const sendToken = (user, statusCode, res) => {
	const token = user.getToken();
	res.status(statusCode).json({
		success: true,
		token,
	});
};
