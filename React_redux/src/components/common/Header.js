import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
	const activeStyle = { color: '#FA123C' };
	return (
		<div>
			<NavLink to='/' activeStyle={activeStyle} exact>
				Home
			</NavLink>
			{' | '}
			<NavLink to='/coursepage' activeStyle={activeStyle}>
				Courses
			</NavLink>
			{' | '}
			<NavLink to='/about' activeStyle={activeStyle}>
				About
			</NavLink>
		</div>
	);
}
