import React from "react";
import { Link } from "react-router-dom";

const CardContact = (props) => {
    const {contact,deleteItemHandler,id} = props;
    return (
        <div className="item" style={{display:"flex", justifyContent:"space-between"}} key={contact.id}>
                <div className="content" >
                  <Link to={{pathname: `/contact/${id}`, state:{contact: contact}}}>
                    <div className="header">{contact.name}</div>
                    <div style={{marginleft:"auto"}}>{contact.email}</div>
                  </Link>
                </div>
                  <div style={{marginLeft:"auto"}}>
                    <i className="trash alternate outline icon" style={{color:"red",padding:"20px", marginTop:"7px", marginLeft:"auto"}} onClick={() => deleteItemHandler(contact.id)}></i>
                    <i className="edit alternate outline icon" style={{color:"red", marginTop:"7px", marginLeft:"auto"}} onClick={() => deleteItemHandler(contact.id)}></i>
                  </div>
            </div>
    );
}

export default CardContact;