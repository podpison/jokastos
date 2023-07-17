'use client';
import { FC, useState } from 'react';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import textToURL from '@/helpers/textToURL';
import Logo from './logo';

type Props = {
  pages: string[]
}

const MobileMenu: FC<Props> = ({ pages }) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return <>
    <Box className='flex flex-grow md:hidden'>
      <IconButton
        size="large"
        aria-label="Navigation"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        className='block md:none'
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Link className='text-center' href={`/${textToURL(page)}`}>
              {page}
            </Link>
          </MenuItem>
        ))}
      </Menu>
      <Logo className='flex mx-auto md:hidden' />
    </Box>
  </>
};

export default MobileMenu;