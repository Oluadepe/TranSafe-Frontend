import { FaFacebookF, FaUserAlt } from "react-icons/fa"
import { RiLinkedinFill, RiLogoutBoxRLine } from "react-icons/ri"
import { SiTwitter } from "react-icons/si"
import { AiFillInstagram } from "react-icons/ai"
import React from "react"
import { Avatar, Box, Divider, ListItemIcon, Menu, MenuItem, IconButton, Tooltip } from "@mui/material"
import logo from "../assets/home/logo.svg"

const ProfileHeader = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header className="flex items-center bg-green-700 justify-between px-16 py-2">
      <div className="w-1/3">
       <img src={logo} alt="" className="w-1/6 bg-white opacity-70 rounded-full" />
       </div>
      <div className="flex py-2 text-white">
        <p className="mr-8">Contact Support +234 8124510001</p>
        <p className="flex items-center">Follow us on: 
        <div className="flex text-white"> 
        <FaFacebookF className="mx-2"/>
        <RiLinkedinFill className="mr-2"/>
        <SiTwitter className="mr-2"/>
        <AiFillInstagram />
        </div></p>
      </div>
      <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 60, height: 60 }}><FaUserAlt /></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> My Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <RiLogoutBoxRLine className="w-7 h-7" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
    </header>
  )
}

export default ProfileHeader