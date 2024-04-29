import { Button, TextField } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";

export default function Select_Citizen(props) {
  const [UIDs, setUIDs] = useState([]);
  const [users, setusers] = useState([]);

  useEffect(() => {
    ctx.setuseres_involved([]);
  }, []);

  const ctx = useContext(Context);

  const adddata = (item) => {
    setUIDs((prev) => [...prev, item.UID]);
    ctx.setuseres_involved((pre) => [...pre, item._id]);
  };

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

  const respondent_search = async () => {
    const uid = document.getElementById("respondent_search").value;
    const url = "http://127.0.0.1:8000/police/citizen/" + uid;
    const token = localStorage.getItem("police_token");
    const config = {
      headers: { token: token },
      withCredentials: true,
    };
    const payload = {
      UID: parseInt(uid),
    };

    await axios
      .post(url, payload, config)
      .then((res) => {
        setusers(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h3>{props.text} : </h3>
        {UIDs.map((item) => {
          return <p>{item},</p>;
        })}
      </div>

      <div>
        <StyledTextFieldShort
          label="Search Using UID"
          variant="standard"
          style={{ color: "black" }}
          id="respondent_search"
        />
        <Button onClick={respondent_search}>Search</Button>
      </div>
      <div>
        {users.map((item) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <p>{item.UID}</p>
              <Button
                onClick={() => {
                  adddata(item);
                }}
              >
                Add
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
