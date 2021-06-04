const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

//middleware
app.use(express.json());

//routes
app.use("/api/v1/bootcamps", require("./routes/bootcampRouters"));

app.listen(process.env.PORT, () => {
	console.log("Server connected");
});
