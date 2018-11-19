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
    rooms: []
  };

  // on mount get room list
  componentDidMount() {
    this.getRooms();
  }

  // get room list and extract the name strings
  getRooms = () => {
    fetch("/getRoomList")
      .then(res => res.json())
      .then(rooms => {
        var myRooms = [];
        rooms.forEach(element => {
          myRooms.push(element.room_name);
        });
        this.setState({ rooms: myRooms });
      })
      .catch(() => console.log("Whoops"));
  };

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null });
  };

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
          {rooms.map((option, index) => (
            <MenuItem
              key={option}
              disabled={index === 0}
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
