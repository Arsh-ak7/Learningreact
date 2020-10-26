import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'
import '../Assets/css/Header.css'

export default function Header() {
    const[inputSearch,setInputSearch] = useState('');
    return (
        <div className="header">
            <div className="header-left">
                <MenuIcon />
            <Link to='/'>
            <img 
                className="header-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png" alt="" />
            </Link>
            </div>
            <div className="header-input">
                <input value={inputSearch} placeholder="Search" type="text" onChange={(e)=>setInputSearch(e.target.value)}/>
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header-inputbutton"/>
                </Link>
            </div>
            <div className="header-right">
                <VideoCallIcon className="header-icon" />
                <AppsIcon className="header-icon" />
                <NotificationsIcon className="header-icon" />
                <Avatar alt="" src="" />
            </div>
            
        </div>
    )
}
