import React from 'react'
import './capsule.css'

export const Capsule = (props) => {
    let {
        children,
        icon,
        link,
        customclass
    } = props
    return (
        <a 
            href={link}
            target='_blank'
            className={"capsule flex items-center transition-effect " + customclass}
        >
            {children}
            {icon && (
                <span className='ml-3 w-6 h-6'>
                    <img 
                        src={icon} 
                        alt={children.toString()} 
                        width={24} 
                        height={24}
                    />
                </span>
            )}
        </a>
    )
}
