import 'date-fns';
//import koLocale from 'date-fns/locale/ko';
import React, { Component } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';


class ViewDate extends Component {
    constructor(props) {
        super(props);

        this.handleDateChange = this.handleDateChange.bind(this);
        this.handlePrevClick = this.handlePrevClick.bind(this);
        this.handleTodayClick = this.handleTodayClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.state = { date: props.date ? props.date : new Date() };
    }

    handleDateChange(date) {
        this.setState({ date: date });
        this.props.onChange(date);
    }

    handlePrevClick() {
        this.setState((state) => ({
            date: new DateFnsUtils().addDays(state.date, -1)
        }));
    }

    handleTodayClick() {
        this.setState({ date: new Date() })
    }

    handleNextClick() {
        this.setState((state) => ({
            date: new DateFnsUtils().addDays(state.date, 1)
        }));
    }

    render() {
        return (
            <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils} /*locale={koLocale}*/>
                    <button onClick={this.handlePrevClick}>전날</button>
                    <DatePicker
                        format='yyyy년 M월 d일'
                        margin="normal"
                        label='날짜를 선택하세요'
                        value={this.state.date}
                        onChange={this.handleDateChange}
                    />
                    <button onClick={this.handleTodayClick}>오늘</button>
                    <button onClick={this.handleNextClick}>다음날</button>
                </MuiPickersUtilsProvider>
            </div>
        );
    }
}

export default ViewDate;