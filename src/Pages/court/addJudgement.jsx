import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import "../addCase.css";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import "../profile_page.css";

export default function AddJudgement() {
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

  //handleres

  return (
    <div className=" addCase_div">
      <NavBar></NavBar>
      <div className="addCase_Outerdiv">
        <div className="profile_page_outerdiv">
          <table className="profile_page_table">
            <tbody>
              <tr>
                <th colSpan={2} className="addCase_Colheading">
                  <h2>Add Judgement</h2>
                </th>
              </tr>

              <tr>
                <td colSpan={2} className=" profile_page_table_col">
                  <StyledTextFieldLong
                    label="CNR Number"
                    variant="standard"
                    style={{ color: "black" }}
                    id="cnr_number"
                  />
                </td>
              </tr>

              <tr>
                <td className="profile_page_table_col">
                  <button className=" addCase_Buttion">Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
