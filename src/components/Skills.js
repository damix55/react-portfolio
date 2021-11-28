import React from 'react'
import parse from 'html-react-parser'
import Text from './Text'


function getSkills(skill, lang, i) {
    var elements = []
    skill.elements.forEach(function (item, index) {
        var mobileView = window.innerWidth < 800;

        var elementLeft =
            <span>
                <span className="icon yellow">{parse(`&#x${skill.icon};`)}</span>{' '}
                <span className="bold"><Text text={skill.title} lang={lang} /></span>
            </span>

        var skillLeft =
            <span className="green skill-left">
                <Text text={item.title} lang={lang} />
            </span>

        var e = 
            <div key={`skill-${index}`}>
                { !mobileView &&
                    <p>
                        <span className="element-left">
                            { index===0 && elementLeft }
                        </span>
                        { skillLeft }
                        { getSkillValue(item.value, lang)}
                    </p>
                }
                { mobileView && 
                    <div>
                        { index===0 && <p>{elementLeft}</p> }
                        <p>{skillLeft} {getSkillValue(item.value, lang)}</p>
                    </div>
                }
            </div>
                
        elements.push(e)  
        
    });

    return (
        <div className="elements-container" key={`element-container-${i}`}>
            { elements }
            <div className='spacer'></div>
        </div>
    );
}


function getSkillValue(value, lang) {
    if(typeof value == "number") {
        return (
            <span className="bold magenta">
            <span>[</span>
            <span className="skill-bar">{'#'.repeat(value)}</span>
            <span>]</span>
        </span>
        )
    }
    return <Text text={value} lang={lang} />
}


// start, end, title, at, lang
const Skills = (props) => {
    var half = Math.ceil(props.skills.length/2)
    return (
        <div className="skill-row">
            <div className="skill-column">
                { props.skills.slice(0, half).map(function(s, i) {
                    return getSkills(s, props.lang, i);
                })}
            </div>
            <div className="skill-column skill-column-dx">
                { props.skills.slice(half).map(function(s, i) {
                    return getSkills(s, props.lang, i);
                })}
            </div>
        </div>
    )};

export default Skills;
