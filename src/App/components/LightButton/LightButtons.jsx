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

class ToggleButtons extends React.Component {
  state = {
    alignment: 'left',
    formats: [''],
  };

  // this function is actually the worst thing in existance. Please refer to David Tenant saying sorry.
  handleFormat = (event, formats) => {
    var { changeButtons, roomid } = this.props;
    var oldformats = this.state.formats;

    if (roomid === "living room") {
      var ids = [25, 23, 26];
      if (discrete.difference(formats, oldformats).length) {
        if (discrete.difference(formats, oldformats)[0] === "light_1") {
          changeButtons(false, ids[0]);
        } else if (discrete.difference(formats, oldformats)[0] === "light_2") {
          changeButtons(false, ids[1]);
        } else {
          changeButtons(false, ids[2]);
        }
      } else {
        if (discrete.difference(oldformats, formats)[0] === "light_1") {
          changeButtons(true, ids[0]);
        } else if (discrete.difference(oldformats, formats)[0] === "light_2") {
          changeButtons(true, ids[1]);
        } else {
          changeButtons(true, ids[2]);
        }
      }

    } else if (roomid === "bedroom 3") {
      var ids = [9, 11, 10];

      if (discrete.difference(formats, oldformats).length) {
        if (discrete.difference(formats, oldformats)[0] === "light_1") {
          changeButtons(false, ids[0]);
        } else if (discrete.difference(formats, oldformats)[0] === "light_2") {
          changeButtons(false, ids[1]);
        } else {
          changeButtons(false, ids[2]);
        }
      } else {
        if (discrete.difference(oldformats, formats)[0] === "light_1") {
          changeButtons(true, ids[0]);
        } else if (discrete.difference(oldformats, formats)[0] === "light_2") {
          changeButtons(true, ids[1]);
        } else {
          changeButtons(true, ids[2]);
        }
      }
      
    } else if (roomid === "kitchen") {
      var ids = [32];
      if (discrete.difference(formats, oldformats).length) {
        if (discrete.difference(formats, oldformats)[0] === "light_1") {
          changeButtons(false, ids[0]);
        }
      } else {
        if (discrete.difference(oldformats, formats)[0] === "light_1") {
          changeButtons(true, ids[0]);
        }
      }
      
    } else if (roomid === "bedroom 2") {
      var ids = [6, 8, 7];

      if (discrete.difference(formats, oldformats).length) {
        if (discrete.difference(formats, oldformats)[0] === "light_1") {
          changeButtons(false, ids[0]);
        } else if (discrete.difference(formats, oldformats)[0] === "light_2") {
          changeButtons(false, ids[1]);
        } else {
          changeButtons(false, ids[2]);
        }
      } else {
        if (discrete.difference(oldformats, formats)[0] === "light_1") {
          changeButtons(true, ids[0]);
        } else if (discrete.difference(oldformats, formats)[0] === "light_2") {
          changeButtons(true, ids[1]);
        } else {
          changeButtons(true, ids[2]);
        }
      }
      
    } else if (roomid === "bathroom 2") {
      var ids = [15];

      if (discrete.difference(formats, oldformats).length) {
        if (discrete.difference(formats, oldformats)[0] === "light_1") {
          changeButtons(false, ids[0]);
        }
      } else {
        if (discrete.difference(oldformats, formats)[0] === "light_1") {
          changeButtons(true, ids[0]);
        } else if (discrete.difference(oldformats, formats)[0] === "light_2") {
          changeButtons(true, ids[1]);
        } else {
          changeButtons(true, ids[2]);
        }
      }
      
    } else if (roomid === "master bedroom") {
      var ids = [4, 2, 3];

      if (discrete.difference(formats, oldformats).length) {
        if (discrete.difference(formats, oldformats)[0] === "light_1") {
          changeButtons(false, ids[0]);
        } else if (discrete.difference(formats, oldformats)[0] === "light_2") {
          changeButtons(false, ids[1]);
        } else {
          changeButtons(false, ids[2]);
        }
      } else {
        if (discrete.difference(oldformats, formats)[0] === "light_1") {
          changeButtons(true, ids[0]);
        } else if (discrete.difference(oldformats, formats)[0] === "light_2") {
          changeButtons(true, ids[1]);
        } else {
          changeButtons(true, ids[2]);
        }
      }
      
      // master bath
    } else {
      var ids = [13];
      if (discrete.difference(formats, oldformats).length) {
        if (discrete.difference(formats, oldformats)[0] === "light_1") {
          changeButtons(false, ids[0]);
        }
      } else {
        if (discrete.difference(oldformats, formats)[0] === "light_1") {
          changeButtons(true, ids[0]);
        }
      }

    }

    // changeButtons();
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
              <ToggleButton value="light_1">
                <Typography variant='caption'>
                  Light 1
                </Typography>
              </ToggleButton>
              <ToggleButton value="light_2">
                <Typography variant='caption'>
                  Light 2
                </Typography>
              </ToggleButton>
              <ToggleButton value="light_3">
                <Typography variant='caption'>
                  Light 3
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