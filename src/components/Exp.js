import React from 'react';
import Text from './Text'

// start, end, title, at, lang
const Exp = (props) => {
    return (
        <div>
            <div className="element-container">
                <p>
                    <span className="element-left">
                    <span className="bold yellow">*</span> [{props.start}-{props.end}]
                    </span>
                    <Text text={props.title} lang={props.lang}/>
                </p>
                <p>
                    <span className="element-left"></span>
                    <span><span className="cyan">@</span> <Text text={props.at} lang={props.lang}/></span>
                </p>
            </div>
            <div className="spacer"></div>
        </div>
    )};

export default Exp;
