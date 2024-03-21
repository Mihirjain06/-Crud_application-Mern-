import React, { useEffect, useState } from "react";
import { Table, TableHead, TableBody, TableRow, TableCell, CircularProgress, Button } from '@mui/material';
import { getUsers, deleteUser} from "../service/api";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response); // Assuming the response is an array of user objects
    } catch (error) {
      console.error("Error while fetching users:", error);
    }
  }

  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getAllUsers();
  }
  return (
    <Table style={{ width: '90%', margin: '50px auto 0 auto' }}>
      <TableHead>
        <TableRow style={{ background: '#000000' }}>
          <TableCell style={{ fontWeight: 'bold', color: '#fff', fontSize: '15px' }}>Id</TableCell>
          <TableCell style={{ fontWeight: 'bold', color: '#fff', fontSize: '15px' }}>Username</TableCell>
          <TableCell style={{ fontWeight: 'bold', color: '#fff', fontSize: '15px' }}>Name</TableCell>
          <TableCell style={{ fontWeight: 'bold', color: '#fff', fontSize: '15px' }}>Email</TableCell>
          <TableCell style={{ fontWeight: 'bold', color: '#fff', fontSize: '15px' }}>Phone</TableCell>
          <TableCell style={{ fontWeight: 'bold', color: '#fff', fontSize: '15px' }}>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.length > 0 ? (
          users.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phonenumber}</TableCell>
              <TableCell>
                <Button variant="outlined" style={{ marginRight: 10  }} component = {Link} to={`/edituser/${user._id}`}>Edit</Button>
                <Button variant="outlined" color="secondary" onClick={()=>deleteUserDetails(user._id)} startIcon={<DeleteIcon />}>Delete</Button>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={6}><CircularProgress /></TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default AllUsers;
