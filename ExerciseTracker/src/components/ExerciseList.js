import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ExerciseList() {
	const [exercises, setExercise] = useState([]);

	const Exercise = (props) => (
		<tr>
			<td>{props.exercise.username}</td>
			<td>{props.exercise.description}</td>
			<td>{props.exercise.duration}</td>
			<td>{props.exercise.date.substring(0, 10)}</td>
			<td>
				<Link to={'/edit/' + props.exercise._id}>edit</Link> |{' '}
				<button
					onClick={() => {
						props.deleteExercise(props.exercise._id);
					}}
				>
					delete
				</button>
			</td>
		</tr>
	);

	useEffect(() => {
		axios
			.get('http://localhost:5000/exercises')
			.then((res) => {
				setExercise(res.data.map((exercises) => exercises));
			})
			.catch((err) => console.log(err));
	}, []);

	function deleteExercise(id) {
		axios
			.delete('http://localhost:5000/exercises/' + id)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
		setExercise(exercises.filter((el) => el._id !== id));
	}

	function exerciseList() {
		return exercises.map((currentExercise) => {
			return (
				<Exercise
					exercise={currentExercise}
					deleteExercise={deleteExercise}
					key={currentExercise._id}
				/>
			);
		});
	}

	return (
		<div>
			<h3>Logged Exercises</h3>
			<table className='table'>
				<thead className='thead-light'>
					<tr>
						<th>Username</th>
						<th>Description</th>
						<th>Duration</th>
						<th>Date</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>{exerciseList()}</tbody>
			</table>
		</div>
	);
}
