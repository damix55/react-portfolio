import React, { Component } from "react";
import yaml from 'js-yaml'
import Block from './Block'
import Text from './Text'
import Icon from './Icon'

class Content extends Component {
    constructor (props) {
        super(props)

        this.state = {
            pageContent: {},
            lang: props.lang
        }

        this.fetchData(props.name)
    }

    
    componentDidUpdate = (prevProps) => {
        if (prevProps.name !== this.props.name) {
            this.fetchData(this.props.name)
        }

        if (prevProps.lang !== this.props.lang) {
            this.setState({lang: this.props.lang})
        }
    }
    
    
    fetchData(name) {
        const data = require(`../pages/${name}.yml`)
        fetch(data.default)
        .then(r => r.text())
        .then(text => yaml.load(text))
        .then(yml => this.setState({pageContent: yml}));
    }



  render() {
    function getBlock(component, lang, tags, index) {
      switch(Object.keys(component)[0]) {
        case 'block':
            var b = component.block
            return (
              <Block
                title={b.title}
                content={b.content}
                tags={tags}
                lang={lang} 
                key={`block-${index}`}
              />
            );

        case 'title':
          var title = component.title
          return (
            <h2 className='half-spacer'>
              <span>
                <Icon hex={title.icon} />
                {' '}
                <Text text={title.text} lang={lang} />
              </span>
            </h2>
          )
        default:
            return null
      }
    }

    return (
      <div>
        { this.state.pageContent.content !== undefined &&
          this.state.pageContent.content.map(function(b, i) {
            return getBlock(b, this.state.lang, this.state.pageContent.tags, i);
          }, this)
        }
      </div>
    );
  }
}

export default Content;
