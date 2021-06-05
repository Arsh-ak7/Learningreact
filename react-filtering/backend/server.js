const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

const app = express();

connectDB();

//middleware
app.use(express.json());

//routes
app.use("/api/v1/bootcamps", require("./routes/bootcampRouters"));

//Error handler - Imp that its in the last so that it can be global

app.use(errorHandler);

app.listen(process.env.PORT, () => {
	console.log("Server connected");
});
