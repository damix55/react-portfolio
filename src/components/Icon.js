import React from 'react'
import parse from 'html-react-parser';


const Icon = (props) => {
    return (
        <span className={`icon ${ props.color }`}>{parse(`&#x${props.hex.substring(0,4)};`)}</span>
    )
}

export default Icon