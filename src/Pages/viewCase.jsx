import React, { useState } from "react";
import NavBar from "../Components/NavBar_Police/NavBar";
import "./addCase.css";
import { CircularProgress, TextField } from "@mui/material";
import { styled } from "@mui/system";
import "./profile_page.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar_Police from "../Components/NavBar_Police/NavBar";
import CitizenInvolvedCard from "../Components/Case/CitizenInvolvedCard";

export default function ViewCase() {
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

  const [first, setfirst] = useState({
    case_type: "",
    fillig_number: "",
    filling_date: "",
    registration_number: "",
    registration_date: "",
    cnr_number: "",
    acts: "",
    sections: "",
    police_station: "",
    fir_number: "",
    year: "",
    usersInvolved: [],
    usersResponded: [],
  });
  const { id } = useParams();
  const [isloading, setisloading] = useState(false);

  const datafech = () => {
    setisloading(true);
    const url = "http://127.0.0.1:8000/police/cases/" + id;
    const token = localStorage.getItem("police_token"); // replace 'token' with the key you used to store the token
    const config = {
      headers: { token: token },
      withCredentials: true,
    };

    axios
      .get(url, config)
      .then((res) => {
        setfirst(res.data);
        console.log(res.data);
        setisloading(false);
      })
      .catch((e) => {
        console.log(e);
        setisloading(false);
      });
  };

  useEffect(() => {
    datafech();
  }, []);

  if (isloading) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <NavBar_Police />
      <div className="addCase_Outerdiv">
        <div className="profile_page_outerdiv">
          <div>
            Hello
            <table className="profile_page_table">
              <tbody>
                <tr>
                  <th colSpan={2}>
                    <h2>Case Details</h2>
                  </th>
                </tr>
                <tr>
                  <td colSpan={2} className=" profile_page_table_col">
                    <StyledTextFieldLong
                      label="Case Type"
                      variant="standard"
                      value={first ? first.case_type : ""}
                      focused
                      style={{ color: "black" }}
                      disabled
                    />
                  </td>
                </tr>
                <tr>
                  <td className=" profile_page_table_col">
                    <StyledTextFieldShort
                      label="Filing Number"
                      variant="standard"
                      value={first ? first.fillig_number : ""}
                      focused
                      style={{ color: "black" }}
                      disabled
                    />
                  </td>
                  <td className=" profile_page_table_col">
                    <StyledTextFieldShort
                      label="Filing Date"
                      variant="standard"
                      value={first.filling_date}
                      focused
                      style={{ color: "black" }}
                      disabled
                    />
                  </td>
                </tr>
                <tr>
                  <td className=" profile_page_table_col">
                    <StyledTextFieldShort
                      label="Registration Number"
                      variant="standard"
                      value={first.registration_number}
                      focused
                      style={{ color: "black" }}
                      disabled
                    />
                  </td>
                  <td className=" profile_page_table_col">
                    <StyledTextFieldShort
                      label="Registration Date"
                      variant="standard"
                      value={first.registration_date}
                      focused
                      style={{ color: "black" }}
                      disabled
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} className=" profile_page_table_col">
                    <StyledTextFieldLong
                      label="CNR Number"
                      variant="standard"
                      value={first.cnr_number}
                      focused
                      style={{ color: "black" }}
                      disabled
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}></td>
                </tr>
                <tr>
                  <th colSpan={2}>
                    <h2>Acts</h2>
                  </th>
                </tr>
                <tr>
                  <td className=" profile_page_table_col">
                    <StyledTextFieldShort
                      label="Under Acts"
                      variant="standard"
                      value={first.acts}
                      focused
                      style={{ color: "black" }}
                      disabled
                    />
                  </td>
                  <td className=" profile_page_table_col">
                    <StyledTextFieldShort
                      label="Under Section's"
                      variant="standard"
                      value={first.sections}
                      focused
                      style={{ color: "black" }}
                      disabled
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}></td>
                </tr>
                <tr>
                  <th colSpan={2}>
                    <h2>FIR Details</h2>
                  </th>
                </tr>
                <tr>
                  <td className="profile_page_table_col" colSpan={2}>
                    <StyledTextFieldLong
                      label="Police Station"
                      variant="standard"
                      value={first.police_station}
                      focused
                      style={{ color: "black" }}
                      disabled
                    />
                  </td>
                </tr>
                <tr>
                  <td className="profile_page_table_col" colSpan={2}>
                    <StyledTextFieldLong
                      label="FIR Nunber"
                      variant="standard"
                      value={first.fir_number}
                      focused
                      style={{ color: "black" }}
                      disabled
                    />
                  </td>
                </tr>
                <tr>
                  <td className="profile_page_table_col" colSpan={2}>
                    <StyledTextFieldLong
                      label="Year"
                      variant="standard"
                      value={first.year}
                      focused
                      style={{ color: "black" }}
                      disabled
                    />
                  </td>
                </tr>
                <tr>
                  <th colSpan={2}>
                    <h2>Useres Involved</h2>
                  </th>
                </tr>
                <tr>
                  <td className="profile_page_table_col" colSpan={2}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      {first.usersInvolved.map((item) => {
                        return <CitizenInvolvedCard data={item} />;
                      })}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="addCase_space"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
