import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import "./Header.css";

import YouTubeLogo from './png-clipart-youtube-logo-youtube-premium-logo-youtube-awards-youtube-music-youtube-text-trademark-thumbnail.png'; 

function Header() {
  const [inputSearch, setInputSearch] = useState('');

  const handleInputChange = (e) => {
    setInputSearch(e.target.value);
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src={YouTubeLogo} 
          alt="YouTube Logo"
        />
      </Link>
      
      <div className="search-container">
        <input
          onChange={handleInputChange}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}> 
          <SearchIcon className="header_inputButton"/>
        </Link>
      </div>

      <div className="menu-icons">
        <MenuIcon />
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar alt="User Avatar" src="/download.jpeg" />
      </div>
    </div>
  );
}

export default Header;





