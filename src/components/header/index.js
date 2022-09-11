import React from 'react';
import GDriveLogo from '../../graphics/G_DRIVE.png';
import '../../styles/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import AppsIcon from '@material-ui/icons/Apps';

function index({ userPhoto }) {
    return (
        <div className='header'>
            <div className="header_logo">
                <img src={GDriveLogo} alt="G_DRIVE" />
                <span>G-DRIVE CLONE</span>
            </div>
            <div className="header_searchContainer">
                <div className="header_searchBar">
                    <SearchIcon />
                    <input type="text" placeholder='Search files...' />
                </div>
            </div>
            <div className="header_icons">
                <span>
                    <ContactSupportIcon />
                    <SettingsApplicationsIcon />
                </span>
                <AppsIcon />
                <img src={userPhoto} alt="User"/>
            </div>
        </div>
    )
}

export default index
