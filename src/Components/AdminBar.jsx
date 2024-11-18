import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from 'react-router-dom';

const AdminBar= () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate=useNavigate()
  let clearUser=()=>{
    localStorage.removeItem("token");
    navigate('/')
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
            Admin Dashboard
          </Typography>
          
          <Link to={'/'} style={{color: 'white'}}><Button color="inherit" sx={{ margin: 1, '&:hover': { border: 'none', 
          backgroundColor: 'white', color: '#86D293'},'&:focus': {outline: 'none'}}}>ADD MENTOR</Button>
          </Link>
          

        <Link to={'/add'} style={{color: 'white'}} ><Button color="inherit" sx={{  margin:2,'&:hover': { border: 'none', 
        backgroundColor: 'white', color: '#86D293'},'&:focus': {outline: 'none'}}}
        >ADD PROJECT</Button></Link>
    
              <Link to={'/'} style={{color: 'white'}}><Button color="inherit" sx={{  margin:2,'&:hover': { border: 'none', 
        backgroundColor: 'white', color: '#86D293'},'&:focus': {outline: 'none'}, 'onClick':{clearUser}}}>LOGOUT</Button></Link>
       
        </Toolbar>
      
      </AppBar>
    </Box>
  )
}

export default AdminBar