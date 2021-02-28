import React from 'react';
import './EmailRow.css';

export default function EmailRow({ id, title, subject, description, time }) {
	return (
		<div className='emailRow'>
			<div className='emailRow-options'></div>
			<div className='emailRow-title'></div>
			<div className='emailRow-message'></div>
			<div className='emailRow-desc'></div>
		</div>
	);
}
