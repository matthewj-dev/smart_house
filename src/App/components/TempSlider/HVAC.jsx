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

class ToggleButtons extends React.Component {
  state = {
    alignment: 'left',
    formats: [''],
    thermo: 'cool',
  };

  componentDidMount() {
      this.setState({thermo: this.props.thermo});
  }

  handleChange = (event, formats) => {
      this.setState({ formats })

      if(this.state.thermo === 'heat'){
          this.setState({thermo: 'cool'});
      } else {
          this.setState({thermo: 'heat'});
      }

    };

  handleAlignment = (event, alignment) => this.setState({ alignment });

  render() {
    const { classes } = this.props;
    const { formats, thermo } = this.state;

    return (
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6}>
          <div className={classes.toggleContainer}>
            <ToggleButtonGroup value={formats} onChange={this.handleChange}>
              <ToggleButton value="HEAT" selected={false}>
                <Typography variant='caption'>
                  {thermo}
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