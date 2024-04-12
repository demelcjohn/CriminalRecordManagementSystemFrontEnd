import "../profile_page.css";
import dp from "../../img/dp.png";
import { TextField } from "@mui/material";
import { styled } from "@mui/system"; // Change this line
import React, { useEffect, useState } from "react";
import NavBar_Citizen from "../../Components/NavBar_Citizen/NavBar";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

export default function Profile_citizen() {
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

  const [profile, setprofile] = useState();

  const [isloading, setisloading] = useState(false);

  const data_fetch = async () => {
    setisloading(true);
    const url = "http://127.0.0.1:8000/citizen/profile";
    const token = localStorage.getItem("token"); // replace 'token' with the key you used to store the token
    const config = {
      headers: { token: token },
      withCredentials: true,
    };

    const data = await axios
      .get(url, config)
      .then((response) => {
        setuser(response.data);
        setprofile(response.data);
        // console.log(response.data);
        console.log(profile);
        setisloading(false);
      })
      .catch((error) => {
        console.log(error.response.data);
        setisloading(false);
      });
  };

  useEffect(() => {
    data_fetch();
  }, []);

  if (isloading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <NavBar_Citizen />
      <div className="profile_page_outerdiv">
        <div className="profile_page_innerdiv">
          <table>
            <tbody>
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
                <td colSpan={2} className="profile_page_table_col">
                  <StyledTextFieldLong
                    label="Phone Number"
                    variant="standard"
                    value={user.phNo}
                    focused
                    style={{ color: "black" }}
                    disabled
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="profile_page_table_col">
                  <StyledTextFieldLong
                    label="Email"
                    variant="standard"
                    value={user.email}
                    focused
                    style={{ color: "black" }}
                    disabled
                  />
                </td>
              </tr>
              <tr>
                <td className="profile_page_table_col">
                  <StyledTextFieldShort
                    label="Gender"
                    variant="standard"
                    value={user.gender}
                    focused
                    style={{ color: "black" }}
                    disabled
                  />
                </td>
                <td className="profile_page_table_col">
                  <StyledTextFieldShort
                    label="DOB"
                    variant="standard"
                    value={user.dob}
                    focused
                    style={{ color: "black" }}
                    disabled
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="profile_page_table_col">
                  <StyledTextFieldLong
                    label="House Name"
                    variant="standard"
                    value={user.housename}
                    focused
                    style={{ color: "black" }}
                    disabled
                  />
                </td>
              </tr>
              <tr>
                <td className="profile_page_table_col">
                  <StyledTextFieldShort
                    label="Street"
                    variant="standard"
                    value={user.street}
                    focused
                    style={{ color: "black" }}
                    disabled
                  />
                </td>
                <td className="profile_page_table_col">
                  <StyledTextFieldShort
                    label="City"
                    variant="standard"
                    value={user.city}
                    focused
                    style={{ color: "black" }}
                    disabled
                  />
                </td>
              </tr>
              <tr>
                <td className="profile_page_table_col">
                  <StyledTextFieldShort
                    label="State"
                    variant="standard"
                    value={user.state}
                    focused
                    style={{ color: "black" }}
                    disabled
                  />
                </td>
                <td className="profile_page_table_col">
                  <StyledTextFieldShort
                    label="PIN"
                    variant="standard"
                    value={user.pin}
                    focused
                    style={{ color: "black" }}
                    disabled
                  />
                </td>
              </tr>
              <tr>
                <td className="profile_page_table_col">
                  <StyledTextFieldShort
                    label="Country"
                    variant="standard"
                    value={user.gender}
                    focused
                    style={{ color: "black" }}
                    disabled
                  />
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
