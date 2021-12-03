import React, { Component } from "react";
import yaml from 'js-yaml'
import Block from './Block'
import Text from './Text'

class Content extends Component {
    constructor (props) {
        super(props)

        this.state = {
            pageContent: {},
            skills: {},
            lang: props.lang
        }

        this.fetchData(props.name, 'pageContent')
        this.fetchData('skills', 'skills')
    }

    
    componentDidUpdate = (prevProps) => {
        if (prevProps.name !== this.props.name) {
            this.fetchData(this.props.name, 'pageContent')
        }

        if (prevProps.lang !== this.props.lang) {
            this.setState({lang: this.props.lang})
        }
    }
    
    
    fetchData(name, state) {
        const data = require(`../pages/${name}.yml`)
        fetch(data.default)
        .then(r => r.text())
        .then(text => yaml.load(text))
        .then(yml => this.setState({[state]: yml}));
    }

    getBlock(component, lang, skills, index) {
      switch(Object.keys(component)[0]) {
        case 'block':
            var b = component.block
            return (
              <Block
                title={b.title}
                content={b.content}
                skills={skills}
                lang={lang} 
                key={`block-${index}`}
              />
            );

        case 'title':
          return <h2 className='half-spacer'><span>{'// '}<Text text={component.title} lang={lang} key={`title-${index}`} /></span></h2>
            
        default:
            return null
      }
    }

  render() {
    return (
      <div>
        { this.state.pageContent.content !== undefined &&
          this.state.pageContent.content.map(function(b, i) {
            return this.getBlock(b, this.state.lang, this.state.skills, i);
          }, this)
        }
      </div>
    );
  }
}

export default Content;
