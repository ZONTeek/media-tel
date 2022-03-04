import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { Delete, Edit } from "@mui/icons-material";
import { removeUser, selectCity, selectUser } from "../../store/UsersSlice";

import './styles.css';


export const UserList = (): JSX.Element => {
    const users = useSelector(selectUser);
    const cities = useSelector(selectCity);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const columns = [
        { 
            field: 'fio', 
            headerName: 'ФИО',
            minWidth: 250,
            disableColumnMenu: true,
            headerAlign: 'center' as const
        },
        { 
            field: 'cityId',
            headerName: 'Город',
            disableColumnMenu: true,
            flex: 0.98,
            valueGetter: (params: any) => {
                const ind = cities.findIndex( el => params.row.cityId === el.id)
                return `${cities[ind].name}`
            },
            renderCell: (params: GridRenderCellParams<string>) => (<strong className="users-list-citycell">
                    {params.value}
                    <div className="users-list-citycell-actions">
                        <div onClick={() => GoToEdit(params.id as number, params.row.fio, params.formattedValue)}>
                            <Edit />
                        </div>
                        <div onClick={() => DeleteUser(params.id)}>
                            <Delete />
                        </div>
                    </div>
                </strong>),
            headerAlign: 'left' as const
        },
    ]

    const GoToEdit = (id: number, name: string, city: string) => {
        navigate('edit', {
            state: {
                id, name, city
            }
        })
    }

    //setTimeout is required due to race condition when deleting row and deleting user from store
    const DeleteUser = useCallback((id: string|number): void => {
        setTimeout( () => dispatch(removeUser(id)), 0)
    },[dispatch])


    return (
        <Box className='users-list-content'>
            <div className="users-list-table">
                <DataGrid 
                    rows={users}  
                    columns={columns}
                    pageSize={5}  
                    rowsPerPageOptions={[5]}
                    sx={{
                        border: 'none',
                        '& .MuiDataGrid-footerContainer': {
                        flexDirection: 'row-reverse',
                        bgcolor: '#FFF',
                        },
                        '& .MuiDataGrid-virtualScroller': {
                        bgcolor: "#e5e5e5",
                        },
                        '& .MuiDataGrid-columnSeparator': {
                            display: 'none'
                        },
                        '& .MuiTablePagination-actions .MuiIconButton-root': {
                            borderRadius: 0,
                            marginRight: '5px',
                            bgcolor: "#208a17"
                        },
                        '& .MuiDataGrid-columnHeaderTitleContainer': {
                            // justifyContent: 'center',
                            fontSize: '16px',
                            fontWeight: 'Bold'
                        },
                        '& .MuiDataGrid-row': {
                            bgcolor: '#FFF',
                            margin: '10px',
                            width: `calc(100% - 40px)`
                        },
                }}
                    />
            </div>
        </Box>
    )
}