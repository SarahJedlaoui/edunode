import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { useState, useEffect } from 'react';

// @mui
import {
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
  } from '@mui/material';
  
  
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
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
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
import { TextField, DialogActions } from '@mui/material';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  blueButton: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
}));
const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'email', label: 'Email', alignRight: false },
  { id: 'role', label: 'Role', alignRight: false },
  { id: '' },
];


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
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
  const [deleteRequestId, setDeleteRequestId] = useState(null);
  const [editRequestId, setEditRequestId] = useState(null);
  const [editPopupOpen, setEditPopupOpen] = useState(false);
  const [deletePopupOpen, setDeletePopupOpen] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [selectedRequestEmail, setSelectedRequestEmail] = useState(null);
  const [selectedRequestRole, setSelectedRequestRole] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };
  
  
  const handleOpenCreateModal = () => {
    setOpenCreateModal(true);
  };
  
  const handleCloseCreateModal = () => {
    setOpenCreateModal(false);
  };
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  
  const handleCreateUser = async () => {
    try {
      const response = await axios.post('https://edunode.herokuapp.com/api/users/create', {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        role: selectedRole, 
      });
      const createdUser = response.data;
      setUserList((prevList) => [...prevList, createdUser]);
      console.log('Successfully created user.');
      handleCloseCreateModal();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };
  
  

  const handleOpenEditPopup = (certificateId ,email,role) => {
    setSelectedRequestId(certificateId);
    setSelectedRequestEmail(email)
    setSelectedRequestRole(role)
    setEditPopupOpen(true);
  };
  const handlecloseEditPopup = () => {
    setEditPopupOpen(false);
  };

  const handleOpenDeletePopup = (certificateId) => {
    setSelectedRequestId(certificateId);
    setDeletePopupOpen(true);
  };

  const handleCloseEditPopup = () => {
    setEditPopupOpen(false);
  };

  const handleCloseDeletePopup = () => {
    setDeletePopupOpen(false);
  };
  // Function to handle opening the modal
  const handleOpenModal = (certificate) => {
    setSelectedRequest(certificate);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setSelectedRequest(null);
  };

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('https://edunode.herokuapp.com/api/users/all');
        const certificates = response.data;
        setUserList(certificates);
      } catch (error) {
        console.error('Error fetching certificates:', error);
      }
    };

    fetchRequests();
  }, []);


  const handleOpenMenu = (event, certificateId) => {
    setOpen(event.currentTarget);

    // Check if the delete or edit button was clicked and set the corresponding state variable
    if (event.currentTarget.getAttribute('data-action') === 'delete') {
      setDeleteRequestId(certificateId);
    } else if (event.currentTarget.getAttribute('data-action') === 'edit') {
      setEditRequestId(certificateId);
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
  

    certificate.name?.toLowerCase().includes(filterName.toLowerCase())


  );

  const isNotFound = !filteredUsers.length && !!filterName;

  const handleEditRequest = async (certificateId,email,role) => {
       setEditPopupOpen(false); 
      const requestEmail= email ;
      
      
    try {
      const newStatus = window.prompt('Enter the new role(Student or University or Admin or Teacher):');
      if (newStatus !== null) {
        await axios.post(`https://edunode.herokuapp.com/api/users/role`, {
          email: requestEmail,
          role: newStatus
        });
        // Update the userList state with the updated certificate status
        setUserList((prevList) =>
          prevList.map((certificate) =>
            certificate._id === certificateId ? { ...certificate, role: newStatus } : certificate
          )
        );
        console.log('Successfully updated User role.');
      }
    } catch (error) {
      console.error('Error updating User role:', error);
    }
  };

  const handleDeleteRequest = async (certificateId) => {
    try {
      const confirmed = window.confirm('Are you sure you want to delete this user?');
      if (confirmed) {
        await axios.delete(`https://edunode.herokuapp.com/api/users/delete/${certificateId}`);
        // Remove the deleted certificate from the userList state
        setUserList((prevList) => prevList.filter((certificate) => certificate._id !== certificateId));
        console.log('Successfully deleted User.');
      }
    } catch (error) {
      console.error('Error deleting User:', error);
    }
  };
  return (
    <>
      <Helmet>
        <title> Users </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Users
          </Typography>
          <Button
  variant="contained"
  className={classes.blueButton}
  startIcon={<Iconify icon="eva:plus-fill" />}
  onClick={handleOpenCreateModal}
>
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
                    const { _id, name, status, university, teachingsProof, role, url,email } = certificate;
                    const isSelected = selected.indexOf(_id) !== -1
                    return (
                      <TableRow hover key={_id} tabIndex={-1} role="checkbox" selected={isSelected}>
                        <TableCell padding="checkbox">
                          <Checkbox checked={isSelected} onChange={(event) => handleClick(event, _id)} />
                        </TableCell>
                        <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Typography variant="subtitle2" noWrap>
                              {name}
                            </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell align="left">{email}</TableCell>
                        <TableCell align="left">{role}</TableCell>
                        <TableCell align="right">
                          <IconButton size="large" color="inherit" onClick={() => handleOpenEditPopup(_id,email,role)}>
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
      <Dialog open={openCreateModal} onClose={handleCloseCreateModal} maxWidth="sm" fullWidth>
  <DialogTitle>Create New User</DialogTitle>
  <DialogContent>
    <Stack spacing={2}>
      <TextField
        label="Name"
        name="name"
        value={newUser.name}
        onChange={handleInputChange}
        fullWidth
      />
      <TextField
        label="Email"
        name="email"
        value={newUser.email}
        onChange={handleInputChange}
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={newUser.password}
        onChange={handleInputChange}
        fullWidth
      />
      <FormControl component="fieldset">
  <FormLabel component="legend">Role</FormLabel>
  <RadioGroup aria-label="role" name="role" value={selectedRole} onChange={handleRoleChange}>
    <FormControlLabel value="Admin" control={<Radio />} label="Admin" />
    <FormControlLabel value="Student" control={<Radio />} label="Student" />
    <FormControlLabel value="Teacher" control={<Radio />} label="Tutor" />
    <FormControlLabel value="University" control={<Radio />} label="University Admin" />
  </RadioGroup>
</FormControl>
    </Stack>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleCloseCreateModal}>Cancel</Button>
    <Button onClick={handleCreateUser} variant="contained" className={classes.blueButton}>
      Create User
    </Button>
  </DialogActions>
</Dialog>
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
        <MenuItem onClick={() => handleEditRequest(selectedRequestId,selectedRequestEmail,selectedRequestRole, 'accepted')}>
          <Iconify icon={'eva:checkmark-square-2-outline'} sx={{ mr: 2 }} />
          Change
        </MenuItem>
        <MenuItem onClick={() => handlecloseEditPopup('Cancel')}>
          <Iconify icon={'eva:close-square-outline'} sx={{ mr: 2 }} />
          Cancel
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
        <MenuItem onClick={() => handleDeleteRequest(selectedRequestId)}>
          <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>

    </>
  );
}
