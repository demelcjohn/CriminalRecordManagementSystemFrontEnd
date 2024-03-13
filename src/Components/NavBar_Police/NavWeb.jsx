import React from "react";
import "./NavWeb.css";
import { useNavigate } from "react-router-dom";
export default function NavWeb() {
  const navigate = useNavigate();

  const profile = () => {
    navigate("/police/profile");
  };
  const allcase = () => {
    navigate("/police/allcase");
  };
  const addcase = () => {
    navigate("/police/addcase");
  };
  const search = () => {
    navigate("/police/searchcase");
  };
  const settings = () => {
    navigate("/police/settings");
  };
  return (
    <div className="NavWeb_outerdiv">
      <div className="navweb_item" onClick={profile}>
        Profile
      </div>
      <div className="navweb_item" onClick={allcase}>
        All Cases
      </div>
      <div className="navweb_item" onClick={addcase}>
        Add Cases
      </div>
      <div className="navweb_item" onClick={search}>
        Search Case
      </div>
      <div className="navweb_item" onClick={settings}>
        Settings
      </div>
    </div>
  );
}
