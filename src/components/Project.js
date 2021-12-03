import React, { Component } from "react";

import Text from './Text'
import Icon from './Icon'
import Gallery from './Gallery'


// title, years, links, tags, lang
class Project extends Component {
    constructor(props) {
        super(props);
      }

    getLink(link, lang, index) {
        if (link.gallery) {
            var galleryText = {
                'en': 'gallery',
                'it': 'galleria'
            }

            return (
                <span className="project-links-container" key={index}>
                    <Gallery img={link.gallery} className='project-link'>
                        <Icon hex='f7ee' /> <Text text={galleryText[lang]} lang={lang} />
                    </Gallery>
                </span>
            )
        }
        else {
            return (
                <span className="project-links-container" key={index}>
                    <a className="project-link" href={link.href} target='_blank' rel="noreferrer">
                        <Icon hex={link.icon} /> <Text text={link.title} lang={lang} />
                    </a>
                </span>
            )
        }
    }
    

    getSkills(skill, lang, tags, index) {
        console.log()
        var color = tags[skill].color
        return (
            <span className='tag-container' key={index}>
                <span className={`background-hover-${color} border-${color} tag`}>
                    <Icon hex={tags[skill].icon} /> <Text text={tags[skill].title} lang={lang} />
                </span>
            </span>
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
                                return this.getLink(l, this.props.lang, i);
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
                    <span>
                        {this.props.skills.map(function(l, i) {
                            return this.getSkills(l, this.props.lang, this.props.tags, i);
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
