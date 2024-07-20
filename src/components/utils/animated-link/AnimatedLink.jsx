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
        inheritFontSize
    } = props

    return (
        <Link
            to={link}
            target={samePage ? '_self' : '_blank'}
            className={[
                "animated-underline transition",
                noAccentColor && "no-accent-color",
                customClass
            ].join(' ')}
            style={inheritFontSize ? {fontSize: 'inherit'} : {}}
        >
            {children}
        </Link>
    )
}
