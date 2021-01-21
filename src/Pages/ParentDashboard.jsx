import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import NavbarFull from '../Components/NavbarFull';
import { Button, Toolbar, Typography } from '@material-ui/core';
import AddChildModal from '../Modals/AddChild';
import { getChildrenRelatedToParent } from '../lib/api';
import { useAuth } from '../context/AuthContext';

const useStyles = makeStyles({
  root: {
    width: '95%',
    margin: 'auto',
  },
  container: {
    borderRadius: '20px',
    maxHeight: 440,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const columns = [
  { id: 'child', label: 'Child', minWidth: 170 },
  { id: 'phone', label: 'Phone Number', minWidth: 150 },
  { id: 'status', label: 'Status', minWidth: 50 },
  { id: 'actions', label: 'Actions', minWidth: 125 },
];

function createData(child, phone, status, actions) {
  return { child, phone, status, actions };
}

const actionButtons = (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Button variant="contained" color="primary">
      View
    </Button>
    <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
      Delete
    </Button>
  </div>
);

const rows = [
  createData('Ryan', 94712430342, 'Tested', actionButtons),
  createData('Ryan', 94712430342, 'Awaiting Results', actionButtons),
  createData('Ryan', 94712430342, 'Tested', actionButtons),
];

export default function StickyHeadTable() {
  const { auth } = useAuth();

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

  useEffect(() => {
    console.log('USER ID: ', auth.userId);
    getChildrenRelatedToParent(auth.userId).then((res) => {
      console.log('CHILDREN!!!!!', res);
    });
  }, []);

  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <div className="dash">
      <NavbarFull />
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" id="tableTitle" component="div">
              List of Children
            </Typography>
            <Button
              onClick={toggleModal}
              variant="contained"
              color="primary"
              endIcon={<AddCircleIcon />}
            >
              Add Child
            </Button>
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
      <AddChildModal open={open} toggleModal={toggleModal} />
    </div>
  );
}
