import React from 'react'

import Text, {getTranslation} from './Text'
import Exp from './Exp'
import Skills from './Skills'
import Project from './Project'


function getComponent(component, lang, skills, i) {
    switch(Object.keys(component)[0]) {
        case 'space':
            var spaces = []
            for (const j of Array(component.space).keys()) {
                spaces.push(<div key={`component-${i}-${j}`} className="spacer"></div>)
            }
            return spaces;


        case 'text':
            return (
                <p key={`component-${i}`}>
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
                    links={component.exp.links}
                    lang={lang} 
                    key={`component-${i}`}
                />
            );

        case 'skills':
            return (
                <Skills
                    skills={component.skills}
                    lang={lang}
                    key={`component-${i}`}
                    skillset={skills}
                />
            );

        case 'project':
            return (
                <Project
                    title={component.project.title}
                    icon={component.project.icon}
                    years={component.project.years}
                    description={component.project.description}
                    links={component.project.links}
                    skills={component.project.skills}
                    skillset={skills}
                    lang={lang}
                    key={`component-${i}`}
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
                { props.content.map(function(c, i) {
                    return getComponent(c, props.lang, props.skills, i);
                })}
            </section>
        </div>
    )
}

export default Block