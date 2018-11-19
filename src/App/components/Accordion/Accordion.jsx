import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Switch from "../Switch/Switch";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
});

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={this.handleChange("panel1")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>masterBedroom</Typography>
            <Typography className={classes.secondaryHeading}>
              Master Bedroom
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Switch />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel2"}
          onChange={this.handleChange("panel2")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>guestBedroom</Typography>
            <Typography className={classes.secondaryHeading}>
              Guest Bedroom
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Switch />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel3"}
          onChange={this.handleChange("panel3")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>roomKitchen</Typography>
            <Typography className={classes.secondaryHeading}>
              Kitchen
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Switch />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel4"}
          onChange={this.handleChange("panel4")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>bathRoom</Typography>
            <Typography className={classes.secondaryHeading}>
              Bathroom
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Switch />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel5"}
          onChange={this.handleChange("panel5")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>kidBedroom</Typography>
            <Typography className={classes.secondaryHeading}>
              Kid Bedroom
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Switch />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel6"}
          onChange={this.handleChange("panel6")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>kidBathroom</Typography>
            <Typography className={classes.secondaryHeading}>
              Kid Bathroom
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Switch />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel7"}
          onChange={this.handleChange("panel7")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>laundryRoom</Typography>
            <Typography className={classes.secondaryHeading}>
              Laundry Room
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Switch />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel8"}
          onChange={this.handleChange("panel8")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>livingRoom</Typography>
            <Typography className={classes.secondaryHeading}>
              Living Room
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Switch />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel9"}
          onChange={this.handleChange("panel9")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>garage</Typography>
            <Typography className={classes.secondaryHeading}>Garage</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Switch />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ControlledExpansionPanels);
