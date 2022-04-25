import React from "react";
import { Link } from "react-router-dom";
import ContactCard from './ContactCard';

const ContactList = (props) => {
    const {contacts, deleteItemHandler} = props;

    const renderList = contacts.map((contact) => {
        return (
            <ContactCard contact={contact} deleteItemHandler={deleteItemHandler} key={contact.id}/>
        );
    });
    return(
        <div className="main">
            {/* how to give css in h2 */}
            <h2>Contact List</h2> 
            <Link to="/add"><button className="ui button blue right">Add Contact</button></Link>
            <div className="ui celled list">
            {renderList}
        </div>
        </div>
        
    );
};

export default ContactList;