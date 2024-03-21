import React from 'react';
import {AppBar,Toolbar, styled} from '@mui/material';
import { NavLink } from 'react-router-dom';

//for css using material
const Header = styled(AppBar)`
    background: #111111
`
const Tabs = styled(NavLink)`
    font-size: 15px;
    margin-right: 20px;
    color: inherit;
    text-decoration: none;
`
export default function Navbar() {
  return (
    <Header position="static">
        <Toolbar>
            <Tabs to='/'>CRUD-APP</Tabs>
            <Tabs to='/adduser'>Add Users</Tabs>
            <Tabs to='/alluser'>All Users</Tabs>
        </Toolbar>
    </Header>
  )
}
