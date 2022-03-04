import React from "react"
import { NavLink } from "react-router-dom";
import { UserList } from "./UserList";
import { Box, Button } from "@mui/material"

import './styles.css'

export const UsersComponent = (): JSX.Element => {
    return (
    <div className="users-wrapper">
        <NavLink to={'add'}>
            <Button variant="contained" 
                sx={{
                marginLeft: '30px',
                backgroundColor: '#208a17',
                textTransform: 'none',
                '&:hover': {
                    bgcolor: '#196612'
                }
                }}>
                    Добавить пользователя
            </Button>  
        </NavLink>
        <Box className="users-list-wrapper">
            <UserList />
        </Box>
    </div>
    )
}