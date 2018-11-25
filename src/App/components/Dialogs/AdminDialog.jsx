import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class FormDialog extends React.Component {
  constructor() {
    super();
    this.state = {
      open: true,
      password: ""
    };
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  validate(t) {
    if (t === "Admin") {
      this.setState({ open: false });
    } else {
      this.setState({ open: true });
    }
  }

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Admin Login</DialogTitle>
          <DialogContent>
            <TextField autoFocus margin="dense" label="Password" fullWidth />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button color="primary" onClick={this.handleClose}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
