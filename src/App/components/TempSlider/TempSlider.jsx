import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    width: 200,
  },
  slider: {
    padding: '22px 0px',
  },
};

class horizontalSlider extends React.Component {
  state = {
    value: 50,
  };

  componentDidMount() {
    this.setState({value: this.props.thermo});
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Typography id="label">Slider Label</Typography>
        <Slider
          classes={{ container: classes.slider }}
          value={value}
          aria-labelledby="label"
          max={120}
          min={40}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

horizontalSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(horizontalSlider);