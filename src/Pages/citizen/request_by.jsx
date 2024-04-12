import React, { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Request_by_card from "../../Components/request_components/request_by_card";
import NavBar_Citizen from "../../Components/NavBar_Citizen/NavBar";
import './request_by_me.css';

export default function Request_By() {
  const [requests, setrequests] = useState([]);
  const [isloading, setisloading] = useState(false);
  const data_fetch = async () => {
    setisloading(true);
    const url = "http://127.0.0.1:8000/citizen/request/by";
    const token = localStorage.getItem("token"); // replace 'token' with the key you used to store the token
    const config = {
      headers: { token: token },
      withCredentials: true,
    };

    const data = await axios
      .get(url, config)
      .then((response) => {
        setrequests(response.data);
        console.log(response.data);
        setisloading(false);
      })
      .catch((error) => {
        console.log(error.response.data);
        setisloading(false);
      });
  };

  useEffect(() => {
    data_fetch();
    console.log(requests);
  }, []);

  if (isloading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <NavBar_Citizen/>
      <div className="request_to_outerdiv">
      {requests.map((item) => {
        return <Request_by_card data={item}></Request_by_card>;
      })}
      </div>
    </div>
  );
}
