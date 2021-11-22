import React, { Component } from "react";

class Projects extends Component {
  constructor (props) {
    super(props)
    this.props.handle('projects')
  }

  render() {
    return (
    <div class='main-content'>
      <h2 class='blue bold'>// projects</h2>
      <p></p>
      <div className="bottom-spacer"></div>
    </div>
    );
  }
}

export default Projects;
