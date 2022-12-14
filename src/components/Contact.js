// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import { Divider, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email

    return (
        <>
            <ListItem>
                <ListItemAvatar>
                    <Avatar src={data.photo}>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={data.name}
                    secondary={<>
                        {data.phone}<br />
                        {data.email}
                    </>}
                />
            </ListItem>
            <Divider />

        </>);
};

export default Contact;
