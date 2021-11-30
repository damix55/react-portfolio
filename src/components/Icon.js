import React from 'react'
import parse from 'html-react-parser';


const Icon = (props) => {
    if (props.hex) {
        return (
            <span className={`icon ${ props.color }`}>{parse(`&#x${props.hex.substring(0,4)};`)}</span>
        )
    }
    else {
        return null
    }
}

export default Icon