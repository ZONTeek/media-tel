import React from "react"
import { Outlet } from "react-router-dom"
import { UsersComponent } from "./UsersCoponent"

export const UsersContainer = () => {
    return (
    <>
        <UsersComponent />
        <Outlet />
    </>)
}