import React, { Component } from 'react';

class ViewIFrame extends Component {
  render() {
    const { src, show } = this.props;
    return <iframe id='sheet' title='sheet' src={src} style={{ border: 0, width: '100%', height: '1000px', display: show ? 'block' : 'none' }} />
  }
}

export default ViewIFrame;