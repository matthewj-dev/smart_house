import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const styles = theme => ({
  toggleContainer: {
    height: 56,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: `${theme.spacing.unit}px 0`,
    background: theme.palette.background.default,
  },
});

var TVState = false;

class ToggleButtons extends React.Component {
  state = {
    alignment: 'left',
    formats: [''],
    TVState: false,
  };

  handleFormat = (event, formats) => {
    var { changeTVState, tv, roomid, objects } = this.props;
    
    if (tv.status) {
      TVState = true;
    } else {
      TVState = false;
    }
    changeTVState(TVState, objects[roomid].tv.obj_id);
    if (TVState === true) {
      TVState = false;
    } else {
      TVState = true;
    }
    this.setState({ formats })
    
  };

  handleAlignment = (event, alignment) => this.setState({ alignment });

  render() {
    const { classes, tv, roomid } = this.props;
    const { formats } = this.state;
    var tvButtonStatus = "TV";

    if (tv.status) {
      tvButtonStatus = "";
    }

    if (roomid === "living room" || roomid === "master bedroom") {
      return (
            <Grid container spacing={16}>
              <Grid item xs={12} sm={6}>
                <div className={classes.toggleContainer}>
                  <ToggleButtonGroup value={formats} onChange={this.handleFormat}>
                    <ToggleButton value="{tvButtonStatus}">
                      <Typography variant='caption'>
                        TV
                      </Typography>
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div>
              </Grid>
            </Grid>
          );
    } else {
      return (<div></div>);
    }

    
  }
}

ToggleButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToggleButtons);