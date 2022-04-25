import {React,useState,useEffect} from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import uuid from 'uuid';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts,setContacts]=useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts,{id:uuid.v4(),...contact}]);
  };

  const deleteItemHandler = (id) => {
      const newContactList = contacts.filter(contact => contact.id !== id);
      setContacts(newContactList);
  }
  
  useEffect(() => {
    const retrievedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    
    if(retrievedData){
      setContacts(retrievedData);
    }
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
