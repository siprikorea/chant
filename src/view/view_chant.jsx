import React, { Component } from 'react';
import ControlChant from '../controller/control_chant';
import $ from 'jquery';

class ViewChant extends Component {
  constructor(props) {
    super(props);

    this.controlChant = new ControlChant();
    this.handleShow = this.handleShow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.state = { show: false, number: props.number };
  }

  componentDidUpdate() {
    $('#sheet').css('height', $(window).height() + 'px');
  }

  handleShow(e) {
    this.setState((state) => ({ show: !state.show}));
  }

  handleChange(e) {
    this.setState({ number: e.target.value });
  }

  handlePlay() {
    this.controlChant.play(this.state.number);
  }

  handleStop() {
    this.controlChant.stop();
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <button onClick={this.handleShow}>악보</button>
        <div>{name}</div>
        <input type="text" value={this.state.number} onChange={this.handleChange} />
        <button onClick={this.handlePlay}>재생</button>
        <button onClick={this.handleStop}>정지</button>
        {this.state.show && this.state.number ? <iframe id='sheet' title='sheet' src={this.controlChant.sheet(this.state.number)} style={{ border: 0, width: '100%' }} /> : null}
      </div>
    );
  }
}

export default ViewChant;