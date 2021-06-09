require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
connectDB();
const app = express();

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

//Error handler should be last piece of middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log(`server running on ${PORT}`));

process.on("unhandledRejection", (err, promise) => {
	console.log(`Logged Error ${err}`);
	server.close(() => process.exit(1));
});
