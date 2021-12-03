import React, { Component } from "react";
import Text from './Text'
import Icon from './Icon'


class SkillTag extends Component {
    render() {
        if (Object.keys(this.props.skills).length !== 0) {
            var skill = this.props.skills[this.props.name]
            if(skill) {
                return (
                    <span className='tag-container'>
                        <span className={`background-hover-${skill.color} border-${skill.color} tag`}>
                            <Icon hex={skill.icon} /> <Text text={skill.title} lang={this.props.lang} />
                        </span>
                    </span>
                )
            }
            return null
        }
        return null
    }
};

export default SkillTag;
