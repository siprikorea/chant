import React, { Component } from 'react';
import './App.css';
import ViewDate from './view/view_date.jsx';
import ViewChant from './view/view_chant.jsx';

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
    return (
      <div>
        <ViewDate date={new Date()} onChange={this.handleDateChange} />
        <ViewChant date={this.state.date} name='입당성가'/>
        <ViewChant date={this.state.date} name='봉헌성가'/>
        <ViewChant date={this.state.date} name='성체성가'/>
        <ViewChant date={this.state.date} name='파견성가'/>
      </div>
    );
  }
}

export default App;
