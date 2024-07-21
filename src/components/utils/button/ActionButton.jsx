import React from 'react'
import { Button } from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import './button.css'

export const ActionButton = (props) => {

    let {
        children,
        customClass,
        icon
    } = props

    return (
        <button 
            className={[
                "action-btn flex items-center",
                customClass,
                !icon && "pr-6"
            ].join(' ')}
        >
            {children}
            {icon && (
                <div className="animated-arrow-container">
                    <span className="animated-arrow transition-effect">
                        {icon}
                    </span>
                </div>
            )}
        </button>
    )
}
