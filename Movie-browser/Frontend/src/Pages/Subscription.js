import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import '../CSS/Subscription.css';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/client';
import { AuthContext } from '../context/auth';

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script');
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

const __DEV__ = document.domain === 'localhost';

export default function Subscription() {
	const [subsValue, setSubsValue] = useState(0);
	const [isSubscribed, setIsSubscribed] = useState(false);
	const { user } = useContext(AuthContext);
	const name = user.username;
	const username = name;
	const history = useHistory();

	const [subscribePay, { loading }] = useMutation(SUBSCRIBE, {
		variables: { subsValue },
	});

	const { data: { getUserData } = {} } = useQuery(GET_USER_DATA, {
		variables: { username },
	});

	async function displayRazorpay() {
		const res = await loadScript(
			'https://checkout.razorpay.com/v1/checkout.js'
		);
		if (!res) {
			alert('Razorpay SDK failed');
			return;
		}
		const { data } = await subscribePay();

		if (!loading) {
			const options = {
				key: __DEV__ ? 'rzp_test_nHaVbpE0xKVSil' : 'PROD_KEY', // Enter the Key ID generated from the Dashboard
				amount: data.subscribe.amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
				currency: data.subscribe.currency,
				name: 'Netflix',
				description: 'Test Transaction',
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png',
				order_id: data.subscribe.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
				handler: function () {
					alert('Payment Successfull');
					history.push('/home');
				},
				prefill: {
					name,
				},
			};

			var rzp1 = new window.Razorpay(options);
			rzp1.open();
		}
	}

	function handleClick(value) {
		setSubsValue(value);
		displayRazorpay(subsValue);
	}

	let accMarkup;
	if (!getUserData) {
		accMarkup = <p>Fetching your details</p>;
	} else {
		const { subscription, expiresOn } = getUserData;
		const date = new Date(expiresOn);
		if (subscription != null) setIsSubscribed(true);
		accMarkup = (
			<div className='user-details'>
				<span className='user-details-subs'>
					You have already have a subcription of value {subscription} which
					expires on {date.toString().substr(0, 15)}
				</span>
			</div>
		);
	}

	return (
		<div className='subscription-container'>
			<div className='subscription-wrapper'>
				<div className='subscription-tile'>
					<div className='price-tag'>
						<span className='symbol'>&#8377;</span>
						<span className='price'>299</span>
						<span className='month'>/month</span>
					</div>
					<div className='plan-name'>Movie browser Basic Plan</div>
					<div className='subs-details'>
						<span className='subs-detail-info'>2 Screens</span>
						<span className='subs-detail-info'>
							Content at Standard definition
						</span>
						<span className='subs-detail-info'>
							Download videos in any <br /> 1 device
						</span>
					</div>
					<div className='pay-now'>
						<button className='pay-btn' onClick={() => handleClick(299)}>
							Subscribe
						</button>
					</div>
				</div>
				<div className='subscription-tile'>
					<div className='price-tag'>
						<span className='symbol'>&#8377;</span>
						<span className='price'>499</span>
						<span className='month'>/month</span>
					</div>
					<div className='plan-name'>Movie browser Standard Plan</div>
					<div className='subs-details'>
						<span className='subs-detail-info'>4 Screens</span>
						<span className='subs-detail-info'>Content at FHD</span>
						<span className='subs-detail-info'>
							Download videos in any <br /> 2 devices
						</span>
					</div>
					<div className='pay-now'>
						<button className='pay-btn' onClick={() => handleClick(499)}>
							Subscribe
						</button>
					</div>
				</div>
			</div>
			{isSubscribed && accMarkup}
		</div>
	);
}

const SUBSCRIBE = gql`
	mutation subscribe($subsValue: Int!) {
		subscribe(subsValue: $subsValue) {
			id
			username
			currency
			amount
		}
	}
`;

const GET_USER_DATA = gql`
	query getUserData($username: String!) {
		getUserData(username: $username) {
			email
			subscription
			expiresOn
		}
	}
`;
