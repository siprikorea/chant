import React, { Component } from 'react';
import './App.css';
import ViewDate from './view/view_date.jsx';
import ViewChant from './view/view_chant.jsx';
import ControlChant from './controller/control_chant';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleDateChange = this.handleDateChange.bind(this);
    this.state = { date: localStorage.MISSA_DATE ? new Date(localStorage.MISSA_DATE) : new Date() };
  }

  handleDateChange(date) {
    localStorage.MISSA_DATE = date.toString();
    this.setState({ date: date });
  }

  render() {
    let control = new ControlChant();
    let chants = control.chants(this.state.date);
    return (
      <div>
        <ViewDate date={this.state.date} onChange={this.handleDateChange} />
        <ViewChant date={this.state.date} name='입당성가' number={chants[0]} />
        <ViewChant date={this.state.date} name='봉헌성가' number={chants[1]} />
        <ViewChant date={this.state.date} name='성체성가' number={chants[2]} />
        <ViewChant date={this.state.date} name='파견성가' number={chants[3]} />
      </div>
    );
  }
}

export default App;
