import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar_Police/NavBar";
import "../addCase.css";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import "../profile_page.css";
import NavBar_Court from "../../Components/NavBar_Court/NavBar";
import axios from "axios";
import Court_Case_Card from "../../Components/court/Court_Case_Card";

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

  const [casefeached, setcasefeached] = useState();

  const fetchdata = async () => {
    const cnr_number = document.getElementById("cnr_number").value;
    const url = "http://127.0.0.1:8000/court/cases/" + cnr_number;
    console.log(url);
    const token = localStorage.getItem("court_token");
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

  //handleres

  return (
    <div className=" addCase_div">
      <NavBar_Court />
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
                  <button className=" addCase_Buttion" onClick={fetchdata}>
                    Submit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {casefeached != null && <Court_Case_Card data={casefeached} />}
      </div>
    </div>
  );
}
