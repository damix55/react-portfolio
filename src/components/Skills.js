import React from 'react'
import Text from './Text'
import SkillTag from './SkillTag'


function getSkills(skill, skillset, lang, i, mobileView) {
    var elements = []
    skill.elements.forEach(function (item, index) {
        elements.push(
            <SkillTag
                name={item}
                skills={skillset}
                lang={lang}
                key={index}
            />)   
    });
    elements = <span className='tags-line'>{ elements }</span>

    var elementLeft = (
        <span className='element-left'>
            <span className="magenta bold">{!mobileView && '* '}{'['}</span>
            <span><Text text={skill.title} lang={lang} /></span>
            <span className="magenta bold">{']'}</span>
        </span>
    )

    if (mobileView) {
        return (
            <div key={`${i}`}>
                <p className='half-spacer'>
                    {elementLeft}
                </p>
                <p className='half-spacer'>
                    {elements}
                </p>
                <div className='spacer'></div>
            </div>
        );
    }
    return (
        <p key={`${i}`} className='half-spacer'>
            {elementLeft}
            {elements}
        </p>
    );
    
}



// start, end, title, at, lang
const Skills = (props) => {
    var mobileView = window.innerWidth < 800;

    return (
        <div>
            { props.skills.map(function(s, i) {
                return getSkills(s, props.skillset, props.lang, i, mobileView);
            })}
        </div>
    )
};

export default Skills;
