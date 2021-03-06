import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/lab/Slider";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    width: 180
  },
  slider: {
    padding: "22px 0px"
  }
};

class horizontalSlider extends React.Component {
  state = {
    value: 70
  };

  componentDidMount() {
    this.setState({ value: this.props.thermo });
  }

  handleChange = (event, value) => {
    var {changeThermo} = this.props;
    this.setState({ value });
    this.props.oldThermo[0] = value;
    
  };

  sendValue = (event, value) => {
    var {changeThermo} = this.props;
    if(this.props.oldThermo[1] === "cool") {
      changeThermo(value, false);
    } else {
      changeThermo(value, true);
    }
  };

  render() {
    const { classes} = this.props;
    var { value } = this.state;

    return (
      <div className={classes.root}>
        <Typography id="label">Temperature (MIN 50F/MAX 90F)</Typography>
        <Slider
          classes={{ container: classes.slider }}
          value={value}
          aria-labelledby="label"
          max={90}
          min={50}
          onChange={this.handleChange}
          onDragEnd={this.sendValue}
        />
      </div>
    );
  }
}

horizontalSlider.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(horizontalSlider);
