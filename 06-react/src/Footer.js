import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <h1>
            I am a footer in {this.props.name} Component
        </h1>
    );
  }
}

export default Footer;
