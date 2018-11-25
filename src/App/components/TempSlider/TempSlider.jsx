import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    display: 'flex',
    height: 200,
  },
  slider: {
    padding: '0px 22px',
  },
};

class TempSlider extends React.Component {
  state = {
    value: 50,
  };

  // change the value of the object
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Slider
          classes={{ container: classes.slider }}
          value={value}

          // handle changing the value of the object
          onChange={this.handleChange}
          vertical
        />
      </div>
    );
  }
}

TempSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TempSlider);