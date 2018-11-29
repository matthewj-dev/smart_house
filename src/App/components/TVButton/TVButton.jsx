import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import discrete from 'underscore';

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
    var oldformats = this.state.formats;

    console.log(formats, oldformats);

    if (roomid === "living room") {
      if (discrete.difference(formats, oldformats).length) {
        changeTVState(false, 23);
      } else {
        changeTVState(true, 23);
      }

      // bedroom tv
    } else {
      if (discrete.difference(formats, oldformats).length) {
        changeTVState(false, 1);
      } else {
        changeTVState(true, 1);
      }
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