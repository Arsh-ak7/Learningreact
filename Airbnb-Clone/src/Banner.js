import React, { useState } from 'react'
import './Banner.css'
import Search from './Search'
import {Button} from '@material-ui/core'
import { useHistory } from 'react-router-dom';
export default function Banner() {
    const [showSearch, setShowSearch] = useState(false);
    const history=useHistory();
    return (
        <div className="banner">
            <div className="banner-search">
                {showSearch && <Search />}
                <Button onClick={()=>setShowSearch(!showSearch)}className="banner-searchbutton" variant="outlined">
                    {showSearch?"Hide":"Search Dates"}
                </Button>
            </div>
            <div className="banner-info">
                <h1>Get Out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you</h5>
                <Button variant="outlined" onClick={()=>history.push('/search')}>Explore Nearby</Button>
            </div>
        </div>
    )
}
