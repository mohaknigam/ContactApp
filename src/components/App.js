import {React,useState,useEffect} from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import api from '../api/contacts';
import { NoMatch } from './NoMatch';
import CardDetail from './ContactDetail';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import uuid from 'uuid';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts,setContacts]=useState([]);

  const addContactHandler = async (contact) => {
    const request = {id:uuid.v4(),...contact};

    const response  = await api.post('/contacts',request);
    setContacts([...contacts,response.data]);
  };

  const retrieveContacts = async () => {
     
        const response = await api.get("http://localhost:3006/contacts");
      return response.data;
      
  }

  const deleteItemHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
      const newContactList = contacts.filter(contact => contact.id !== id);
      setContacts(newContactList);
  }
  
  useEffect(() => {
    // const retrievedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if(retrievedData){
    //   setContacts(retrievedData);
    // }
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if(allContacts) setContacts(allContacts);
    }
    getAllContacts();
  },[]);

  useEffect(() => {
    // what if contacts array is empty, how to deal that ? 
    if(contacts.length) localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);
 
  return (
    <div className='ui container'>
      <Router>
        <Header />

        <Routes>
            <Route path='/' exact element={ <ContactList contacts={contacts} deleteItemHandler={deleteItemHandler} />}/>
            <Route path='/add' element={ <AddContact addContactHandler={addContactHandler}/>} />
            <Route path='/contact/:id' element={ <CardDetail />} />
            <Route path='*' element={ <NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
