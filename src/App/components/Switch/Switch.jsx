import React from "react";
import Switch from "@material-ui/core/Switch";

class Switches extends React.Component {
  state = {
    on: true,
    off: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <div>
        <Switch value="checkedC" />
        <Switch disabled value="checkedD" />
        <Switch disabled checked value="checkedE" />
        <Switch defaultChecked value="checkedF" color="default" />
      </div>
    );
  }
}

export default Switches;
