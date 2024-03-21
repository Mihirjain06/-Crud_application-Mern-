import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, styled, Button } from '@mui/material';
import { editUser, getUser } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';

const CenteredContainer = styled(FormControl)`
  width: 20%;
  padding: 20px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid #000;
  border-radius: 10px;
  margin-top: 80px;
  & > div { 
    margin-top: 20px;
  }
`;

const EditUser = () => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phonenumber: '',
  });

  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const loadUserDetail = async () => {
      try {
        const response = await getUser(id);
        if (response && response.length > 0) {
          const loadedUser = response[0]; // Assuming the response is an array, take the first element
          setUser(loadedUser);
          console.log('User data loaded:', loadedUser);
        }
      } catch (error) {
        console.error('Error loading user details', error);
      }
    };
  
    loadUserDetail();
  }, [id]);
  

  const onValueChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailPattern.test(email);
  };

  const validatePhone = (phone) => {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phone);
  };

  const edituserdetails = async() => {
    if (!validateEmail(user.email)) {
      setEmailError('Invalid email address');
      return;
    } else {
      setEmailError('');
    }

    if (!validatePhone(user.phonenumber)) {
      setPhoneError('Invalid phone number (10 digits required)');
      return;
    } else {
      setPhoneError('');
    }
    try {
      const response = await editUser(user, id);
      console.log(response);
    } catch (error) {
      console.error("Error while editing user:", error);
    }
    
    editUser(user,id)
    .then((response) => {
      console.log(response);
      navigate('/alluser');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <CenteredContainer>
      <h2>Edit User</h2>
      <FormControl>
        <InputLabel>Name:</InputLabel>
        <Input type="text" onChange={onValueChange} name="name" value={user.name} />
      </FormControl>
      <FormControl>
        <InputLabel>Username:</InputLabel>
        <Input type="text" onChange={onValueChange} name="username" value={user.username} />
      </FormControl>
      <FormControl>
        <InputLabel>Email:</InputLabel>
        <Input type="email" onChange={onValueChange} name="email" value={user.email} />
        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
      </FormControl>
      <FormControl>
        <InputLabel>Phonenumber:</InputLabel>
        <Input onChange={onValueChange} name="phonenumber" value={user.phonenumber} />
        {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={edituserdetails}>
          Edit User
        </Button>
      </FormControl>
    </CenteredContainer>
  );
};

export default EditUser;
