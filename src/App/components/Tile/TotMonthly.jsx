import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class SimpleCard extends React.Component {
  state = {
    MonBill: 0,
  };

  // when component mounts get the month bill
  componentDidMount() {
    this.getMonthBill();
  }

  // use fetch to get monthly bill
  getMonthBill = () => {
    fetch('/runningMonthlyPowerTotal')
    .then(res => res.json())
    .then(MonBill => {this.setState({ MonBill: MonBill.toFixed(2) })});
  }

  render() {

    const { classes } = this.props;
    const { MonBill } = this.state;

    return (
      <Card className={classes.card}>
        <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Month Bill
        </Typography>
          <Typography variant="h5" component="h2">
            { MonBill }
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);