import NavBar from "../Components/NavBar/NavBar";
import "./profile_page.css";
import dp from "../img/dp.png";
import { TextField } from "@mui/material";
import { styled } from "@mui/system"; // Change this line
import React, { useState } from "react";

export default function Profile_page() {
  const [user, setuser] = useState({
    name: "jesvin",
    house_name: "house name",
    street: "street1",
    city: "city 1",
    state: "state 1",
    country: "country 1",
    pin: "111 111",
    dob: "21-11-2001",
    gender: "Male",
    uid: "1111 1111 1111 1111",
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

  return (
    <div>
      <NavBar></NavBar>
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
                  value={user.uid}
                  focused
                  style={{ color: "black" }}
                  disabled
                />
              </td>
            </tr>
            <tr>
              <td className="profile_page_table_col">
                <StyledTextFieldShort
                  label="Authority"
                  variant="standard"
                  value={"QWERty Police Station"}
                  focused
                  style={{ color: "black" }}
                  disabled
                />
              </td>
              <td className="profile_page_table_col">
                <StyledTextFieldShort
                  label="Designation"
                  variant="standard"
                  value={"Sub Inspector"}
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
