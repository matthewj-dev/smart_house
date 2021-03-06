import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import InsideIcon from "@material-ui/icons/Home";
import OutsideIcon from "@material-ui/icons/WbSunny";
import Divider from "@material-ui/core/Divider";
// change these icons

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360
    // backgroundColor: theme.palette.background.paper,
  }
});

class InsetDividers extends React.Component {
  render() {
    const { classes } = this.props;
    const insideTemp = this.props.temps[0];
    const outsideTemp = this.props.temps[1];

    return (
      <div className={classes.root}>
        <List>
          <ListItem>
            <Avatar>
              <InsideIcon />
            </Avatar>
            <ListItemText primary={insideTemp} />
          </ListItem>
          <Divider inset component="li" />
          <ListItem>
            <Avatar>
              <OutsideIcon />
            </Avatar>
            <ListItemText primary={outsideTemp} />
          </ListItem>
        </List>
      </div>
    );
  }
}

InsetDividers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InsetDividers);
