import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'hide',
  },
  table: {
    minWidth: 340,
  },
  tableCell: {
    paddingRight: 1,
    paddingLeft: 3
  },
  objectColumn: {
    maxWidth: 60,
    paddingRight: 1,
    paddingLeft: 3
  }
});

class SimpleTable extends React.Component {

  render(){
    const { classes, tableData } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.objectColumn}>Appliance</TableCell>
              <TableCell className={classes.tableCell} >Room</TableCell>
              <TableCell className={classes.tableCell} >Event Time</TableCell>
              <TableCell className={classes.tableCell} >Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row" className={classes.objectColumn}>
                    {row.object_name}
                  </TableCell>
                  <TableCell className={classes.tableCell}>{row.room_name}</TableCell>
                  <TableCell numeric className={classes.tableCell}>{row.time}</TableCell>
                  <TableCell numeric className={classes.tableCell}>{row.bill.toFixed(2)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );

  };

  
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);