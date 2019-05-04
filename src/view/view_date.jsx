import 'date-fns';
import React, { Component } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';

class ViewDate extends Component {
    /**
     * Constructor
     * @param {object} props properties
     */
    constructor(props) {
        super(props);

        this.handleDateChange = this.handleDateChange.bind(this);
        this.handlePrevClick = this.handlePrevClick.bind(this);
        this.handleTodayClick = this.handleTodayClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.state = { date: props.date ? props.date : new Date() };
    }

    /**
     * Date change handler
     * @param {Date} date date
     */
    handleDateChange(date) {
        this.setState({ date: date });
        this.props.onChange(date);
    }

    /**
     * Previous day click handler
     */
    handlePrevClick() {
        this.setState((state) => {
            let date = new DateFnsUtils().addDays(state.date, -1);
            this.props.onChange(date);
            return { date: date };
        });
    }

    /**
     * Today click handler
     */
    handleTodayClick() {
        this.setState({ date: new Date() })
        this.props.onChange(this.state.date);
    }

    /**
     * Next day click handler
     */
    handleNextClick() {
        this.setState((state) => {
            let date = new DateFnsUtils().addDays(state.date, 1);
            this.props.onChange(date);
            return { date: date };
        });
    }

    /**
     * Render
     */
    render() {
        return (
            <div>
                <button onClick={this.handlePrevClick}>전날</button>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                        format='yyyy년 M월 d일'
                        margin="normal"
                        label='날짜를 선택하세요'
                        value={this.state.date}
                        onChange={this.handleDateChange}
                    />
                </MuiPickersUtilsProvider>
                <button onClick={this.handleTodayClick}>오늘</button>
                <button onClick={this.handleNextClick}>다음날</button>
            </div>
        );
    }
}

export default ViewDate;