import React from "react";
import "./NavWeb.css";
import { useNavigate } from "react-router-dom";
export default function NavWeb() {
  const navigate = useNavigate();

  const profile = () => {
    navigate("/citizen/home");
  };

  const publicprofile = ()=>{
    navigate("/citizen/mypublicprofile");
  }

  const allcase = () => {
    navigate("/citizen/status");
  };
  const addcase = () => {
    navigate("/citizen/statusall");
  };

  const requestby = () => {
    navigate("/citizen/requestby");
  };

  const requestto = () => {
    navigate("/citizen/requestto");
  };

  const addrequest = ()=>{
    navigate("/citizen/addrequest");
  }

  return (
    <div className="NavWeb_outerdiv">
      <div className="navweb_item" onClick={profile}>
        Home
      </div>
      <div className="navweb_item" onClick={publicprofile}>
        My Public Profile
      </div>
      <div className="navweb_item" onClick={allcase}>
        Status
      </div>
      <div className="navweb_item" onClick={addcase}>
        Status All
      </div>
      <div className="navweb_item" onClick={requestby}>
        Request By
      </div>
      <div className="navweb_item" onClick={requestto}>
        Request To
      </div>
      <div className="navweb_item" onClick={addrequest}>
        Add Request
      </div>
    </div>
  );
}
