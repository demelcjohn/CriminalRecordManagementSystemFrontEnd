import React, { useState } from "react";

import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import Case from "../Components/Case";
import axios from "axios";
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

  const fetchdata = async () => {
    const cnr_number = document.getElementById("search").value;
    const url = "http://127.0.0.1:8000/police/search/" + cnr_number;
    console.log(url);
    const token = localStorage.getItem("police_token");
    const config = {
      headers: { token: token },
      withCredentials: true,
    };

    const data_1 = await axios
      .get(url, config)
      .then((response) => {
        console.log(response.data);
        setcasefeached(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <NavBar_Police />
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
