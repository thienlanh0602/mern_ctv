import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem';

import  Accordion  from '@mui/material/Accordion';
import  AccordionSummary from '@mui/material/AccordionSummary'; //Dau de
import  AccordionDetails  from '@mui/material/AccordionDetails'; //Chi tiet
import ExpandMoreIcon from '@mui/icons-material/ExpandMore' 

import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
const currencies1 = [
  {
    value: 'CNTT',
    label: 'Công Nghệ Thông Tin',
  },
  {
    value: 'QTKD',
    label: 'Quản Trị Kinh Doanh',
  },
  {
    value: 'KTOT',
    label: 'Kỹ Thuật Ô Tô',
  },
];
const currencies2 = [
  {
    value: 'PGSK',
    label: 'Phụ Giúp Sự Kiện',
  },
  {
    value: 'SCKT',
    label: 'Sửa Chữa Kỹ Thuật',
  },
];

export default function App() {
  const [currency1, setCurrency1] = React.useState('CNTT');

  const handleChange1 = (event) => {
    setCurrency1(event.target.value);
  };
  const [currency2, setCurrency2] = React.useState('PGSK');

  const handleChange2 = (event) => {
    setCurrency2(event.target.value);
  };

  return (
    <div className="App">
      <AppBar position='static' style={{backgroundColor:"white",color:"black", boxShadow:"0px"}} >
        <Toolbar>  
            <SchoolIcon fontSize='large'></SchoolIcon>
            <Typography align='left'sx={{flexGrow: 1}}></Typography>             
            <Typography pr={6} fontWeight='bold'>Bạn là người tuyển dụng - Đăng bài ngay</Typography>   
            <Box pr={4}>
              <NotificationsIcon></NotificationsIcon>
            </Box>
            <Box pr={4}>
              <MessageIcon></MessageIcon>
            </Box>
            <Box pr={4}>
              <PersonIcon></PersonIcon>
            </Box>
        </Toolbar>
      </AppBar>
     <AppBar position='static' style={{backgroundColor:"white",color:"black", boxShadow:"0px 0px 0px 0.5px"}} >
        <Toolbar>  
            <Stack
            direction='row' 
            textAlign='center'
            spacing={5}
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="filled-select-currency"
              select
              label="Khoa"
              value={currency1}
              onChange={handleChange1}
              helperText="Lựa chọn khoa, viện"
              variant="filled"
            >
              {currencies1.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="filled-select-currency"
              select
              label="Vị Trí"
              value={currency2}
              onChange={handleChange2}
              helperText="Lựa chọn vị trí"
              variant="filled"
            >
              {currencies2.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}

