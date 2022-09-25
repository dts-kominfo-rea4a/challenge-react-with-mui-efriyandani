// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { useState } from "react";
import { Button, } from "@mui/material";

const ContactForm = ({ fxAddHandler }) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const emptyContact = {
        name: "",
        phone: "",
        email: "",
        photo: "",
    }
    const [newContact, setNewContact] = useState(emptyContact);
    const onNameChangeHandler = (event) => {
        const oldContact = newContact
        setNewContact(
            {
                name: event.target.value,
                phone: oldContact.phone,
                email: oldContact.email,
                photo: oldContact.photo,
            }
        )
    }

    const onPhoneChangeHandler = (event) => {
        const oldContact = newContact
        setNewContact(
            {
                name: oldContact.name,
                phone: event.target.value,
                email: oldContact.email,
                photo: oldContact.photo,
            }
        )
    }

    const onEmailChangeHandler = (event) => {
        const oldContact = newContact
        setNewContact(
            {
                name: oldContact.name,
                phone: oldContact.phone,
                email: event.target.value,
                photo: oldContact.photo,
            }
        )
    }

    const onPhotoUrlChangeHandler = (event) => {
        const oldContact = newContact
        setNewContact(
            {
                name: oldContact.name,
                phone: oldContact.phone,
                email: oldContact.email,
                photo: event.target.value,
            }
        )
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        fxAddHandler(newContact);
        setNewContact(emptyContact);
    }

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    placeholder="Your name"
                    value={newContact.name}
                    onChange={onNameChangeHandler}
                /><br />
                <input
                    type="text"
                    placeholder="Your phone number"
                    value={newContact.phone}
                    onChange={onPhoneChangeHandler}
                /><br />
                <input
                    type="text"
                    placeholder="Your Email"
                    value={newContact.email}
                    onChange={onEmailChangeHandler}
                /><br />
                <input
                    type="text"
                    placeholder="photo url"
                    value={newContact.photo}
                    onChange={onPhotoUrlChangeHandler}
                /><br />
                <Button type="submit" variant="contained">ADD NEW</Button>
            </form>
        </>
    );
}

export default ContactForm;