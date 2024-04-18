import React from "react";
import { Button, TextField } from "@mui/material";
import { styled } from "@mui/system";
import "./UserCard.css";

export default function UserCard(props) {
  const data = props.data;

  return (
    <div className="usercard_outer_div">
      <div>
        <h3>Name : {data.name}</h3>
        <h3>UID : {data.UID}</h3>
      </div>
      <Button size="large">View</Button>
    </div>
  );
}
