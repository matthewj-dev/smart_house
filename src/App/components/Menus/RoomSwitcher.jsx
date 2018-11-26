import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

class RoomSwitcher extends React.Component {
  // set state variables
  state = {
    anchorEl: null,
    selectedIndex: 1,
    rooms: ["master bedroom",
    "bedroom 2",
    "bedroom 3",
    "master bathroom",
    "bathroom 2",
    "garage",
    "laundry room",
    "living room",
    "kitchen",
    "outside"]
  
  };

  // change the anchor for the switcher
  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  // handle the click for each menu item
  handleMenuItemClick = (event, index, changeRoom) => {
    this.setState({ selectedIndex: index, anchorEl: null });

    // change state of dashboard room string to current room
    changeRoom = this.props.changeRoom;
    changeRoom(this.state.rooms[index]);
  };

  // close the menu
  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const { rooms } = this.state;

    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="Room Selector"
            onClick={this.handleClickListItem}
          >
            <ListItemText
              primary="Room Selector"
              secondary={rooms[this.state.selectedIndex]}
            />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {/* expand the menu to the rooms list */}
          {rooms.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === this.state.selectedIndex}
              onClick={event => this.handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

RoomSwitcher.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RoomSwitcher);
