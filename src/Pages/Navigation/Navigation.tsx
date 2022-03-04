import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { selectAuth } from "../../store/AuthSlice";
import { Login } from "../Login/Login";
import { AddUserForm } from "../Users/AddUserForm/AddUserForm";
import { EditUserForm } from "../Users/EditUserForm/EditUserForm";
import { UsersContainer } from "../Users/UsersContainer";

const ProtectedRoute = ({children, authenticated}: PrivateRouteProps): JSX.Element => {
    if (authenticated) return <>{children}</>
    return <Navigate to={'/login'} />
}

export const Navigation = (): JSX.Element => {
    const authenticated = useSelector(selectAuth).authenticated;

    return (
        <Routes>
            <Route path='login' element={<Login />} />
            <Route path='users' element={
                <ProtectedRoute authenticated={authenticated} >
                    <UsersContainer />
                </ProtectedRoute>
            } />
            <Route path='users/add' element={
                <ProtectedRoute authenticated={authenticated}>
                    <AddUserForm />
                </ProtectedRoute>
            } />
            <Route path='users/edit' element={
                <ProtectedRoute authenticated={authenticated}>
                    <EditUserForm />
                </ProtectedRoute>
            } />
            <Route path='*' element={<Login />} />
        </Routes>
    )
}

type PrivateRouteProps = {
    children: JSX.Element;
    authenticated: boolean;
}