import React from 'react'
import '../../styles/FileCard.css'

import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';

const FileCard = ({ name }) => {
    return (
        <div className='fileCard'>
            <div className="fileCard--top">
                <InsertDriveFileOutlinedIcon style={{ fontSize: 140 }} />
            </div>

            <div className="fileCard--bottom">
                <p>{name}</p>
            </div>
        </div>
    )
}

export default FileCard