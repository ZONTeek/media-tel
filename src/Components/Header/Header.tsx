import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import {styled} from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectAuth } from "../../store/AuthSlice";
import { useNavigate } from "react-router-dom";

const CustomButton = styled(Button)(() => ({
    color: '#FFF',
    backgroundColor: '#208a17',
    fontSize: 14,
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#196612'
    }
}));

export const Header = (): JSX.Element => {
    const AuthState = useSelector(selectAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogout = () => {
        dispatch(logout());
        navigate('/login');
    }

    const onLogin = () => {
        navigate('/login');
    }

    return (<AppBar position="static" color="inherit">
        <Toolbar sx={{justifyContent: "flex-end"}}>
                {AuthState.authenticated ? <>
                    <Typography variant="h6" padding={'10px'} color={'#208a17'}>{AuthState.user.name}</Typography>
                    <CustomButton variant='contained' color={"secondary"} onClick={onLogout}>Выйти</CustomButton>
                </> :
                <CustomButton variant='contained' color={"secondary"} onClick={onLogin}>Войти</CustomButton>
            }
        </Toolbar>
    </AppBar>)
}