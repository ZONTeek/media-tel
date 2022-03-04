import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Button, MenuItem, TextField } from "@mui/material";
import { addUser, selectCity } from "../../../store/UsersSlice";

import '../styles.css';

export const AddUserForm = (): JSX.Element => {    
    const cities = useSelector(selectCity);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: "",
            city: ""
        },
        onSubmit: (values) => {
            dispatch(addUser({
                name: values.username,
                city: values.city
                }));
            navigate('/users');
        }
    });

    return (
    <div className="add-user">
        <span className="add-user-main-title">Добавление нового пользователя</span>
        <form onSubmit={formik.handleSubmit} >
            <div className='add-user-form'>
                <div className="add-user-row">
                    <span className="add-user-row-title">ФИО:</span>
                    <TextField 
                        name="username" 
                        id="username"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        className='add-user-input' />
                </div>
                <div className="add-user-row">
                    <span className="add-user-row-title">Город:</span>
                    <TextField
                        select
                        name="city"
                        id="city"
                        onChange={formik.handleChange}
                        value={formik.values.city}
                        className='add-user-input' >
                            {cities.map( item => 
                            <MenuItem value={item.name}>{item.name}</MenuItem>
                            )}
                        </TextField>
                </div>
                <Button 
                    variant='contained'
                    type='submit' 
                    sx={{
                        backgroundColor: '#208a17',
                        width: '200px',
                        textTransform: 'none',
                        '&:hover': {
                            bgcolor: '#196612'
                        }
                    }}>
                    Добавить
                </Button>
            </div>
        </form>
    </div>)
}