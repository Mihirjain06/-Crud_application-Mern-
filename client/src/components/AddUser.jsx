import React, { useState } from 'react';
import { FormControl, InputLabel, Input, styled, Button } from '@mui/material';
import { addUser } from '../service/api';
import {useNavigate} from 'react-router-dom';

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
        margin-top:20px;
    }
    
`;

export default function Data() {
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phonenumber: '',
    });
    const navigate = useNavigate();

    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const onValueChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const validateEmail = (email) => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return emailPattern.test(email);
    };

    const validatePhone = (phone) => {
        const phonePattern = /^[0-9]{10}$/;
        return phonePattern.test(phone);
    };

    const adduserdetails = () => {
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
        navigate('/alluser');

        addUser(user)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
            <CenteredContainer>
                <h2>Add User</h2>
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
                    <Input
                        type="email"
                        onChange={onValueChange}
                        name="email"
                        value={user.email}
                    />
                    {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                </FormControl>
                <FormControl>
                    <InputLabel>Phonenumber:</InputLabel>
                    <Input
                        onChange={onValueChange}
                        name="phonenumber"
                        value={user.phonenumber}
                    />
                    {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}
                </FormControl>
                <FormControl>
                    <Button variant="contained" onClick={adduserdetails}>
                        Add User
                    </Button>
                </FormControl>
            </CenteredContainer>
    );
}
