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
  },
});

class TVButton extends React.Component {
  state = {
    alignment: 'left',
    formats: ['bold'],
  };

  // use to handle the toggling between bold and not bold
  handleFormat = (formats) => this.setState({ formats });

  // use to change alignment
  handleAlignment = (alignment) => this.setState({ alignment });

  render() {
    const { classes } = this.props;
    const { formats } = this.state;

    return (
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6}>
          <div className={classes.toggleContainer}>
            <ToggleButtonGroup value={formats} onChange={this.handleFormat}>
              <ToggleButton value="TV">
                <Typography variant="caption">
                    TV
                </Typography>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Grid>
      </Grid>
    );
  }
}

TVButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TVButton);