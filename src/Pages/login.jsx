import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import "../Pages/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
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
      username: username,
      password: password,
    };
    console.log(data);
    // const url = process.env.REACT_APP_API_URL + "/api/superuser/login";
    // const url = "http://127.0.0.1:8000/api/superuser/login";
    // await axios
    //   .post(url, data)
    //   .then((responce) => {
    //     if (responce.status(400)) {
    //       alert("Wromg UID or Password");
    //     } else {
    //       localStorage.setItem("user", responce.user);
    //       navigate("/profile");
    //     }
    //     navigate("/profile");
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    if(username=="12345" && password == "password")
    {
      navigate("/profile");
    }
    else
    {
      alert("Wromg UID or Password");
    }
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
