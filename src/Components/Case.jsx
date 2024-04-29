import React from "react";

import NavBar from "./NavBar_Police/NavBar";
import "../Pages/addCase.css";

import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import "../Pages/profile_page.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Case(props) {
  const navigate = useNavigate();

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

  const first = props.data;
  console.log(first);

  const view_more = () => {
    navigate("/police/viewcase/" + first._id);
  };

  return (
    <div>
      <div>
        <div className="profile_page_outerdiv">
          <div>
            <table className="profile_page_table">
              <tbody>
                <tr>
                  <td colSpan={2} className=" profile_page_table_col">
                    <StyledTextFieldLong
                      label="Case Type"
                      variant="standard"
                      value={first.case_type}
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
                      value={first.reg_number}
                      focused
                      style={{ color: "black" }}
                      disabled
                    />
                  </td>
                  <td className="profile_page_table_col">
                    <StyledTextFieldShort
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
                  <td></td>
                  <td>
                    <button onClick={view_more}>View More</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
