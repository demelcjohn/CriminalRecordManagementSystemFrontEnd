import React from "react";
import "../NavBar/NavWeb.css";
import { useNavigate } from "react-router-dom";
export default function NavWeb() {
  const navigate = useNavigate();

  const profile = () => {
    navigate("/profile");
  };
  const allcase = () => {
    navigate("/allcase");
  };
  const addcase = () => {
    navigate("/addcase");
  };
  const search = () => {
    navigate("/searchcase");
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
    </div>
  );
}
