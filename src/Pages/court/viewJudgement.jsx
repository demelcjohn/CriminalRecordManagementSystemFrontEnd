import React, { useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import "../addCase.css";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import "../profile_page.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ViewJudgement() {
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

  const [first, setfirst] = useState("");
  const { id } = useParams();
  useEffect(() => {
    // add the code for feching data here

    const getdata = async () => {
      const url = process.env.REACT_APP_API_URL + "/api/police/case/" + id;

      await axios
        .get(url)
        .then((response) => {
          setfirst(response.data);
        })
        .catch((error) => {
          console.error(error);
        }, []);
    };

    // setfirst({
    //   case_type: "Case ",
    //   filing_number: "01",
    //   filing_date: "2023-12-01",
    //   reg_number: "01",
    //   reg_date: "2023-11-15",
    //   cnr_number: "TVE20-9999",
    //   acts: "IPC",
    //   sections: "12,34,55",
    //   police_station: "Trivandrum",
    //   fir_number: "01010134",
    //   year: "2023",
    //   petitioner: "stijo",
    //   respondent: "navin",
    // });
    getdata();
    console.log(id);
  });
  return (
    <div>
      <NavBar></NavBar>
      <div className="addCase_Outerdiv">
        <div className="profile_page_outerdiv">
          <div>
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
                      label="Filing Number"
                      variant="standard"
                      value={first.filing_number}
                      focused
                      style={{ color: "black" }}
                      disabled
                    />
                  </td>
                  <td className=" profile_page_table_col">
                    <StyledTextFieldShort
                      label="Filing Date"
                      variant="standard"
                      value={first.filing_date}
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
                  <td className=" profile_page_table_col">
                    <StyledTextFieldShort
                      label="Registration Date"
                      variant="standard"
                      value={first.reg_date}
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
                      label="FIR Number"
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
                  <td className="profile_page_table_col" colSpan={2}>
                    <StyledTextFieldLong
                      label="Petitioner And Advocate"
                      variant="standard"
                      value={first.petitioner}
                      focused
                      style={{ color: "black" }}
                      disabled
                    />
                  </td>
                </tr>
                <tr>
                  <td className="profile_page_table_col" colSpan={2}>
                    <StyledTextFieldLong
                      label="Respondent and Advocate"
                      variant="standard"
                      value={first.respondent}
                      focused
                      style={{ color: "black" }}
                      disabled
                    />
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
