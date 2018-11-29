import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import discrete from 'underscore';
import { format } from 'util';

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

class ToggleButtons extends React.Component {
  state = {
    alignment: 'left',
    formats: [''],
  };

  handleFormat = (event, formats) => {
    var {changeButtons} = this.props;
    var oldformats = this.state.formats;
    var object = 1;

    if (discrete.difference(formats, oldformats).length) {
      if (discrete.difference(formats, oldformats)[0] === "door_1") {
        changeButtons(false, 35);
      } else if (discrete.difference(formats, oldformats)[0] === "door_2") {
        changeButtons(false, 34);
      } else {
        changeButtons(false, 33);
      }
    } else {
      if (discrete.difference(oldformats, formats)[0] === "door_1") {
        changeButtons(true, 35);
      } else if (discrete.difference(oldformats, formats)[0] === "door_2") {
        changeButtons(true, 34);
      } else {
        changeButtons(true, 33);
      }
    }

    
    
    this.setState({ formats })
  };

  handleAlignment = (event, alignment) => this.setState({ alignment });

  render() {
    const { classes } = this.props;
    const { formats } = this.state;

    return (
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6}>
          <div className={classes.toggleContainer}>
            <ToggleButtonGroup value={formats} onChange={this.handleFormat}>
              <ToggleButton value="door_1">
                <Typography variant='caption'>
                  Door 1
                </Typography>
              </ToggleButton>
              <ToggleButton value="door_2">
                <Typography variant='caption'>
                  Door 2
                </Typography>
              </ToggleButton>
              <ToggleButton value="door_3">
                <Typography variant='caption'>
                  Door 3
                </Typography>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Grid>
      </Grid>
    );
  }
}

ToggleButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToggleButtons);