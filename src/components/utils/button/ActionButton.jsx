import React from 'react'
import { Button } from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import './button.css'

export const ActionButton = (props) => {

    let {
        children,
        customClass,
        showIcon,
        icon
    } = props

    return (
        <button 
            className={[
                "action-btn flex items-center",
                customClass,
                !showIcon && "pr-6"
            ].join(' ')}
        >
            {children}
            {showIcon && (
                <div className="animated-arrow-container">
                    <span className="animated-arrow transition">
                        {icon}
                    </span>
                </div>
            )}
        </button>
    )
}
