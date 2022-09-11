import React from 'react'
import '../../styles/SidebarItem.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

function SidebarItem({ arrow, icon, label }) {
    return (
        <div className="sidebarItem">
            <div className="sidebarItem_arrow">
                {arrow && (<ArrowForwardIcon />)}
            </div>

            <div className='sidebarItem_main'>
                {icon}
                <h4>{label}</h4>
            </div>
        </div>
    )
}

export default SidebarItem
