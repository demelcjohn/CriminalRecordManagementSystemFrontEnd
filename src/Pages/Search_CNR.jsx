import React, { useState } from "react";

import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import Case from "../Components/Case";
import axios from "axios";
import NavBar from "../Components/NavBar_Police/NavBar";
import NavBar_Police from "../Components/NavBar_Police/NavBar";

export default function Search_CNR() {
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
  const [casefeached, setcasefeached] = useState();
  const [cnr_number, setcnr_number] = useState();

  const fetchdata = async () => {
    const url = process.env.REACT_APP_API_URL + "/api/police/search";
    const body = { cnr_number: document.getElementById("search").value };
    console.log(body);
    await axios
      .post(url, body)
      .then((responce) => {
        setcasefeached(responce.data);
        if (responce.status == 204) {
          console.log("Not Found");
          setcasefeached(null);
          alert("Enter a valid CNR");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <NavBar_Police/>
      <div className="Seach_Outer_Div">
        <StyledTextFieldLong
          label="Search By CNR Number"
          variant="standard"
          style={{ color: "black" }}
          id="search"
        />
        <button onClick={fetchdata}>Search</button>

        {casefeached != null && <Case data={casefeached} />}
      </div>
    </div>
  );
}
