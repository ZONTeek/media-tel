import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootStateType } from "./store";

const initialState = {
    value: {
        users: [
            { 
            id: 12312312311,
            fio: 'Большаков Антон Сергеевич',
            cityId: 1
        },
        { 
            id: 123213423545,
            fio: 'Иванов Иван Иванович',
            cityId: 1
        },
            { 
            id:123123213215545,
            fio: 'Немцов Борис Николаевич',
            cityId: 1
        }],
        cities: [
            {
                id: 1,
                name: 'Москва'
            },
            {
                id: 2,
                name: 'Санкт-Петербург'
            },
            {
                id: 3,
                name: 'Ростов-на-Дону'
            },
            
        ]
    }
}

const UsersSlice = createSlice({
    name: 'Users',
    initialState, 
    reducers: {
        addUser: (state, action: PayloadAction<{name: string, city: string}>) => {
            const id = Date.now();
            const cityIndex = state.value.cities.findIndex(city => city.name === action.payload.city);
            const cityId = state.value.cities[cityIndex].id;

            state.value.users = [...state.value.users, {id, cityId, fio: action.payload.name}]
        },
        removeUser: (state, action: PayloadAction<string|number>) => {
            state.value.users = state.value.users.filter(item => item.id !== action.payload)
        },
        editUser: (state, action: PayloadAction<{id: number, name: string, city: string}>) => {
            const cityIndex = state.value.cities.findIndex(city => city.name === action.payload.city);
            const cityId = state.value.cities[cityIndex].id;

            state.value.users = state.value.users.map(user => {
                if (user.id === action.payload.id) {
                    user.fio = action.payload.name;
                    user.cityId = cityId;
                }
                return user;
            })
        }
    }
})

export const selectCity = (state: RootStateType) => state.users.value.cities;
export const selectUser = (state: RootStateType) => state.users.value.users;
export const { addUser, removeUser, editUser } = UsersSlice.actions;
export const UsersReducer = UsersSlice.reducer;