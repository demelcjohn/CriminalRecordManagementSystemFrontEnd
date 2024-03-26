import React from 'react'
import { TextField } from "@mui/material";
import { styled } from "@mui/system";

export default function UserCard() {
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
  return (
    <div>
        <table>
            <tr>
                <td>
                <StyledTextFieldLong
                  label="Name"
                  variant="standard"
                  style={{ color: "black" }}
                  id="name"
                  value={"jesvin"}
                />
                </td>
            </tr>
            <tr>
                <td>
                <StyledTextFieldLong
                  label="UID"
                  variant="standard"
                  style={{ color: "black" }}
                  id="name"
                  value={"123456"}
                />
                </td>
            </tr>
        </table>
    </div>
  )
}
