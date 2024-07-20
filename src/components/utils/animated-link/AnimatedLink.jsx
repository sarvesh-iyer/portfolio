import React from 'react'
import './animated_link.css'
import { Link } from 'react-router-dom'

export const AnimatedLink = (props) => {
    let {
        children, 
        link, 
        customClass, 
        samePage, 
        noAccentColor,
        inheritFontSize,
        icon
    } = props

    return (
        <Link
            to={link}
            target={samePage ? '_self' : '_blank'}
            className={[
                "animated-underline transition inline-flex items-center",
                noAccentColor && "no-accent-color",
                customClass
            ].join(' ')}
            style={inheritFontSize ? {fontSize: 'inherit'} : {}}
        >
            {children}
            
            {icon && (
                <span className="ml-1">
                    {icon}
                </span>
            )}
        </Link>
    )
}
