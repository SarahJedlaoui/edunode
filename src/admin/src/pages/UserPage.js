import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState, useEffect } from 'react';
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
} from '@mui/material';
// components
import Label from '../components/label';
import Iconify from '../components/iconify';
import Scrollbar from '../components/scrollbar';
// sections
import { UserListHead, UserListToolbar } from '../sections/@dashboard/user';
// mock
import USERLIST from '../_mock/user';
import { makeStyles } from '@mui/styles';
import React from 'react';
import axios from 'axios';


// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  blueButton: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
}));
const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'university', label: 'university', alignRight: false },
  { id: 'role', label: 'Role', alignRight: false },
  { id: 'isVerified', label: 'Verified', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '' },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function UserPage() {
  const classes = useStyles();
  const [open, setOpen] = useState(null);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [userList, setUserList] = useState([]);
  const [deleteCertificateId, setDeleteCertificateId] = useState(null);
  const [editCertificateId, setEditCertificateId] = useState(null);
  const [editPopupOpen, setEditPopupOpen] = useState(false);
  const [deletePopupOpen, setDeletePopupOpen] = useState(false);
  const [selectedCertificateId, setSelectedCertificateId] = useState(null);

  const handleOpenEditPopup = (certificateId) => {
    setSelectedCertificateId(certificateId);
    setEditPopupOpen(true);
  };

  const handleOpenDeletePopup = (certificateId) => {
    setSelectedCertificateId(certificateId);
    setDeletePopupOpen(true);
  };

  const handleCloseEditPopup = () => {
    setEditPopupOpen(false);
  };

  const handleCloseDeletePopup = () => {
    setDeletePopupOpen(false);
  };


  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/validCertificate/certificates');
        const certificates = response.data;
        console.log('certificates', certificates)
        setUserList(certificates);
      } catch (error) {
        console.error('Error fetching certificates:', error);
      }
    };

    fetchCertificates();
  }, []);


  const handleOpenMenu = (event, certificateId) => {
    setOpen(event.currentTarget);

    // Check if the delete or edit button was clicked and set the corresponding state variable
    if (event.currentTarget.getAttribute('data-action') === 'delete') {
      setDeleteCertificateId(certificateId);
    } else if (event.currentTarget.getAttribute('data-action') === 'edit') {
      setEditCertificateId(certificateId);
    }
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = userList.filter((certificate) =>
    certificate.name.toLowerCase().includes(filterName.toLowerCase())
  );

  const isNotFound = !filteredUsers.length && !!filterName;

  const handleEditCertificate = async (certificateId) => {
    try {
      const newStatus = window.prompt('Enter the new status (accepted or rejected):');
      if (newStatus !== null) {
        await axios.put(`http://localhost:5001/api/validCertificate/edit-valid-certificates/${certificateId}`, {
          status: newStatus,
        });
        // Update the userList state with the updated certificate status
        setUserList((prevList) =>
          prevList.map((certificate) =>
            certificate._id === certificateId ? { ...certificate, status: newStatus } : certificate
          )
        );
        console.log('Successfully updated certificate status.');
      }
    } catch (error) {
      console.error('Error updating certificate status:', error);
    }
  };

  const handleDeleteCertificate = async (certificateId) => {
    try {
      const confirmed = window.confirm('Are you sure you want to delete this certificate?');
      if (confirmed) {
        await axios.delete(`http://localhost:5001/api/validCertificate/delete-valid-certificates/${certificateId}`);
        // Remove the deleted certificate from the userList state
        setUserList((prevList) => prevList.filter((certificate) => certificate._id !== certificateId));
        console.log('Successfully deleted certificate.');
      }
    } catch (error) {
      console.error('Error deleting certificate:', error);
    }
  };
  return (
    <>
      <Helmet>
        <title> User  </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            User
          </Typography>
          <Button variant="contained" className={classes.blueButton} startIcon={<Iconify icon="eva:plus-fill" />}>
            New User
          </Button>
        </Stack>

        <Card>
          <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={userList.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((certificate) => {
                    const { _id, name, status, university, avatarUrl, isVerified, url } = certificate;
                    const isSelected = selected.indexOf(_id) !== -1

                    return (
                      <TableRow hover key={_id} tabIndex={-1} role="checkbox" selected={isSelected}>
                        <TableCell padding="checkbox">
                          <Checkbox checked={isSelected} onChange={(event) => handleClick(event, _id)} />
                        </TableCell>

                        <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            {/**<Avatar alt={name} src={avatarUrl} /> */}
                            <Typography variant="subtitle2" noWrap>
                              {name}
                            </Typography>
                          </Stack>
                        </TableCell>

                        <TableCell align="left">{university}</TableCell>

                        <TableCell align="left">{url}</TableCell>

                        <TableCell align="left">{isVerified ? 'Yes' : 'No'}</TableCell>

                        <TableCell align="left">
                          <Label color={(status === 'accepted' && 'success') || 'error'}>{status}</Label>
                        </TableCell>

                        <TableCell align="right">
                          <IconButton size="large" color="inherit" onClick={() => handleOpenEditPopup(_id)}>
                            <Iconify icon={'eva:edit-fill'} />
                          </IconButton>

                          <IconButton size="large" color="inherit" onClick={() => handleOpenDeletePopup(_id)}>
                            <Iconify icon={'eva:trash-2-outline'} />
                          </IconButton>

                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: 'center',
                          }}
                        >
                          <Typography variant="h6" paragraph>
                            Not found
                          </Typography>

                          <Typography variant="body2">
                            No results found for &nbsp;
                            <strong>&quot;{filterName}&quot;</strong>.
                            <br /> Try checking for typos or using complete words.
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={userList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>

      <Popover
        open={editPopupOpen}
        anchorEl={open}
        onClose={handleCloseEditPopup}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem onClick={() => handleEditCertificate(selectedCertificateId, 'accepted')}>
          <Iconify icon={'eva:checkmark-square-2-outline'} sx={{ mr: 2 }} />
          Accept
        </MenuItem>
        <MenuItem onClick={() => handleEditCertificate(selectedCertificateId, 'rejected')}>
          <Iconify icon={'eva:close-square-outline'} sx={{ mr: 2 }} />
          Reject
        </MenuItem>
      </Popover>

      <Popover
        open={deletePopupOpen}
        anchorEl={open}
        onClose={handleCloseDeletePopup}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem onClick={() => handleDeleteCertificate(selectedCertificateId)}>
          <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>

    </>
  );
}
