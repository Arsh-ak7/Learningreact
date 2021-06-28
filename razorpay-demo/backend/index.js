const express = require("express");
const path = require("path");
const cors = require("cors");
const Razorpay = require("razorpay");
const shortid = require("shortid");

const app = express();

app.use(cors());

var razorpay = new Razorpay({
	key_id: "rzp_test_nHaVbpE0xKVSil",
	key_secret: "iOS0KcO3cnttEbt7lNp6cv7F",
});
app.get("/logo.svg", (req, res) => {
	res.sendFile(path.join(__dirname, "logo.svg"));
});

app.post("/razorpay", async (req, res) => {
	const payment_capture = 1;
	const amount = 500;
	const currency = "INR";

	const options = {
		amount: (amount * 100).toString(),
		currency,
		receipt: shortid.generate(),
		payment_capture,
	};

	try {
		const response = await razorpay.orders.create(options);
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount,
		});
	} catch (err) {
		console.log(err);
	}
});

app.listen(1337, () => {
	console.log("server connected");
});
