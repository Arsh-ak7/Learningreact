import { IconButton } from "@material-ui/core";
import {
	WatchLater,
	ArrowBack,
	DeleteOutline,
	Email,
	MoveToInbox,
	Error,
	CheckCircle,
	LabelImportant,
	MoreVert,
	UnfoldMore,
	Print,
	ExitToApp,
} from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router";
import "./Mail.css";

export default function Mail() {
	const history = useHistory();
	return (
		<div className='mail'>
			<div className='mail-tools'>
				<div className='mail-toolsLeft'>
					<IconButton onClick={() => history.push("/")}>
						<ArrowBack />
					</IconButton>
					<IconButton>
						<MoveToInbox />
					</IconButton>
					<IconButton>
						<Error />
					</IconButton>
					<IconButton>
						<DeleteOutline />
					</IconButton>
					<IconButton>
						<Email />
					</IconButton>
					<IconButton>
						<WatchLater />
					</IconButton>
					<IconButton>
						<CheckCircle />
					</IconButton>
					<IconButton>
						<LabelImportant />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
				<div className='mail-toolsRight'>
					<IconButton>
						<UnfoldMore />
					</IconButton>
					<IconButton>
						<Print />
					</IconButton>
					<IconButton>
						<ExitToApp />
					</IconButton>
				</div>
			</div>
			<div className='mail-body'>
				<div className='mail-bodyHeader'>
					<h2>Subject</h2>
					<LabelImportant className='mail-important' />
					<p>Title</p>
					<p className='mail-time'>10pm</p>
				</div>
				<p className='mail-message'>This is a message</p>
			</div>
		</div>
	);
}
