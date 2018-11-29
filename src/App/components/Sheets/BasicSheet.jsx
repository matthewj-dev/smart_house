import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import RoomSelector from '../Menus/RoomSwitcher';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class PaperSheet extends React.Component {

  render() {
    const { classes, changeRoom } = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={1} >
          <RoomSelector changeRoom = { changeRoom } />
        </Paper>
      </div>
    );

  }
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);