import React from 'react'
import parse from 'html-react-parser';


const Icon = (props) => {
    var className = 'icon'
    if (props.color) {
        className += ` ${ props.color }`
    }

    if (props.hex) {
        return (
            <span className={className}>{parse(`&#x${props.hex.substring(0,4)};`)}</span>
        )
    }
    else {
        return null
    }
}

export default Icon