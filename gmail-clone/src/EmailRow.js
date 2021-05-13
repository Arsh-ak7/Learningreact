import React from "react";
import { Checkbox, IconButton } from "@material-ui/core";
import "./EmailRow.css";
import { LabelImportantOutlined, StarBorderOutlined } from "@material-ui/icons";
import { useHistory } from "react-router";

export default function EmailRow({ id, title, subject, description, time }) {
	const history = useHistory();

	return (
		<div className='emailRow' onClick={() => history.push("/mail")}>
			<div className='emailRow-options'>
				<Checkbox />
				<IconButton>
					<StarBorderOutlined />
				</IconButton>
				<IconButton>
					<LabelImportantOutlined />
				</IconButton>
			</div>
			<h3 className='emailRow-title'>{title}</h3>
			<div className='emailRow-message'>
				<h4>
					{subject}{" "}
					<span className='emailRow-desc'>
						{"- "}
						{description}
					</span>
				</h4>
			</div>
			<p className='emailRow-title'>{time}</p>
		</div>
	);
}
