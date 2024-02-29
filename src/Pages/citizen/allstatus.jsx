import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import "../addCase.css";
import { TextField, Box } from "@mui/material";
import { styled } from "@mui/system";
import "../profile_page.css";

export default function Status_all() {
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
          {/* <Box
            sx={{ width: "80%", height: "90%", bgcolor: "yellow" }}
            fontSize={"100%"}
            fontWeight={"bold"}
            fontFamily={"sans-serif"}
            overflow={"scroll"}
          >
            {caseIds &&
              caseIds.map((cases) => (
                <CaseBox key={cases.case_id} id={cases.case_id} />
              ))}
            Hello
          </Box> */}
        </div>
      </div>
    </div>
  );
}
