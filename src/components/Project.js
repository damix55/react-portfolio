import React, { Component } from "react";

import Text from './Text'
import Icon from './Icon'
import Gallery from './Gallery'


// title, years, links, lang
class Project extends Component {
    constructor(props) {
        super(props);
        this.getLink = this.getLink.bind(this);
      }

    getLink(link, lang, index, length) {
        if (link.gallery) {
            var galleryText = {
                'en': 'gallery',
                'it': 'galleria'
            }
            
            return (
                <span className="project-links-container"  key={index}>
                    <Gallery img={link.gallery} className='project-link'>
                        <Icon hex='f7ee' /> <Text text={galleryText[lang]} lang={lang} />
                    </Gallery>
                    { index < length-1 &&
                        <span className='double-space'></span>
                    }
                </span>
            )
        }
        else {
            return (
                <span className="project-links-container"  key={index}>
                    <a className="project-link" href={link.href} target='_blank'>
                        <Icon hex={link.icon} /> <Text text={link.title} lang={lang} />
                    </a>
                    { index < length-1 &&
                        <span className='double-space'></span>
                    }
                </span>
            )
        }
    }
    

    render() {
        return (
            <div>
                <p>
                    <span className="double-space"></span>
                    <span className="project-right">
                        <span className="red bold">
                            <Text text={ this.props.title } lang={ this.props.lang } />
                        </span>
                        {' '}
                        <span className="bold magenta">{'('}</span>{this.props.years}<span className="bold magenta">{')'}</span>
                    </span>
                </p>
                <p>
                    <span className="double-space"></span>
                    <span>
                        { this.props.links.map(function(l, i) {
                            return this.getLink(l, this.props.lang, i, this.props.links.length);
                        }, this)}
                    </span>
                </p>

                <div className="spacer"></div>
            </div>
        )
    }
}

export default Project;
