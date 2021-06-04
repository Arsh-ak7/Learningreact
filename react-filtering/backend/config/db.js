const mongoose = require("mongoose");

const DB_URL = process.env.DATABASE_URI;

const connectDB = async () => {
	try {
		await mongoose.connect(DB_URL, {
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useNewUrlParser: true,
		});
		console.log("Connected to DB");
	} catch (err) {
		console.log("Error in db connection");
		console.log(err);
		process.exit(1);
	}
};

module.exports = connectDB;
