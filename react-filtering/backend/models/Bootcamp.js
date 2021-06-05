const mongoose = require("mongoose");

const bootcampSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please provide a name to the bootcamp"],
		unique: true,
	},
	rating: {
		type: Number,
		required: [true, "Please provide the bootcamp a rating"],
	},
	description: {
		type: String,
		required: [true, "Please provide a description to the bootcamp"],
	},
	price: {
		type: Number,
		required: [true, "Please provide the price of the bootcamp"],
	},
});

const Bootcamp = mongoose.model("Bootcamp", bootcampSchema);

module.exports = Bootcamp;
