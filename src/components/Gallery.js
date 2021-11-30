import React, { Component } from "react";
import Lightbox from "react-image-lightbox";

import 'react-image-lightbox/style.css';
  

class Gallery extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          photoIndex: 0,
          isOpen: false
        };
      }
    

    render() {
        const { photoIndex, isOpen } = this.state;

        return (
            <span className={this.props.className} onClick={() => this.setState({ isOpen: true })}>
                {this.props.children}
                
                {isOpen && (
                <Lightbox
                    mainSrc={this.props.img[photoIndex]}
                    nextSrc={this.props.img[(photoIndex + 1) % this.props.img.length]}
                    prevSrc={this.props.img[(photoIndex + this.props.img.length - 1) % this.props.img.length]}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() =>
                    this.setState({
                        photoIndex: (photoIndex + this.props.img.length - 1) % this.props.img.length
                    })
                    }
                    onMoveNextRequest={() =>
                    this.setState({
                        photoIndex: (photoIndex + 1) % this.props.img.length
                    })
                    }
                />
                )}
            </span>
        )
    }
}

export default Gallery;
