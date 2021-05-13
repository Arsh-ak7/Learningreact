import { Checkbox, IconButton } from "@material-ui/core";
import React from "react";
import Section from "./Section";
import "./EmailList.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import GroupIcon from "@material-ui/icons/Group";
import EmailRow from "./EmailRow";

export default function EmailList() {
	return (
		<div className='emailList'>
			<div className='emailList-settings'>
				<div className='emailList-settings-left'>
					<Checkbox />
					<IconButton>
						<ArrowDropDownIcon />
					</IconButton>
					<IconButton>
						<RedoIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
				<div className='emailList-settings-right'>
					<IconButton>
						<ChevronLeftIcon />
					</IconButton>
					<IconButton>
						<ChevronRightIcon />
					</IconButton>
					<IconButton>
						<KeyboardHideIcon />
					</IconButton>
					<IconButton>
						<SettingsIcon />
					</IconButton>
				</div>
			</div>
			<div className='emailList-sections'>
				<Section Icon={InboxIcon} title='Primary' color='red' selected />
				<Section Icon={GroupIcon} title='Social' color='blue' />
				<Section Icon={LocalOfferIcon} title='Promotion' color='green' />
			</div>
			<div className='emailList-list'>
				<EmailRow
					title='Twitch'
					subject='Heyy fellow'
					description='This is a test '
					time='10pm'
				/>
			</div>
		</div>
	);
}
