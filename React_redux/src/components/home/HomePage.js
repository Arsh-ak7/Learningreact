import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
	return (
		<div className='jumbotron'>
			<h1>PluralSight Administration</h1>
			<p>React and react router for good use.</p>
			<Link to='about' className='btn btn-primary btn-lg'>
				Learn More
			</Link>
		</div>
	);
}
