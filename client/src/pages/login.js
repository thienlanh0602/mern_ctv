import { useState } from 'react' //Hook

import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

import SendIcon from '@mui/icons-material/Send'

function Login() {
    const [name, setName] = useState('')
    const [details, setDetails] = useState('')
    const [nameError, setNameError] = useState('')
    const [detailsError, setDetailsError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()   //Khi gửi yêu cầu thì ở lại chứ không văng ra khỏi trang chủ

        if (name && details) {
            console.log(name, details)
        }

        if (name == '') {
            setNameError(true)
        }

        if (details == '') {
            setDetailsError(true)
        }
    }
    return (
        <Container>
            <Typography variant='h3' gutterBottom align='center' >
                Welcome to login
            </Typography>
            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <Box pb={2} textAlign='center'>
                    <TextField
                        label='Username'
                        variant='standard'
                        required
                        onChange={(e) => setName(e.target.value)}
                        error = {nameError}
                    />
                </Box>
                <Box mt={2} mb={2} textAlign='center'>
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                        error = {nameError}
                    />
                </Box>
                <Box textAlign='center'>
                    <Button type='submit' variant='contained' startIcon={<SendIcon />}>Gửi đi</Button>
                </Box>
            </form>
        </Container>
    )
}

export default Login