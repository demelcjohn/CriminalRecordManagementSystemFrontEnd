import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import "../Pages/login.css";
import axios from "axios";

export default function SuperUserLogin() {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();

  const usernameHandler = (event) => {
    setusername(event.target.value);
  };

  const passwordHandler = (event) => {
    setpassword(event.target.value);
  };

  const submitHandler = (event) => {
    const data = {
      username: username,
      password: password,
    };
    console.log(data);

   
    
  };

  return (
    <div className="background_login">
    <div className="outerdiv_login">
      <h1>Criminal Record Management System</h1>
      <div className="loginForm">
        <TextField
          id="UID"
          label="UID"
          variant="outlined"
          onChange={usernameHandler}
          className="textBox"
          sx={{
            input: {
              color: "white",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
          InputLabelProps={{
            style: {
              color: "white",
            },
          }}
        />
        <div className="space"></div>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          variant="outlined"
          className="textBox"
          autoComplete="current-password"
          onChange={passwordHandler}
          sx={{
            input: {
              color: "white",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
          InputLabelProps={{
            style: {
              color: "white",
            },
          }}
        />

        <Button
          variant="outlined"
          className="submitbuttion"
          onClick={submitHandler}
          sx={{ m: 1, color: "white", borderColor: "white" }}
        >
          login
        </Button>
      </div>
    </div>
    </div>
  );
}
