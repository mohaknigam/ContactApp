import React from "react";
import { Link } from "react-router-dom";

const CardDetail = (props) => {
    // const {name,email} = props?.location?.state?.contact;
    // console.error({name});
    return (
      <div className="main" style={{marginTop: '80px', display:'flex', alignItems:'center',flexDirection:'column'}}>
          <div className="ui card centered" >
            <div className="content">
                <div className="header">Dipesh</div>
                <div className="description">cs@123</div>
            </div>
          </div>

          <div className="center-div">
            <Link to='/'>
                <button className="ui button green center">Back To Contact List</button>
            </Link>
          </div>
      </div>
    );
}

export default CardDetail;