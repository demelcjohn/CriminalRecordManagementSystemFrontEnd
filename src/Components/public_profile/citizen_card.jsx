import { Button } from "@mui/material";
import React from "react";
import "./case_card.css";
import axios from "axios";
export default function Citizen_card(props) {
  const data = props.data;

  const add_request = async () => {
    const url = "http://127.0.0.1:8000/citizen/request";
    const token = localStorage.getItem("token"); // replace 'token' with the key you used to store the token
    const config = {
      headers: { token: token },
      withCredentials: true,
    };
    const payload = { userid: data._id };
    const datarecived = await axios
      .post(url, payload, config)
      .then((response) => {
        if (response.status == 200) {
          alert("Request susessfully sent");
        } else {
          alert("Request is not able to sent");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <div className="citizen_card_inner_div">
      <div>
        <h3>{data.UID}</h3>
        <h3>{data.name}</h3>
      </div>
      <Button onClick={add_request}>Request</Button>
    </div>
  );
}
