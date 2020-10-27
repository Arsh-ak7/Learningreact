import React from 'react'
import '../CSS/Header.css'
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';


export default function Header() {
    return (
        <div className="header">
            <div className="header-icons">
                <div className="header-icon header-icon-active">
                    <HomeIcon />
                    <p>Home</p>
                </div>
                <div className="header-icon">
                    <FlashOnIcon />
                    <p>Trending</p>
                </div>
                <div className="header-icon">
                    <LiveTvIcon />
                    <p>Verified</p>
                </div>
                <div className="header-icon">
                    <VideoLibraryIcon />
                    <p>Collections</p>
                </div>
                <div className="header-icon">
                    <SearchIcon />
                    <p>Search</p>
                </div>
                <div className="header-icon">
                    <PersonOutlineOutlinedIcon />
                    <p>Account</p>
                </div>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Hulu_Logo.svg/1024px-Hulu_Logo.svg.png" alt=""/>
        </div>
    )
}
