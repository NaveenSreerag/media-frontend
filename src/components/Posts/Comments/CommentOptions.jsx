import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';


const CommentOptions = ({ comment, user, post,setOpenEdit,openEdit }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

                <Tooltip title="Comment settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        {/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar> */}
                        <MoreVertOutlinedIcon style={{ cursor: 'pointer' }} className="more-vert" />
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


                {post.postedBy._id === user._id ? comment.user._id === user._id ?

                    <>
                        <MenuItem onClick={()=> setOpenEdit(!openEdit)} >
                            <Avatar /> Edit
                        </MenuItem>
                        <MenuItem>
                            <Avatar /> Delete
                        </MenuItem>
                    </>
                    : <MenuItem>
                        <Avatar /> Delete

                    </MenuItem> :  comment.user._id === user._id ? <>
                    <MenuItem onClick={()=> setOpenEdit(!openEdit)}>
                        <Avatar /> Edit
                    </MenuItem>
                    <MenuItem>
                        <Avatar /> Delete
                    </MenuItem>
                </>
                :''}



            </Menu>
        </>
    )
}

export default CommentOptions