import React, { Component } from "react";
import yaml from 'js-yaml'
import Block from './Block'

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
            console.log(this.props.name)
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
    function getBlock(component, lang) {
      switch(Object.keys(component)[0]) {
        case 'block':
            var b = component.block
            return (
              <Block
                title={b.title}
                content={b.content}
                lang={lang} 
              />
            );
            
        default:
            return null
      }
    }

    return (
      <div class='main-content'>
        { this.state.pageContent.content !== undefined ? (
          this.state.pageContent.content.map(function(b) {
            return getBlock(b, this.state.lang);
          }, this)
        ) : (
          ''
        )}
        <div className="bottom-spacer"></div>
      </div>
    );
  }
}

export default Content;
