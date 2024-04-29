import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar_Court from "../../Components/NavBar_Court/NavBar";
import { Button, TextField, TextareaAutosize } from "@mui/material";
import { styled } from "@mui/system";
import { TextFields } from "@mui/icons-material";
import axios from "axios";
import mongoose from "mongoose";

export default function Add_Judgement() {
  const StyledTextFieldLong = styled(TextField)({
    color: "black",
    width: "90vw",
    "@media (min-width:600px)": {
      width: "50vw",
    },
    "& .MuiInputBase-root.Mui-disabled": {
      color: "black", // change input text color
      "-webkit-text-fill-color": "black", // for webkit browsers
    },
    "& .MuiFormLabel-root.Mui-disabled": {
      color: "black", // change label color
    },
    "& .MuiInputBase-input.Mui-disabled": {
      color: "black", // change value color
      "-webkit-text-fill-color": "black", // for webkit browsers
    },
  });

  const StyledTextarea = styled(TextareaAutosize)`
    color: black;
    width: 50vw;
    min-height: 10em; /* Adjust this value to set the minimum height */
    border: 1px solid #ccc;
    padding: 8px;
    resize: vertical;
  `;

  const params = useParams();
  const id = params.id;

  const navigate = useNavigate();

  const submithandler = async () => {
    const payload = {
      case_id: id,
      judgement_title: document.getElementById("title").value,
      judgement: document.getElementById("body").value,
    };

    const url = "http://127.0.0.1:8000/court/judgement";
    console.log(url);
    const token = localStorage.getItem("court_token");
    const config = {
      headers: { token: token },
      withCredentials: true,
    };

    const data_1 = await axios
      .post(url, payload, config)
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          alert("Judgement Added");
          navigate("/court/viewjudgement/" + id);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <NavBar_Court />
      <div style={{ color: "black" }}>
        <div style={{ height: "100px" }}></div>
        <StyledTextFieldLong
          label="Judgement Title"
          variant="standard"
          style={{ color: "black" }}
          id="title"
        />
        <div style={{ height: "30px" }}></div>
        <StyledTextarea placeholder="Your Placeholder" id="body" />
        <div style={{ height: "30px" }}></div>
        <Button onClick={submithandler}>Add</Button>
      </div>
    </div>
  );
}
