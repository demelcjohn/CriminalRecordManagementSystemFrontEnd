import React from "react";
import "./NavWeb.css";
import { useNavigate } from "react-router-dom";
export default function NavWeb() {
  const navigate = useNavigate();

  const addcitizen = () => {
    navigate("/admin/addcitizen");
  };
  const allcitizen = () => {
    navigate("/admin/allcitizen");
  };
  const addpolice = () => {
    navigate("/admin/addpolice");
  };

  const allpolice = () => {
    navigate("/admin/allPolice");
  };

  const addcourt = () => {
    navigate("/admin/addcourt");
  };

  const allcourt = () => {
    navigate("/admin/allCourt");
  };

  return (
    <div className="NavWeb_outerdiv">
      <div className="navweb_item" onClick={addcitizen}>
        Add Citizen
      </div>
      <div className="navweb_item" onClick={allcitizen}>
        All Citizens
      </div>
      <div className="navweb_item" onClick={addpolice}>
        Add Police User
      </div>

      <div className="navweb_item" onClick={allpolice}>
        All Police User
      </div>
      <div className="navweb_item" onClick={addcourt}>
        Add Court User
      </div>
      <div className="navweb_item" onClick={allcourt}>
        All Court User
      </div>
    </div>
  );
}
