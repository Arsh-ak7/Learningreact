const express = require("express");
const path = require("path");
const cors = require("cors");
const Razorpay = require("razorpay");
const shortid = require("shortid");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

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

app.post("/verification", (req, res) => {
	// do a validation
	const secret = "123456789";

	console.log(req.body);

	const crypto = require("crypto");

	const shasum = crypto.createHmac("sha256", secret);
	shasum.update(JSON.stringify(req.body));
	const digest = shasum.digest("hex");

	console.log(digest, req.headers["x-razorpay-signature"]);

	if (digest === req.headers["x-razorpay-signature"]) {
		console.log("request is legit");
		// process it
		require("fs").writeFileSync(
			"payment1.json",
			JSON.stringify(req.body, null, 4)
		);
	} else {
		// pass it
	}
	res.json({ status: "ok" });
});

app.listen(1337, () => {
	console.log("server connected");
});
