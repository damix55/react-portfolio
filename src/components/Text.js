import React from 'react'
import parse from 'html-react-parser';

function formatText(text) {
    var tagToClass = {
        'y': 'yellow',
        'g': 'green',
        'c': 'cyan',
        'b': 'blue',
        'm': 'magenta',
        'r': 'red',
        'Y': 'yellow bold',
        'G': 'green bold',
        'C': 'cyan bold',
        'B': 'blue bold',
        'M': 'magenta bold',
        'R': 'red bold',
        'bold': 'bold'
    }
    for (const [key, value] of Object.entries(tagToClass)) {
        text = text.replaceAll(`<${key}>`, `<span className="${value}">`);
    }
    text = text.replaceAll(/<\/\w>/g,'</span>');

    // icons
    text = text.replaceAll('<i>', '<span className="icon">&#x');
    text = text.replaceAll('</i>',';</span>');
    return parse(text);
}
 
function getTranslation(text, lang) {
    if (text !== undefined) {
        if (text[lang] === undefined) {
            return text
        }
        return text[lang]
    }
    return ''
    
}

// text, lang
const Text = (props) => {
    return (
        <span>
            { formatText(getTranslation(props.text, props.lang)) }
        </span>
    )
}

export default Text
export {getTranslation}