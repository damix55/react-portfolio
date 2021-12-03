import React from 'react';
import Text from './Text'
import Icon from './Icon'
import Link from './Link'


function getLink(link, lang, index) {
    var title = link.title[lang]
    if (title === undefined) {
        title = link.title
    }
    return (
        <span className="project-links-container" key={index} title={title}>
            <a className="project-link" href={link.href} target='_blank' rel="noreferrer">
                <Icon hex={link.icon} /> {/* <Text text={title} lang={lang} /> */}
            </a>
        </span>
    )
}

// start, end, title, at, links, lang
const Exp = (props) => {
    var mobileView = window.innerWidth < 800;

    var years = <span className="element-left">
                    { !mobileView && <span className="bold magenta">* </span> }
                    <span className="bold magenta">{'{'}</span>{props.start}-{props.end}<span className="bold magenta">{'}'}</span>
                </span>
    var title = <span>
                    <span className='project-title' >
                        <Text text={props.title} lang={props.lang}/>
                    </span>
                    
                    { props.links && props.links.map(function(l, i) {
                        l['color'] = 'orange'
                        return <Link link={l} lang={props.lang} key={i} />
                    })}
                </span>

    return (
        <div>
            <div className="element-container">
                
                { !mobileView && <p>{years}{title}</p> }
                    
                { mobileView && <p>{title}</p> }
                <p>
                    { !mobileView && (<span className="element-left"></span>) }
                    <span>
                        <span className="bold orange">@</span> <Text text={props.at} lang={props.lang}/>
                    </span>
                </p>
                { mobileView && <p>{years}</p>}
            </div>
            <div className="spacer"></div>
        </div>
    )};

export default Exp;
