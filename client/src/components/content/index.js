import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState, useEffect } from 'react'
import Axios from 'axios'
import '././index.css';




export default function Contents() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const [Content, setContent] = useState([1]);
  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((res) => {
      setContent(res.data);
    });
  }, []);
  return (
    <div>
      {Content.map((val) => {
        return (
          <React.Fragment key={val.id}>
            <Card sx={{ maxWidth: 496 }}>

              {/* start cardHeader */}
              <CardHeader
                action={
                  <Tooltip title="Chỉnh Sửa Bài Viết">

                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? 'account-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      style={{ backgroundColor: "white", color: "black" }}
                    >
                      <MoreVertIcon />

                    </IconButton>
                  </Tooltip>
                }>
                  <Typography variant="body1" color="black" mb={1}>
                  {val.TitleName}
                </Typography>
                </CardHeader>

              {/* end cardHeader */}

              {/* start menu */}
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
                  },
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <EditIcon fontSize="small" />
                  </ListItemIcon>
                  Chỉnh Sửa
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <DeleteIcon fontSize="small" />
                  </ListItemIcon>
                  Xóa
                </MenuItem>
              </Menu>
              {/* end menu */}

              {/* start conten */}
              <CardContent>
                <Typography variant="body1" color="black" mb={2}>
                  {val.title}
                </Typography>
                <Typography variant="body1" color="black" mb={2}>
                  Nội Dung:
                </Typography>
                <Typography variant="body2" color="black">
                  {val.Content}
                </Typography>
              </CardContent>
              {/* end content */}

            </Card>
          </React.Fragment>
        )
      })}
    </div>
  );
}