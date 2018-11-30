import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import FloorPlanImg from '../../../images/floorPlan.png';


const styles = theme => ({
  image: {
    width: 250,
  }
});

function Transition(props) {
  return <Slide direction="left" {...props} />;
}

class FloorPlanPopup extends React.Component {

  // closed by default
  state = {
    open: false,
  };

  //
  // Handle opening/closing
  //
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Floor Plan</Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          maxWidth='lg'
          fullWidth={true}
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Floor Plan"}
          </DialogTitle>
          <DialogContent >
            <img className={classes.image} src={FloorPlanImg} alt="FloorPlanHere"/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(FloorPlanPopup);