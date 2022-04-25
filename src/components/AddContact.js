import React from "react";

class AddContact extends React.Component{
    state = {
        name:"",
        email:"",
    }

     onChangeName = (e) => {
        this.setState({name:e.target.value});
    }
     onChangeEmail = (e) => {
        this.setState({email:e.target.value});
    }

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" && this.state.email === ""){
            alert("All the fields are mandatory");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({
            name:"",
            email:"",
        })
    }
    render() {
        return (
            <div className="ui main" style={{marginTop:"33px"}}>
                <h1 style={{fontSize:"70px"}}>Add Contact</h1>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" onChange={this.onChangeName} value={this.state.name} name="name" placeholder="Name" />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" onChange={this.onChangeEmail} value={this.state.email} name="email" placeholder="Name" />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;