import React from "react";
import { Avatar, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";
import constants from "../../constants.json";

const list = [{name: 'Пользователи', link: 'users'}];

export const DrawerComponent = () => {
    return (
        <Drawer 
        open
        variant='permanent' 
        anchor="left"
        sx={{
            width: constants.DRAWER_WIDTH,
            flexShrink: 0,
            overflow: 'hidden',
            [`& .MuiDrawer-paper`]: { width: constants.DRAWER_WIDTH,
            bgcolor: '#333333', boxSizing: 'border-box' },
          }}
         >
             <List>
                 {list.map(el => {
                     return <ListItem sx={{ padding: "5px"}} key={el.name}>
                         <NavLink to={el.link} style={{display: "flex", flexDirection: 'column'}}>
                            <Avatar sx={{bgcolor: '#208a17', alignSelf: 'center'}}> </Avatar>
                            <ListItemText sx={{color: '#FFF'}}>{el.name}</ListItemText>
                         </NavLink>
                     </ListItem>
                 })}
             </List>
         </Drawer>
    )
}