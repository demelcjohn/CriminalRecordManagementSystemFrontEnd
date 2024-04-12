import React from "react";
import "./request.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Request_by_card(props) {
  const navigate = useNavigate();
  const data = props.data;
  const viewprofile = () => {
    navigate("/citizen/publicprofile/" + props.data._id);
  };
  return (
    <div className="request_card_outerdiv">
      <div className="request_card_innerdiv_1">
        <p>Your have requested Public Profile of</p>
        <h3>UID : {data.requested_to.UID}</h3>
        <p>Name : {data.requested_to.name}</p>
      </div>
      <div>
        {data.is_approved ? (
          <Button onClick={viewprofile}>View Public Profile</Button>
        ) : (
          <p>Requested</p>
        )}
      </div>
    </div>
  );
}
