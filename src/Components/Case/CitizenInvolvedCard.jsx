import { Padding } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

export default function CitizenInvolvedCard(props) {
  const data = props.data;
  console.log("hello");
  return (
    <div
      style={{
        padding: "3px",
        border: "solid",
        margin: "3px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <p>
        {" "}
        <b>UID :</b> {data.UID}
      </p>
      <p>
        {" "}
        <b>Name :</b> {data.name}
      </p>
      <Button>View</Button>
    </div>
  );
}
