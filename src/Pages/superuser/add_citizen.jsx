import "./profile_page.css";
import { TextField } from "@mui/material";
import { styled } from "@mui/system"; // Change this line
import React, { useState } from "react";
import NavBar_SuperUser from "../../Components/NavBar_SuperUser/NavBar";

export default function AddNewCitizen() {
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

  const submit_handler = async ()=>{
    const payload = {
      "UID":document.getElementById('UID').value,
      "name":document.getElementById('name').vale,
      "password":document.getElementById('password').value,
      "dob":document.getElementById('dob').value,
      "gender":document.getElementById('gender').value,
      "housename":document.getElementById('housename').value,
      "street":document.getElementById('street').value,
      "city":document.getElementById('city').value,
      "pin":document.getElementById('pin').value,
      "state":document.getElementById('state').value,
      "country":"India",
      "phno":document.getElementById
    }
  }

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
      <NavBar_SuperUser />
      <div className="profile_page_outerdiv">
        <div className="profile_page_innerdiv">
          <table>
            <tr>
              <td colSpan={2} className="profile_page_table_col">
                <StyledTextFieldLong
                  label="Name"
                  variant="standard"
                  style={{ color: "black" }}
                  id="name"
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="profile_page_table_col">
                <StyledTextFieldLong
                  label="UID"
                  variant="standard"
                  style={{ color: "black" }}
                  id = "uid"  
                />
              </td>
            </tr>
            
            <tr>
              <td colSpan={2} className="profile_page_table_col">
                <StyledTextFieldLong
                  label="Password"
                  variant="standard"
                  style={{ color: "black" }}
                  id="password"
                />
              </td>
            </tr>
            <tr>
              
              <td className="profile_page_table_col">
                <StyledTextFieldShort
                  label="DOB"
                  variant="standard"
                  style={{ color: "black" }}
                  id="dob"
                />
              </td>
              <td className="profile_page_table_col">
                <StyledTextFieldShort
                  label="gender"
                  variant="standard"
                  id="gender"
                  style={{ color: "black" }}  
                />
              </td>
            </tr>

            <tr>
              <td colSpan={2} className="profile_page_table_col">
                <StyledTextFieldLong
                  label="housename"
                  variant="standard"
                  style={{ color: "black" }}
                  id="housename"
                />
              </td>
            </tr>

            <tr>
              
              <td className="profile_page_table_col">
                <StyledTextFieldShort
                  label="street"
                  variant="standard"
                  style={{ color: "black" }}
                  id="street"
                />
              </td>
              <td className="profile_page_table_col">
                <StyledTextFieldShort
                  label="city"
                  variant="standard"
                  id="city"
                  style={{ color: "black" }}  
                />
              </td>
            </tr>
            <tr>
              
              <td className="profile_page_table_col">
                <StyledTextFieldShort
                  label="pin"
                  variant="standard"
                  style={{ color: "black" }}
                  id="pin"
                />
              </td>
              <td className="profile_page_table_col">
                <StyledTextFieldShort
                  label="state"
                  variant="standard"
                  id="state"
                  style={{ color: "black" }}  
                />
              </td>
            </tr>
            


            <tr>

              <td className="profile_page_table_col">
                <StyledTextFieldShort
                  label="ph No"
                  variant="standard"
                  style={{ color: "black" }}
                  id="phno"
                />
              </td>
              <td className="profile_page_table_col">
                <StyledTextFieldShort
                  label="email"
                  variant="standard"
                  id="email"
                  style={{ color: "black" }}  
                />
              </td>
            </tr>
            <tr>
                <td></td>
                <td><button >Submit</button></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
