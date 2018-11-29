import React from 'react';
import "typeface-roboto";
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from "./components/Drawer/Drawer";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Drawer/>
      </React.Fragment>
    );
  }
}

export default App;
