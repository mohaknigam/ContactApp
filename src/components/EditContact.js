import {React, useState} from "react";
import {useNavigate} from 'react-router-dom';

function EditContact(props) {

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

    const update = (e) => {
        e.preventDefault();
        if(name === "" && email === ""){
            alert("All the fields are mandatory");
            return;
        }
        addContactHandler({name,email});
        setName('');
        setEmail('');
        // navigate(-1); can also be used here
        navigate('/',{replace:true});
    }
        return (
            <div className="ui main" style={{marginTop:"33px"}}>
                <h1 style={{fontSize:"70px"}}>Add Contact</h1>
                <form className="ui form" onSubmit={update}>
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

export default EditContact;