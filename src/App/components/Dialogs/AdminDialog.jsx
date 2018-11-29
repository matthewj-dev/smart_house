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
      entered: "",
      error: "",
      password: "Admin"
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.validate = this.validate.bind(this);
  }

  //validation of user's entered password
  validate(t) {
    t.preventDefault();

    if (this.state.entered === this.state.password) {
      return this.setState({ open: false });
    } else {
      return this.setState({ error: "Password Required" });
    }
  }
  //changes entered password state and saves
  handleEnter(t) {
    this.setState({
      entered: t.target.value
    });
  }
  //Password = Admin
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
            <TextField
              autoFocus
              margin="dense"
              label="Password"
              onChange={this.handleEnter}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.validate}>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
