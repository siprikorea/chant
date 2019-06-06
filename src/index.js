import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ViewDate from './view/view_date.jsx';
import ViewChant from './view/view_chant.jsx';
import ControlChant from './controller/control_chant';
import _ from 'lodash';

class App extends Component {
    /**
     * Constructor
     * @param {object} props properties
     */
    constructor(props) {
        super(props);

        this.controlChant = new ControlChant();

        // Set date to state
        let date = this.controlChant.getDate();
        let chants = this.controlChant.getChants(date);
        this.state = { date: date, chants: chants };

        // Bind this to handler
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleChantChange = this.handleChantChange.bind(this);
    }

    /**
     * Date change handler
     * @param {Date} date Date
     */
    handleDateChange(date) {
        // Set changed date
        this.setState({ date: date });
        // Set changed date
        this.controlChant.setDate(date);
        // Get changed chants
        let chants = this.controlChant.getChants(date);
        // Set changed chants
        this.setState({ chants: chants });
    }

    /**
     * Change change handler
     * @param {object} chants Chants
     */
    handleChantChange(chant) {
        this.setState((chants) => {
            // Merge changed chant
            chants = _.merge(chants, chant);
            // Set changed chants
            this.controlChant.setChants(this.state.date, chants);
            return { chants: chants };
        });
    }

    /**
     * render
     */
    render() {
        const { date, chants } = this.state;
        return (
            <div>
                <ViewDate date={date} onChange={this.handleDateChange} />
                <ViewChant name='입당' number={chants ? chants['입당'] : ''} onChange={this.handleChantChange} />
                <ViewChant name='봉헌' number={chants ? chants['봉헌'] : ''} onChange={this.handleChantChange} />
                <ViewChant name='성체' number={chants ? chants['성체'] : ''} onChange={this.handleChantChange} />
                <ViewChant name='파견' number={chants ? chants['파견'] : ''} onChange={this.handleChantChange} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
