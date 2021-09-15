import React, { useContext, useState } from 'react';
import { Checkbox } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { AuthContext } from '../context/auth';
import { useForm } from '../utils/hooks';
import '../CSS/Login.css';

export default function Login() {
	const [errors, setErrors] = useState({});
	const history = useHistory();
	const context = useContext(AuthContext);

	const initialState = {
		username: '',
		password: '',
	};

	const { onChange, onSubmit, values } = useForm(loggedUser, initialState);

	const [loginUser, { loading }] = useMutation(LOGIN_USER, {
		update(_, { data: { login: userData } }) {
			context.login(userData);
			history.push('/home');
		},
		onError(err) {
			setErrors(err.graphQLErrors[0].extensions.exception.errors);
		},
		variables: values,
	});

	function loggedUser() {
		loginUser();
	}

	return (
		<div className='login'>
			<div className='login-cover'>
				<div className='login-wrapper'>
					<div className='login-form'>
						<h1 className='login-header'>LogIn</h1>
						<form onSubmit={onSubmit}>
							{/* {errors !== "" && <p className='err-message'>{errors}</p>} */}
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
							<button type='submit' className='login-button'>
								{loading ? 'Logging in' : 'Login'}
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
							<span>
								<Checkbox className='checkbox' />
								Remember Me
							</span>
							<span>Need help?</span>
						</div>
						<div className='sign-up-new'>
							<span>New Here?</span>
							<Link className='signup-link' to='/SignUp'>
								SignUp Now
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const LOGIN_USER = gql`
	mutation login($username: String!, $password: String!) {
		login(username: $username, password: $password) {
			id
			email
			username
			createdAt
			token
		}
	}
`;
