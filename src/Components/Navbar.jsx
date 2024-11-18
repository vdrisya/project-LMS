import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
// import logo from "../assets/links/logo.png";
const Navbar= () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate=useNavigate()
  let clearUser=()=>{
    localStorage.removeItem("token");
    navigate('/login')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{backgroundColor: '#000000'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 900}}>
            project_mentoring
          </Typography>
         
        {/* <button variant="contained" onClick={clearUser}>Logout</button>  */}
                 
        </Toolbar>
      
      </AppBar>
    </Box>
  )
}

export default Navbar