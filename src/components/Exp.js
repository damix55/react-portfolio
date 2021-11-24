import React from 'react';
import Text from './Text'
import useWindowDimensions from './WindowDimensions'

// start, end, title, at, lang
const Exp = (props) => {
    const { height, width } = useWindowDimensions();
    var mobileView = width < 800;

    var years = <span className="element-left">
                    { !mobileView && <span className="bold magenta">* </span> }
                    <span className="bold magenta">{'{'}</span>{props.start}-{props.end}<span className="bold magenta">{'}'}</span>
                </span>
    var title = <Text text={props.title} lang={props.lang}/>

    return (
        <div>
            <div className="element-container">
                
                { !mobileView && <p>{years}{title}</p>}
                    
                { mobileView && <p>{title}</p>}
                <p>
                    { !mobileView && (<span className="element-left"></span>)}
                    <span>
                        <span className="bold yellow">@</span> <Text text={props.at} lang={props.lang}/>
                    </span>
                </p>
                { mobileView && <p>{years}</p>}
            </div>
            <div className="spacer"></div>
        </div>
    )};

export default Exp;
