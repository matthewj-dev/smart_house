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
  }
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class SimpleTable extends React.Component {

  render(){
    const { classes, tableData } = this.props;

    console.log(tableData);

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>Room</TableCell>
              <TableCell className={classes.tableCell} >Appliance</TableCell>
              <TableCell className={classes.tableCell} numeric>Event Time</TableCell>
              <TableCell className={classes.tableCell} numeric>Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row" className={classes.TableCell}>
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