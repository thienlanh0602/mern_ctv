import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useState } from "react";
import {useNavigate } from "react-router-dom";
import { loginUser } from "../redux/apiRequest";
import { useDispatch } from "react-redux";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Để khi nhấn lại tải trang thì không đứng yên
  const handleLogin = (e) => {
      e.preventDefault();
      const newUser = {
          username: username,
          password: password,
      };
      loginUser(newUser, dispatch, navigate );

  }
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{         
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            sx={{
            height: 96,
            width: 90,
            }}
            alt="Logo Hutech"
            src="https://cdn.haitrieu.com/wp-content/uploads/2021/09/Logo-DH-CONG-NGHE-THANH-PHO-HO-CHI-MINH-HUTECH.png"
          />
          <Typography component="h1" variant="h5" fontWeight="bold">
            ĐĂNG NHẬP
          </Typography>
          <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mật Khẩu"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              
            />
            <FormControlLabel
              control={<Checkbox value="remember"/>}
              label="Lưu Mật Khẩu"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{backgroundColor:'black'}}
            >
              Đăng Nhập
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" style={{color:'black'}}>
                  Bạn quên mật khẩu?
                </Link>
              </Grid>
              <Grid item>
                <Link href="http://localhost:3000/dangky" variant="body2" style={{color:'black'}}>
                  {"Tạo tài khoản"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
            
  );
}