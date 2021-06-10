const User = require("../models/User");
const sendMail = require("../utils/sendEmail");
const ErrorResponse = require("../utils/errorResponse");

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

exports.forgotpassword = async (req, res, next) => {
	const { email } = req.body;

	try {
		const user = await User.findOne({ email });
		if (!user)
			res.status(404).json({
				success: false,
				error: "User not found",
			});
		const resetToken = user.getResetToken();
		await user.save();
		const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;
		const message = `
			<h1> You have requested a password reset<h1>
			<p>Go to the link provided</p>
			<a href = ${resetUrl} clicktracking =off>${resetUrl}</a>
		`;
		try {
			await sendMail({
				to: user.email,
				subject: "Password Reset",
				text: message,
			});
			res.status(200).json({
				success: true,
				data: "Email sent",
			});
		} catch (error) {
			user.resetPasswordToken = undefined;
			user.resetPasswordExpire = undefined;
			await user.save();
			return next(new ErrorResponse("Email not sent"));
		}
	} catch (err) {
		return next(new ErrorResponse("Forget not sent"));
	}
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
