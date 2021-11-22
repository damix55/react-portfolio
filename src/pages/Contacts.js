import React, { Component } from "react";

class Contacts extends Component {
  constructor (props) {
    super(props)
    this.props.handle('contacts')
  }

  render() {
    return (
    <div class='main-content'>
      <h2 class='blue bold'>// contacts</h2>
      <p></p>
      <div className="bottom-spacer"></div>
    </div>
    );
  }
}

export default Contacts;
