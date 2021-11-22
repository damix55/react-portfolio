import React, { Component } from "react";

class Blog extends Component {
  constructor (props) {
    super(props)
    this.props.handle('blog')
  }

  render() {
    return (
    <div class='main-content'>
      <h2 class='blue bold'>// blog</h2>
      <p>Coming soon</p>
      <p></p>
      <div className="bottom-spacer"></div>
    </div>
    );
  }
}

export default Blog;
