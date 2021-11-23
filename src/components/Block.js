import React from 'react'

import Text, {getTranslation} from './Text'
import Exp from './Exp'
import Skills from './Skills'


function getComponent(component, lang) {
    switch(Object.keys(component)[0]) {
        case 'space':
            var spaces = []
            for (const _ of Array(component.space).keys()) {
                spaces.push(<div className="spacer"></div>)
            }
            return spaces;


        case 'text':
            return (
                <p>
                    <Text
                        text={component.text}
                        lang={lang}
                    />
                </p>
            );


        case 'exp':
            return (
                <Exp
                    start={component.exp.start}
                    end={component.exp.end}
                    title={component.exp.title}
                    at={component.exp.at}
                    lang={lang} 
                />
            );

        case 'skills':
            return (
                <Skills
                    skills={component.skills}
                    lang={lang} 
                />
            );

        default:
            return null
    }
}


// title, content, lang
const Block = (props) => {
    return (
        <div>
            <section>
                <h2>// { getTranslation(props.title, props.lang) }</h2>
                { props.content.map(function(c) {
                    return getComponent(c, props.lang);
                })}
            </section>
            <div className="spacer"></div>
        </div>
    )
}

export default Block