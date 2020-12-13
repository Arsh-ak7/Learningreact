import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router-dom';

export default function EditExercise() {
	const [exercise, setExercise] = useState({
		username: '',
		description: '',
		duration: 0,
		date: new Date(),
	});
	const [users, setUsers] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		axios
			.get('http://localhost:5000/exercises/' + id)
			.then((res) => {
				console.log(res);
				setExercise({
					username: res.data.username,
					duration: res.data.duration,
					description: res.data.description,
					date: new Date(res.data.date),
				});
			})
			.catch((err) => console.log(err));

		axios.get('http://localhost:5000/users').then((res) => {
			if (res.data.length > 0) {
				setUsers(res.data.map((user) => user.username));
			}
		});
	}, []);

	function onChangeDate(date) {
		setExercise({ ...exercise, date: date });
	}

	function handleChange(e) {
		setExercise({
			...exercise,
			[e.target.name]: e.target.value,
		});
	}

	function onSubmit(e) {
		e.preventDefault();
		axios
			.post('http://localhost:5000/exercises/update/' + id, exercise)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
		setExercise({
			username: '',
			description: '',
			duration: 0,
			date: '',
		});
	}
	const refCo = useRef('Arsh');

	return (
		<div>
			<h3>Edit Exercise Log</h3>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label>Username: </label>
					<select
						ref={refCo}
						className='form-control'
						name='username'
						value={exercise.username || ''}
						onChange={handleChange}
					>
						{users.map(function (user) {
							return (
								<option key={user} value={user}>
									{user}
								</option>
							);
						})}
					</select>
				</div>
				<div className='form-group'>
					<label>Description: </label>
					<input
						type='text'
						required
						className='form-control'
						name='description'
						value={exercise.description || ''}
						onChange={handleChange}
					/>
				</div>
				<div className='form-group'>
					<label>Duration (in minutes): </label>
					<input
						type='text'
						className='form-control'
						value={exercise.duration || ''}
						name='duration'
						onChange={handleChange}
					/>
				</div>
				<div className='form-group'>
					<label>Date: </label>
					<div>
						<DatePicker
							selected={exercise.date}
							name='date'
							onChange={onChangeDate}
						/>
					</div>
				</div>

				<div className='form-group'>
					<input
						type='submit'
						value='Edit Exercise Log'
						className='btn btn-primary'
					/>
				</div>
			</form>
		</div>
	);
}
