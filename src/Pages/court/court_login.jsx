import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CourtLogin() {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();

  const navigate = useNavigate();

  const usernameHandler = (event) => {
    setusername(event.target.value);
  };

  const passwordHandler = (event) => {
    setpassword(event.target.value);
  };
  const submitHandler = async (event) => {
    const data = {
      UID: username,
      password: password,
    };
    console.log(data);
    const url_old = "/citizen/login";
    console.log(url_old);
    const url = "http://localhost:8000/court/login";

    console.log(url);
    await axios
      .post(url, data, { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.status);
          console.log(response.data);
          localStorage.setItem("court_token", response.data.token);
          navigate("/court/home");
        } else if (response.status === 201) {
          alert("Please Check Username or Password");
          console.log("error");
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          console.log("Wrong UID or Password");
        } else {
          console.error(error);
        }
      });
  };

  return (
    <div className="background_login">
      <div className="outerdiv_login">
        <h1>Criminal Record Management System</h1>
        <div className="loginForm">
          <TextField
            id="username"
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
