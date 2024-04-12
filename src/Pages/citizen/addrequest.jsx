import React, { useState } from "react";
import NavBar_Citizen from "../../Components/NavBar_Citizen/NavBar";
import { Button, CircularProgress, TextField } from "@mui/material";
import { styled } from "@mui/system";
import "./addrequest.css";
import Citizen_card from "../../Components/public_profile/citizen_card";
import axios from "axios";

export default function Addrequest() {
  const [user, setuser] = useState([]);
  // cosnt [ UID,setUID] = useState();
  const [isloading, setisloading] = useState(false);

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

  const citizen_search = async () => {
    setisloading(true);
    const uid = document.getElementById("UID").value;
    const url = "http://127.0.0.1:8000/citizen/" + uid;
    const token = localStorage.getItem("token"); // replace 'token' with the key you used to store the token
    const config = {
      headers: { token: token },
      withCredentials: true,
    };

    const data = await axios
      .get(url, config)
      .then((response) => {
        setuser(response.data);
        console.log(response.data);
        setisloading(false);
      })
      .catch((error) => {
        console.log(error.response.data);
        setisloading(false);
      });
  };

  return (
    <div>
      <NavBar_Citizen />
      <div className="addrequest_outer_div">
        <div className="addrequest_inner_div">
          <StyledTextFieldLong
            label="UID"
            variant="standard"
            style={{ color: "black" }}
            id="UID"
          />
          <Button onClick={citizen_search}>Search</Button>
        </div>
        <div>
          {isloading ? (
            <CircularProgress />
          ) : (
            user.map((item) => <Citizen_card key={item.id} data={item} />)
          )}
        </div>
      </div>
    </div>
  );
}
