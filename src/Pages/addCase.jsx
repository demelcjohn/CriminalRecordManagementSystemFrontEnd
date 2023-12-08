import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import "./addCase.css";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import "./profile_page.css";
import axios from "axios";
const ethers = require("ethers");

export default function AddCase() {
  const [walletAddress, setWalletAddres] = useState("");
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

  const contractAddress = "0xe22AEE4392adEF73020DE81Cc15e117B20DC12c9";
  const contractABI = [
    {
      inputs: [
        {
          internalType: "string",
          name: "_filing_no",
          type: "string",
        },
        {
          internalType: "string",
          name: "_filing_date",
          type: "string",
        },
        {
          internalType: "string",
          name: "_registration_no",
          type: "string",
        },
        {
          internalType: "string",
          name: "_registration_date",
          type: "string",
        },
        {
          internalType: "string",
          name: "_cnr_no",
          type: "string",
        },
        {
          internalType: "string",
          name: "_under_act",
          type: "string",
        },
        {
          internalType: "string",
          name: "_under_sections",
          type: "string",
        },
      ],
      name: "createCase",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "contactAddr",
          type: "address",
        },
        {
          internalType: "string",
          name: "_filing_no",
          type: "string",
        },
        {
          internalType: "string",
          name: "_filing_date",
          type: "string",
        },
        {
          internalType: "string",
          name: "_registration_no",
          type: "string",
        },
        {
          internalType: "string",
          name: "_registration_date",
          type: "string",
        },
        {
          internalType: "string",
          name: "_cnr_no",
          type: "string",
        },
        {
          internalType: "string",
          name: "_under_act",
          type: "string",
        },
        {
          internalType: "string",
          name: "_under_sections",
          type: "string",
        },
      ],
      name: "updateCase",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "arren",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "caseMapping",
      outputs: [
        {
          internalType: "contract CaseRecords",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "cases",
      outputs: [
        {
          internalType: "contract CaseRecords",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "contactAddr",
          type: "address",
        },
      ],
      name: "viewCaseNo",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

  async function requestAccount() {
    console.log("Requesting....");
    if (window.ethereum) {
      console.log("meta present");
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts);
        setWalletAddres(accounts[0]);
      } catch (error) {
        console.log("cant connect");
      }
    } else {
      console.log("meta absent");
    }
  }

  async function connectWallet(
    f_number,
    f_date,
    reg_number,
    reg_date,
    cnr_number,
    acts,
    sections
  ) {
    let signer = null;
    let provider;
    if (window.ethereum == null) {
      console.log("MetaMask not installed; using read-only defaults");
      provider = ethers.getDefaultProvider();
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);
      await requestAccount();
      signer = await provider.getSigner();
      const caseContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      const num = await caseContract.createCase(
        f_number,
        f_date,
        reg_number,
        reg_date,
        cnr_number,
        acts,
        sections
      );
    }
    // if (typeof window.ethereum != 'undefined') {
    //   await requestAccount();
    //   const provoder = new ethers.provoder.Web3Provider(window.ethereum);
    // }
  }

  const submithandler = () => {
    const responce = {
      case_type: document.getElementById("case_type").value,
      filing_number: document.getElementById("filing_number").value,
      filing_date: document.getElementById("filing_date").value,
      reg_number: document.getElementById("reg_number").value,
      reg_date: document.getElementById("reg_date").value,
      cnr_number: document.getElementById("cnr_number").value,
      acts: document.getElementById("acts").value,
      sections: document.getElementById("sections").value,
      police_station: document.getElementById("police_station").value,
      fir_number: document.getElementById("fir_number").value,
      year: document.getElementById("year").value,
      petitioner: document.getElementById("petitioner").value,
      respondent: document.getElementById("respondent").value,
    };
    console.log(responce);

    const endpoint =  process.env.REACT_APP_API_URL + "/api/police/case";

    axios
      .post(endpoint, responce)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    //enter the code here for integration with back end

    connectWallet(
      responce.filing_number,
      responce.filing_date,
      responce.filing_number,
      responce.filing_date,
      responce.cnr_number,
      responce.acts,
      responce.sections
    );

    console.log("hello");
  };

  return (
    <div className=" addCase_div">
      <NavBar></NavBar>
      <div className="addCase_Outerdiv">
        <div className="profile_page_outerdiv">
          <div>
            <table className="profile_page_table">
              <tbody>
                <tr>
                  <th colSpan={2} className="addCase_Colheading">
                    <h2>Case Details</h2>
                  </th>
                </tr>
                <tr>
                  <td colSpan={2} className=" profile_page_table_col">
                    <StyledTextFieldLong
                      label="Case Type"
                      variant="standard"
                      id="case_type"
                      style={{ color: "black" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td className=" profile_page_table_col">
                    <StyledTextFieldShort
                      label="Filing Number"
                      variant="standard"
                      style={{ color: "black" }}
                      id="filing_number"
                    />
                  </td>
                  <td className=" profile_page_table_col">
                    <StyledTextFieldShort
                      label="Filing Date"
                      variant="standard"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      style={{ color: "black" }}
                      id="filing_date"
                    />
                  </td>
                </tr>
                <tr>
                  <td className=" profile_page_table_col">
                    <StyledTextFieldShort
                      label="Registration Number"
                      variant="standard"
                      style={{ color: "black" }}
                      id="reg_number"
                    />
                  </td>
                  <td className=" profile_page_table_col">
                    <StyledTextFieldShort
                      label="Registration Date"
                      variant="standard"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      style={{ color: "black" }}
                      id="reg_date"
                    />
                  </td>
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
                  <td colSpan={2}></td>
                </tr>
                <tr>
                  <th colSpan={2} className="addCase_Colheading">
                    <h2>Acts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
                  </th>
                </tr>
                <tr>
                  <td className=" profile_page_table_col">
                    <StyledTextFieldShort
                      label="Under Acts"
                      variant="standard"
                      style={{ color: "black" }}
                      id="acts"
                    />
                  </td>
                  <td className=" profile_page_table_col">
                    <StyledTextFieldShort
                      label="Under Section's"
                      variant="standard"
                      style={{ color: "black" }}
                      id="sections"
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}></td>
                </tr>
                <tr>
                  <th colSpan={2} className="addCase_Colheading">
                    <h2>FIR Details</h2>
                  </th>
                </tr>
                <tr>
                  <td className="profile_page_table_col" colSpan={2}>
                    <StyledTextFieldLong
                      label="Police Station"
                      variant="standard"
                      style={{ color: "black" }}
                      id="police_station"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="profile_page_table_col" colSpan={2}>
                    <StyledTextFieldLong
                      label="FIR Nunber"
                      variant="standard"
                      style={{ color: "black" }}
                      id="fir_number"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="profile_page_table_col" colSpan={2}>
                    <StyledTextFieldLong
                      label="Year"
                      variant="standard"
                      style={{ color: "black" }}
                      id="year"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="profile_page_table_col" colSpan={2}>
                    <StyledTextFieldLong
                      label="Petitioner And Advocate"
                      variant="standard"
                      style={{ color: "black" }}
                      id="petitioner"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="profile_page_table_col" colSpan={2}>
                    <StyledTextFieldLong
                      label="Respondent and Advocate"
                      variant="standard"
                      style={{ color: "black" }}
                      id="respondent"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="profile_page_table_col"></td>
                  <td className="profile_page_table_col">
                    <button
                      className=" addCase_Buttion"
                      onClick={submithandler}
                    >
                      Submit
                    </button>
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
