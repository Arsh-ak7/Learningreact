import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement("script");
		script.src = src;
		script.onload = () => {
			resolve(true);
		};
		script.onerror = () => {
			resolve(false);
		};
		document.body.appendChild(script);
	});
}

const __DEV__ = document.domain === "localhost";

function App() {
	const [name, setName] = useState("Arsh");
	async function displayRazorpay() {
		const res = await loadScript(
			"https://checkout.razorpay.com/v1/checkout.js"
		);
		if (!res) {
			alert("Razorpay SDK failed");
			return;
		}
		const options = {
			key: __DEV__ ? "rzp_test_nHaVbpE0xKVSil" : "PROD_KEY", // Enter the Key ID generated from the Dashboard
			amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
			currency: "INR",
			name: "Acme Corp",
			description: "Test Transaction",
			image: "https://localhost:1337/logo.svg",
			order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
			handler: function (response) {
				alert(response.razorpay_payment_id);
				alert(response.razorpay_order_id);
				alert(response.razorpay_signature);
			},
			prefill: {
				name,
			},
		};

		var rzp1 = new window.Razorpay(options);
		rzp1.open();
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a onClick={displayRazorpay}>Donate</a>
			</header>
		</div>
	);
}

export default App;

// rzp_test_nHaVbpE0xKVSil

// iOS0KcO3cnttEbt7lNp6cv7F
