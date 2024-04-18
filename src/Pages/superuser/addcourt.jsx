import "./profile_page.css";
import { Button, TextField } from "@mui/material";
import { styled } from "@mui/system"; // Change this line
import React, { useState } from "react";
import NavBar_SuperUser from "../../Components/NavBar_SuperUser/NavBar";
import axios from "axios";

export default function AddNewCourt() {
  const [isloading, setisloading] = useState(false);

  const submit_handler = async () => {
    setisloading(true);
    const url = "http://127.0.0.1:8000/admin/court";
    const token = localStorage.getItem("token"); // replace 'token' with the key you used to store the token
    const config = {
      headers: { token: token },
      withCredentials: true,
    };

    const UID = document.getElementById("uid").value;
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const housename = document.getElementById("housename").value;
    const street = document.getElementById("street").value;
    const city = document.getElementById("city").value;
    const pin = document.getElementById("pin").value;
    const state = document.getElementById("state").value;
    const country = "India";
    const phno = document.getElementById("phno").value;
    const email = document.getElementById("email").value;
    const court_name = document.getElementById("court_name").value;

    const payload = {
      UID: UID,
      name: name,
      password: password,
      housename: housename,
      street: street,
      city: city,
      pin: pin,
      state: state,
      country: country,
      phno: phno,
      email: email,
      court_name: court_name,
    };

    console.log(payload);
    const data1 = await axios
      .post(url, payload, config)
      .then((response) => {
        if (response.status === 200) {
          alert("New Court User Added");
        } else {
          alert("error occured");
        }
        setisloading(false);
      })
      .catch((error) => {
        console.log(error.response.data.error_msg);
        alert("error occured :" + error.response.data.error_msg);
        setisloading(false);
      });
  };

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
                  id="uid"
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
              <td colSpan={2} className="profile_page_table_col">
                <StyledTextFieldLong
                  label="Court Name"
                  variant="standard"
                  style={{ color: "black" }}
                  id="court_name"
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <Button onClick={submit_handler}>Submit</Button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
