import React, { useState } from 'react';
import axios from 'axios';

export default function CreateUser() {
	const [username, setUsername] = useState({
		username: '',
	});

	function handleChange(e) {
		setUsername({ username: e.target.value });
	}

	function onSubmit(e) {
		e.preventDefault();
		console.log(username);
		axios
			.post('http://localhost:5000/users/add', username)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
		setUsername({ username: '' });
	}

	return (
		<div>
			<h3>Create New User</h3>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label>Username: </label>
					<input
						type='text'
						required
						className='form-control'
						value={username.username}
						onChange={handleChange}
					/>
				</div>
				<div className='form-group'>
					<input
						type='submit'
						value='Create User'
						className='btn btn-primary'
					/>
				</div>
			</form>
		</div>
	);
}
