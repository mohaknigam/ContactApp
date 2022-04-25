import {React, useState} from "react";
import {useNavigate} from 'react-router-dom';

function AddContact(props) {

    const {addContactHandler} = props;

    const navigate = useNavigate();
    
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');

    const onChangeName = (e) => {
        console.error({es: e.target.value});
        setName(e.target.value);
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const add = (e) => {
        e.preventDefault();
        if(name === "" && email === ""){
            alert("All the fields are mandatory");
            return;
        }
        addContactHandler({name,email});
        setName('');
        setEmail('');
        navigate(-1);
    }
        return (
            <div className="ui main" style={{marginTop:"33px"}}>
                <h1 style={{fontSize:"70px"}}>Add Contact</h1>
                <form className="ui form" onSubmit={add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" onChange={onChangeName} value={name} name="name" placeholder="Name" />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" onChange={onChangeEmail} value={email} name="email" placeholder="Name" />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
}

export default AddContact;