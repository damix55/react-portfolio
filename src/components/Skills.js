import React from 'react'
import parse from 'html-react-parser'
import Text from './Text'
import useWindowDimensions from './WindowDimensions'


function getSkills(skill, lang) {
    var elements = []
    skill.elements.forEach(function (item, index) {
        const { height, width } = useWindowDimensions();
        var mobileView = width < 800;

        var elementLeft =
            <div>
                <span className="icon yellow">{parse(`&#x${skill.icon};`)}</span>{' '}
                <span className="bold"><Text text={skill.title} lang={lang} /></span>
            </div>

        var skillLeft =
            <span className="green skill-left">
                <Text text={item.title} lang={lang} />
            </span>

        var e = 
            <div>
                { !mobileView &&
                    <p>
                        <span className="element-left">
                            { index==0 && elementLeft }
                        </span>
                        { skillLeft }
                        { getSkillValue(item.value, lang)}
                    </p>
                }
                { mobileView && 
                    <div>
                        { index==0 && <p>{elementLeft}</p> }
                        <p>{skillLeft} {getSkillValue(item.value, lang)}</p>
                    </div>
                }
            </div>
                
        elements.push(e)  
        
    });

    return (
        <div className="elements-container">
            { elements }
            <div class='spacer'></div>
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
                { props.skills.slice(0, half).map(function(s) {
                    return getSkills(s, props.lang);
                })}
            </div>
            <div className="skill-column skill-column-dx">
                { props.skills.slice(half).map(function(s) {
                    return getSkills(s, props.lang);
                })}
            </div>
        </div>
    )};

export default Skills;
