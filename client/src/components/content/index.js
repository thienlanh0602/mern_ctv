import * as React from 'react';
import { styled } from '@mui/material/styles';
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

export default function Contents() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
        <Card sx={{ maxWidth: 496}}>     
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
                style={{backgroundColor:"white",color:"black"}}
            >
            <MoreVertIcon />
            </IconButton>    
            </Tooltip>     
            }       
            title="Tuyển cộng tác viên trường HUTECH"
            subheader="Người đăng bài: Ngô Trần Huy Bảo"
        />
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
        <CardContent>
            <Typography variant="body1" color="black" mb={2}>
                Nội Dung:
            </Typography>
            <Typography variant="body2" color="black">
                Nhận file dữ liệu và các thông tin về sản phẩm 
                (mô tả sản phẩm, giá bán, tên sản phẩm,...), 
                và xử lý trên bảng tính Excel theo  yêu cầu 
                của khách hàng.
            </Typography>
        </CardContent>
        </Card>
    </React.Fragment>
  );
}