

import React, { Component } from "react";

class DelayedRendering extends Component {
    constructor (props) {
        super(props);
        this.state = {hidden : true};
    }

    componentWillMount() {
        var that = this;
        setTimeout(function() {
            that.show();
        }, that.props.wait);
    }
    
    show() {
        this.setState({hidden : false});
    }

    render() {
        return (
            <div>{ !this.state.hidden && this.props.children }</div>
        )
    }
};

export default DelayedRendering;