'use client';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MobileMenu from './mobileMenu';
import { FC } from 'react';
import Logo from './logo';
import Contacts from '../contacts';
import Nav from './nav';

export const pages = ['What I do', 'About me'];

const Header: FC = () => {

  return <AppBar className='bg-secondary px-4' position="sticky">
    <div className='container'>
      <Toolbar disableGutters>
        <Logo className='hidden mr-2 md:flex' />
        <MobileMenu pages={pages} />
        <Nav className='hidden' pages={pages} />
        <Contacts className='ml-auto mr-10' />
        <Tooltip title="That is me">
          <IconButton sx={{ p: 0 }}>
            <Avatar alt="Alexey Uvarov" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </div>
  </AppBar>
}

export default Header;