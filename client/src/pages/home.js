import * as React from 'react';
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button'

import Login from './login';

import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
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

export default function Home() {
  const [currency1, setCurrency1] = React.useState('CNTT');

  const handleChange1 = (event) => {
    setCurrency1(event.target.value);
  };
  const [currency2, setCurrency2] = React.useState('PGSK');

  const handleChange2 = (event) => {
    setCurrency2(event.target.value);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="Home">
      <AppBar position='absolute' style={{backgroundColor:"white",color:"black", boxShadow:"0px 0px 0px 1px #A9A9A9"}} >
        <Toolbar>  
            <SchoolIcon fontSize='large'></SchoolIcon>
            <Typography align='left'sx={{flexGrow: 1}}></Typography>             
            <Typography pr={6} fontWeight='bold'>Bạn là người tuyển dụng - Đăng bài ngay</Typography>   
            <Box>
              <Button type='submit' href=''  style={{backgroundColor:"white",color:"black"}}>
              <NotificationsIcon></NotificationsIcon>
              </Button>
            </Box>
            <Box>
            </Box>
            <React.Fragment>
              <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Cài Đặt Tài Khoản">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    style={{backgroundColor:"white",color:"black"}}
                  >
                    <PersonIcon></PersonIcon>
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
                <MenuItem>
                  <Avatar /> Tài Khoản Của Tôi
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Thêm Tài Khoản
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Cài Đặt
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Đăng Xuất
                </MenuItem>
              </Menu>
            </React.Fragment>
        </Toolbar>     
        <Toolbar style={{justifyContent:'center' , boxShadow:"0px 0px 0px 2px #A9A9A9"}} >
            <Stack         
            textAlign='center'
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <Box pt={3} pb={2}>          
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
            <Button 
            type='submit' 
            variant='contained'
            style={{backgroundColor:'#B7F5D7', color:'black', height:'55.97px', width:'120px', margin:'7px 0px 0px 10px', fontWeight:'bold'}}>
                Tìm kiếm
            </Button> 
            </Box>
            <Box pb={3}>
              <Typography variant='h6' fontSize={13} gutterBottom align='center'>
                Lựa chọn khoa và vị trí để tìm vị trí phù hợp nhất đối với bạn.
              </Typography>
            </Box>     
            </Stack>        
        </Toolbar>              
      </AppBar>
    </div>
  );
}
