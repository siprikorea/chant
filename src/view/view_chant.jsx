import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import ControlChant from '../controller/control_chant';
import ViewSheet from './view_sheet.jsx';
import $ from 'jquery';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  container: {
  },
  textField: {
    margin: theme.spacing.unit,
  }
});

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
    const { classes, name, number } = this.props;
    return (
      <Grid container justify='center' alignItems='flex-end' className={classes.container} >
        <form noValidate autoComplete="off">
          <Button variant='outlined' className={classes.button}>{name}</Button>
          <TextField margin='normal' className={classes.textFiled} value={number} onChange={this.handleChantChange} />
          <Button variant='outlined' color='primary' className={classes.button} onClick={this.handleShowSheet}>악보</Button>
          <Button variant='outlined' color='primary' className={classes.button} onClick={this.handleChantPlay}>재생</Button>
          <Button variant='outlined' color='secondary' className={classes.button} onClick={this.handleChantStop}>정지</Button>
          <ViewSheet src={this.controlChant.getSheetSrc(number)} show={this.state.showSheet} />
        </form>
      </Grid>
    );
  }
}

export default withStyles(styles)(ViewChant);