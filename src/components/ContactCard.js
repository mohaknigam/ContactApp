import React from "react";

const CardContact = (props) => {
    const {contact,deleteItemHandler} = props;
    return (
        <div className="item" style={{display:"flex"}} key={contact.id}>
                <div className="content" >
                  <div className="header">{contact.name}</div>
                  <div style={{marginleft:"auto"}}>{contact.email}</div>
                  <i className="trash alternate outline icon" style={{color:"red", marginTop:"7px", marginLeft:"auto"}} onClick={() => deleteItemHandler(contact.id)}></i>
                </div>
            </div>
    );
}

export default CardContact;