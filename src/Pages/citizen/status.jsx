import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar_Police/NavBar";
import "../addCase.css";
import { TextField, Box } from "@mui/material";
import { styled } from "@mui/system";
import "../profile_page.css";
import "./status.css";
import CaseStatusBox from "../../Components/caseStatusBox";
import NavBar_Citizen from "../../Components/NavBar_Citizen/NavBar";

export default function Status_citizen() {
  const caseIds = [
    "123456",
    "23456789",
    "2345678",
    "34567",
    "4567878",
    "456789",
  ];
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
      <NavBar_Citizen />
      <div className="addCase_Outerdiv">
        <div className="container-box">
          <Box
            sx={{ width: "100%", height: "100%" }}
            fontSize={"100%"}
            fontWeight={"bold"}
            fontFamily={"sans-serif"}
          >
            {caseIds && caseIds.map((cases) => <CaseStatusBox id={cases} />)}
          </Box>
        </div>
      </div>
    </div>
  );
}
