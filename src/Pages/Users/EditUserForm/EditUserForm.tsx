import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Location, useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Button, MenuItem, TextField } from "@mui/material";
import { editUser, selectCity } from "../../../store/UsersSlice";
import { EditFormStateType } from "../../../types/types";

import '../styles.css';

export const EditUserForm = (): JSX.Element => {    
    const cities = useSelector(selectCity);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation() as Location;
    const {id, name, city} = location.state as EditFormStateType
    

    const formik = useFormik({
        initialValues: {
            username: name,
            city: city
        },
        onSubmit: (values) => {
            dispatch(editUser({
                id,
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
                            <MenuItem key={item.name} value={item.name}>{item.name}</MenuItem>
                            )}
                        </TextField>
                </div>
                <div>
                    <Button 
                        variant='contained'
                        type='submit' 
                        sx={{
                            marginRight: '10px',
                            backgroundColor: '#208a17',
                            width: '200px',
                            textTransform: 'none',
                            '&:hover': {
                                bgcolor: '#196612'
                            }
                        }}>
                        Изменить
                    </Button>
                    <Button 
                        variant='contained'
                        onClick={()=> navigate('/users')}
                        sx={{
                            backgroundColor: '#eb4034',
                            width: '180px',
                            textTransform: 'none',
                            '&:hover': {
                                bgcolor: '#ad271d'
                            }
                        }}>
                        Отмена
                    </Button>
                </div>
            </div>
        </form>
    </div>)
}