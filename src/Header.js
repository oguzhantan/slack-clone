import React, { useReducer,useState } from 'react'
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar } from "@material-ui/core"
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from "./stateProvider";

function Header() {

    const [channel, setChannels] = useState([]);
    const [{ user }] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                <Avatar
                    className="header__avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                <AccessTimeIcon/>
                {/* Avatars for logged in user */}
            </div>            
            <div className="header__search">
                <SearchIcon/>
                <input type="text" placeholder="Your Search"/>
            </div>
            <div className="header__right">
                <HelpOutlineIcon/>
                
            </div>
        </div>
    )
}

export default Header
