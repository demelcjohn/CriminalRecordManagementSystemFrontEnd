import React from "react";
import "./NavWeb.css";
import { useNavigate } from "react-router-dom";
export default function NavWeb() {
  const navigate = useNavigate();

  const home_event = () => {
    navigate("/court/home");
  };
  const addjudgement_event = () => {
    navigate("/court/addjudgement");
  };
  const viewjudgement_event = () => {
    navigate("/court/viewjudgement");
  };

  return (
    <div className="NavWeb_outerdiv">
      <div className="navweb_item" onClick={home_event}>
        Home
      </div>
      <div className="navweb_item" onClick={addjudgement_event}>
        Add Judgement
      </div>
      <div className="navweb_item" onClick={viewjudgement_event}>
        View Judgement
      </div>
    </div>
  );
}
