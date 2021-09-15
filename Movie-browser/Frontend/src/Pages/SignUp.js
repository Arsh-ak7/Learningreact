import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import "../CSS/SignUp.css";
import { useForm } from "../utils/hooks";
import { AuthContext } from "../context/auth";

export default function SignUp() {
	const [errors, setErrors] = useState({});
	const context = useContext(AuthContext);
	const history = useHistory();

	const initialState = {
		email: "",
		username: "",
		password: "",
		confirmPassword: "",
	};

	const { onChange, onSubmit, values } = useForm(registerUser, initialState);

	const [addUser, { loading }] = useMutation(REGISTER_USER, {
		update(proxy, { data: { register: userData } }) {
			context.login(userData);
			history.push("/home");
		},
		onError(err) {
			setErrors(err.graphQLErrors[0].extensions.exception.errors);
		},
		variables: values,
	});

	function registerUser() {
		addUser();
	}

	return (
		<div className='signUp'>
			<div className='signUp-cover'>
				<div className='signUp-wrapper'>
					<div className='signUp-form'>
						<h1 className='signUp-header'>SignUp</h1>

						<form onSubmit={onSubmit}>
							<input
								type='email'
								className='input-field'
								name='email'
								placeholder='Email'
								value={values.email}
								onChange={onChange}
							/>
							<input
								type='text'
								className='input-field'
								name='username'
								placeholder='Username'
								value={values.username}
								onChange={onChange}
							/>
							<input
								type='password'
								className='input-field'
								name='password'
								placeholder='Password'
								value={values.password}
								onChange={onChange}
							/>
							<input
								type='password'
								className='input-field'
								name='confirmPassword'
								placeholder='Confirm Password'
								value={values.confirmPassword}
								onChange={onChange}
							/>
							<button type='submit' className='signUp-button'>
								{loading ? "Signing Up" : "SignUp"}
							</button>
						</form>
						{Object.keys(errors).length > 0 && (
							<div className='ui error message'>
								<div className='list'>
									{Object.values(errors).map((value) => (
										<li key={value}>{value}</li>
									))}
								</div>
							</div>
						)}
						<div className='remember-me'>
							<span>Need help?</span>
						</div>
						<div className='login-new'>
							<span>Already have an account?</span>
							<Link className='login-link' to='/login'>
								Log in
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const REGISTER_USER = gql`
	mutation register(
		$username: String!
		$email: String!
		$password: String!
		$confirmPassword: String!
	) {
		register(
			registerInput: {
				username: $username
				email: $email
				password: $password
				confirmPassword: $confirmPassword
			}
		) {
			id
			email
			username
			createdAt
			token
		}
	}
`;
