import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';

export default function Sidebar() {
	return (
		<div className='sidebar'>
			<Button
				startIcon={<AddIcon fontSize='large' />}
				className='sidebar-compose'
			>
				Compose
			</Button>
			<SidebarOption
				Icon={InboxIcon}
				title='Inbox'
				number={54}
				selected={true}
			/>
			<SidebarOption Icon={StarIcon} title='Starred' number={50} />
			<SidebarOption Icon={StarIcon} title='Starred' number={50} />
			<SidebarOption Icon={StarIcon} title='Starred' number={50} />
			<SidebarOption Icon={StarIcon} title='Starred' number={50} />
			<div className='sidebar-footer'>
				<div className='sidebar-footerIcons'>
					<IconButton>
						<PersonIcon />
					</IconButton>
					<IconButton>
						<DuoIcon />
					</IconButton>
					<IconButton>
						<PhoneIcon />
					</IconButton>
				</div>
			</div>
		</div>
	);
}
