const { model, Schema } = require("mongoose");

const userSchema = new Schema({
	username: String,
	password: String,
	email: String,
	createdAt: String,
	subscription: Number,
	expiresOn: Date,
});

module.exports = model("User", userSchema);
