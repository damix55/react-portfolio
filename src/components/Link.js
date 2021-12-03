
import React from 'react'

import Icon from './Icon'
import Gallery from './Gallery'


// link, lang
const Link = (props) => {
    var link = props.link
    var lang = props.lang
    if (link.gallery) {
        var galleryText = {
            'en': 'gallery',
            'it': 'galleria'
        }

        return (
            <span className={'project-links-container'} title={galleryText[lang]}>
                <Gallery img={link.gallery} className={`project-link hover-blue`}>
                    <Icon hex='f7ee' /> {/* <Text text={galleryText[lang]} lang={lang} /> */}
                </Gallery>
            </span>
        )
    }
    else {
        var title = link.title[lang]
        if (title === undefined) {
            title = link.title
        }
        
        return (
            <span className="project-links-container" title={title}>
                <a className={`project-link hover-${link.color}`} href={link.href} target='_blank' rel="noreferrer">
                    <Icon hex={link.icon} /> {/* <Text text={link.title} lang={lang} /> */}
                </a>
            </span>
        )
    }
}

export default Link