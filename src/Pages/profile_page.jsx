import NavBar from "../Components/NavBar_Police/NavBar";
import "./profile_page.css";
import dp from "../img/dp.png";
import { CircularProgress, TextField } from "@mui/material";
import { styled } from "@mui/system"; // Change this line
import React, { useEffect, useState } from "react";
import NavBar_Police from "../Components/NavBar_Police/NavBar";
import axios from "axios";

export default function Profile_page() {
  const [isloading, setisloading] = useState(false);
  const [user, setuser] = useState({
    UID: "",
    name: "",
    password: "",
    housename: "",
    street: "",
    city: "",
    pin: "",
    state: "",
    country: "",
    phNo: "",
    email: "",
    police_station: "",
    rank: "",
  });

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

  const StyledTextFieldShort = styled(TextField)({
    color: "black",
    width: "42.5vw",
    "@media (min-width:600px)": {
      width: "20vw",
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

  const fechdata = async () => {
    setisloading(true);
    console.log("hello");
    const url = "http://127.0.0.1:8000/police/login";
    const token = localStorage.getItem("police_token");
    const config = {
      headers: { token: token },
      withCredentials: true,
    };

    const data = await axios
      .get(url, config)
      .then((res) => {
        setuser(res.data);
        console.log(user);
        setisloading(false);
      })
      .catch((e) => {
        console.log(e);
        setisloading(false);
      });
  };

  useEffect(() => {
    fechdata();
  }, []);

  if (isloading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <NavBar_Police></NavBar_Police>
      <div className="profile_page_outerdiv">
        <div className="profile_page_innerdiv">
          <table>
            <tr>
              <td colSpan={2} className="profile_page_table_col_img">
                <img src={dp} />
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="profile_page_table_col">
                <StyledTextFieldLong
                  label="Name"
                  variant="standard"
                  value={user.name}
                  focused
                  style={{ color: "black" }}
                  disabled
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="profile_page_table_col">
                <StyledTextFieldLong
                  label="UID"
                  variant="standard"
                  value={user.UID}
                  focused
                  style={{ color: "black" }}
                  disabled
                />
              </td>
            </tr>
            <tr>
              <td className="profile_page_table_col">
                <StyledTextFieldShort
                  label="Police Station"
                  variant="standard"
                  value={user.police_station}
                  focused
                  style={{ color: "black" }}
                  disabled
                />
              </td>
              <td className="profile_page_table_col">
                <StyledTextFieldShort
                  label="Designation"
                  variant="standard"
                  value={user.rank}
                  focused
                  style={{ color: "black" }}
                  disabled
                />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
