import React, { Component } from "react";
import Text from './Text'
import Icon from './Icon'


class SkillTag extends Component {
    render() {
        if (Object.keys(this.props.skills).length !== 0) {
            var skill = this.props.skills[this.props.name]
            if(skill) {
                var content = (
                    <span className={`border-hover-${skill.color} border-grey tag`}>
                        <span className={ skill.cert && 'tag-left'}>
                            <Icon hex={skill.icon} />
                            {' '}
                            <Text text={skill.title} lang={this.props.lang} />
                        </span>
                        { skill.cert && 
                            <span>
                                <Icon hex='f623' />
                            </span>
                        }
                    </span>
                )
                if (skill.cert) {
                    return (
                        <a href={skill.cert} target='_blank' rel="noreferrer">
                            <span className='tag-container cursor-pointer'>
                                {content}
                            </span>
                        </a>
                    )
                }
                return (
                    <span className='tag-container cursor-normal'>
                        {content}
                    </span>
                )
            }
            return null
        }
        return null
    }
};

export default SkillTag;
