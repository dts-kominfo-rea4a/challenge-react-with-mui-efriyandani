import { useState } from 'react';
import './App.css';
import Contact from './components/Contact'
import Header from './components/Header';
import ContactForm from './components/ContactForm';
// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
import { List } from '@mui/material';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  const [contacts, setContacts] = useState(contactsJSON);
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const contactAddHandler = (newContact) => {
    setContacts([newContact, ...contacts])
  }

  return (
    <div className="App">
      <Header />
      <div className="Container">
        <div className='Box-Form'>
          <ContactForm fxAddHandler={contactAddHandler} />
        </div>
        <div className='Box-List'>
          <List>
            {
              contacts.map((contact, index) => (
                <Contact key={index} data={contact} />
              ))
            }
          </List>
        </div>
      </div>

    </div >
  );
};

export default App;
