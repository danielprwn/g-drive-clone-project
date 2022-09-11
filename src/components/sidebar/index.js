import React from 'react'
import NewFile from './NewFile'
import SidebarItem from './SidebarItem'
import '../../styles/Sidebar.css'

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import StarsIcon from '@material-ui/icons/Stars';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import StorageIcon from '@material-ui/icons/Storage';

function index() {
    return (
        <div className="sidebar">
            <NewFile />
            <div className="sidebar_itemsContainer">
                <SidebarItem arrow icon={(<InsertDriveFileIcon />)} label={'My Drive'} />
                <SidebarItem arrow icon={(<ImportantDevicesIcon />)} label={'Computers'} />
                <SidebarItem icon={(<PeopleOutlineIcon />)} label={'Shared With Me'} />
                <SidebarItem icon={(<QueryBuilderIcon />)} label={'Recent'} />
                <SidebarItem icon={(<StarsIcon />)} label={'Starred'} />
                <SidebarItem icon={(<DeleteForeverIcon />)} label={'Trash'} />
                <hr />
                <SidebarItem icon={(<StorageIcon />)} label={'Storage'} />
            </div>
        </div>
    )
}

export default index
