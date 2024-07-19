import React from 'react'
import { Button } from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import './button.css'
import NorthEastIcon from '@mui/icons-material/NorthEast';

export const ActionButton = (props) => {

    let {
        children,
        customClass
    } = props

    return (
        <button 
            className={[
                "action-btn flex items-center",
                customClass
            ].join(' ')}
        >
            {children}
            <div className="animated-arrow-container">
                <span className="animated-arrow">
                    <NorthEastIcon className='arrow' />
                </span>
            </div>
        </button>
    )
}
