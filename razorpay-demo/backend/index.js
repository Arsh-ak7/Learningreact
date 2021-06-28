const express = require("express");
const path = require("path");
const app = express();
app.get("/logo.svg", (req, res) => {
	res.sendFile(path.join(__dirname, "logo.svg"));
});

app.listen(1337, () => {
	console.log("server connected");
});
