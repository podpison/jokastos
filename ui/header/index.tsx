'use client';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Link from 'next/link';
import MobileMenu from './mobileMenu';
import { FC } from 'react';
import textToURL from '@/helpers/textToURL';
import Logo from './logo';
import TelegramIcon from '@mui/icons-material/Telegram';

export const pages = ['What I do', 'About me'];

const Header: FC = () => {

  return <AppBar className='bg-secondary px-4' position="sticky">
    <div className='container'>
      <Toolbar disableGutters>
        <Logo className='hidden mr-2 md:flex' />
        <MobileMenu pages={pages} />
        <Box className='hidden justify-center flex-grow gap-x-2 md:flex'>
          {pages.map((page) => (
            <Link href={`/${textToURL(page)}`} key={page}>
              <Button className='text-smoke'>
                {page}
              </Button>
            </Link>
          ))}
        </Box>
        <Box className='ml-auto mr-10'>
          <Tooltip title='My telegram'>
            <a className='group' href='https://t.me/podpisonn' target='_blank' rel='noopener noreferrer'>
              <TelegramIcon className='text-smoke transition-opacity group-hover:opacity-80' />
            </a>
          </Tooltip>
        </Box>
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