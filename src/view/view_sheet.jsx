import React, { Component } from 'react';

class ViewSheet extends Component {
  render() {
    const { src, show } = this.props;
    return <img src={src} style={{ width: '500px', height: '100%', display: show ? 'block' : 'none' }} />
  }
}

export default ViewSheet;