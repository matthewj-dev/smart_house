import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function InsetDividers(props) {
    const { classes } = props;
    const insideTemp = 20;
    const outsideTemp = 30;

    return (
        <div className={classes.root}>
        <List>
            <ListItem>
            <Avatar>
                <WorkIcon />
            </Avatar>
            <ListItemText primary={insideTemp} />
            </ListItem>
            <Divider inset component="li" />
            <ListItem>
            <Avatar>
                <BeachAccessIcon />
            </Avatar>
            <ListItemText primary={outsideTemp} />
            </ListItem>
        </List>
        </div>
    );
}

InsetDividers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InsetDividers);