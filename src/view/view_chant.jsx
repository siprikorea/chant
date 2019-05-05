import React, { Component } from 'react';
import ControlChant from '../controller/control_chant';
import ViewIFrame from './view_iframe.jsx';
import $ from 'jquery';

class ViewChant extends Component {
  constructor(props) {
    super(props);

    this.controlChant = new ControlChant();
    this.handleShowSheet = this.handleShowSheet.bind(this);
    this.handleChantChange = this.handleChantChange.bind(this);
    this.handleChantPlay = this.handleChantPlay.bind(this);
    this.handleChantStop = this.handleChantStop.bind(this);
    this.state = { showSheet: false };
  }

  componentDidUpdate() {
    $('#sheet').css('height', $(window).height() + 'px');
  }

  handleShowSheet(e) {
    this.setState((state) => ({ showSheet: !state.showSheet }));
  }

  handleChantChange(e) {
    this.props.onChange(JSON.parse(`{"${this.props.name}" : "${e.target.value}" }`));
  }

  handleChantPlay() {
    this.controlChant.play(this.props.number);
  }

  handleChantStop() {
    this.controlChant.stop();
  }

  render() {
    const { name, number } = this.props;
    return (
      <div>
        <button onClick={this.handleShowSheet}>악보</button>
        <span>{name}</span>
        <input type="text" value={number} onChange={this.handleChantChange} />
        <button onClick={this.handleChantPlay}>재생</button>
        <button onClick={this.handleChantStop}>정지</button>
        <ViewIFrame src={this.controlChant.getSheetSrc(number)} show={this.state.showSheet} />
      </div>
    );
  }
}

export default ViewChant;