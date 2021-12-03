import React, { Component } from "react";

import Text from './Text'
import Icon from './Icon'
import Link from './Link'
import SkillTag from './SkillTag'


// title, years, links, tags, lang
class Project extends Component {
    getSkills(skill, skillset, lang, index) {
        return (
            <SkillTag name={skill} skills={skillset} lang={lang} key={index}/>
        )
    }


    render() {
        return (
            <div>
                <p>
                    <span>
                        <span className='project-title'>
                            <span className="red bold">
                            <Icon hex={ this.props.icon } /> <Text text={ this.props.title } lang={ this.props.lang } />
                            </span>
                            {' '}
                            <span className="bold magenta">{'('}</span>{this.props.years}<span className="bold magenta">{')'}</span>
                        </span>
                        
                        <span>
                            { this.props.links.map(function(l, i) {
                                return <Link link={l} lang={this.props.lang} key={i} />
                            }, this)}
                        </span>
                    </span>
                </p>
                <p>
                    <span>
                        <Text text={ this.props.description } lang={ this.props.lang } />
                    </span>
                </p>
                { this.props.skills && (
                <p className='half-spacer'>
                    <span className='tags-line'>
                        {this.props.skills.map(function(l, i) {
                            return this.getSkills(l, this.props.skillset, this.props.lang, i);
                        }, this)}
                    </span>
                </p>)}

                <div className="spacer"></div>
                <div className="spacer"></div>
                
            </div>
        )
    }
}

export default Project;
