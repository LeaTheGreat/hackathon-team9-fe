import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import NavbarFull from '../Components/NavbarFull';
import { Button, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '95%',
    margin: 'auto',
  },
  container: {
    borderRadius: '20px',
    maxHeight: 440,
  },
});

const columns = [
  { id: 'name', label: 'Name of patient', minWidth: 170 },
  { id: 'parent', label: 'Parent', minWidth: 170 },
  { id: 'phone', label: 'Phone Number', minWidth: 150 },
  { id: 'status', label: 'Status', minWidth: 50 },
  { id: 'actions', label: 'Actions', minWidth: 125 },
];

function createData(name, parent, phone, status, actions) {
  return { name, parent, phone, status, actions };
}

const actionButtons = (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Button variant="contained" color="primary">
      View
    </Button>
    <Button variant="contained" color="secondary">
      Delete
    </Button>
  </div>
);

const rows = [
  createData('Ryan', 'Lea Kagen', 94712430342, 'Tested', actionButtons),
  createData('Ryan', 'Lea Kagen', 94712430342, 'Tested', actionButtons),
  createData('Ryan', 'Lea Kagen', 94712430342, 'Tested', actionButtons),
];

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="dash">
      <NavbarFull />
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Toolbar>
            <Typography variant="h6" id="tableTitle" component="div">
              List of Patients
            </Typography>
          </Toolbar>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
