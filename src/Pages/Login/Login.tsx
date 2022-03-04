import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@mui/material';

import './styles.css';
import { login } from '../../store/AuthSlice';
import { useNavigate } from 'react-router-dom';

export const Login = (): JSX.Element => {    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            login: '',
            password: ''
        },
        onSubmit: (values) => {
            dispatch(login({name: values.login}))
            navigate('/users')
        }
    })

    return (
     <div className="login-wrapper">
        <div>
            <span className="login-main-title">Вход</span>
            <form onSubmit={formik.handleSubmit} >
                <div className='login-form'>
                        <span className="login-title">Логин</span>
                        <TextField 
                            name="login" 
                            id="login"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.login}
                            className='login-input' />
                        <span className="login-title">Пароль</span>
                        <TextField
                            name="password"
                            id="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            type="password"
                            className='login-input' />
                    <Button 
                        variant='contained'
                        type='submit' 
                        disabled={!formik.values.login || !formik.values.password}
                        sx={{
                            marginTop: '15px',
                            backgroundColor: '#208a17',
                            borderRadius: '30px',
                            width: '320px',
                            textTransform: 'none',
                            '&:hover': {
                                bgcolor: '#196612'
                            }
                        }}>
                        Войти
                    </Button>
                </div>
            </form>
        </div>
    </div>)
}