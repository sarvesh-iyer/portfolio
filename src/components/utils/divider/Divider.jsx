import React from 'react'

export const Divider = (props) => {

    let {customClass} = props
    
    return (
        <hr className={["divider", customClass].join(' ')} />
    )
}
