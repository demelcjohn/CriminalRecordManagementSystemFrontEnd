import React, { useState } from "react";
import "./request.css";
import { Button, CircularProgress } from "@mui/material";
import { green } from "@mui/material/colors";
import axios from "axios";

export default function Requests_to_card(props) {
  
  const [data,setdata] = useState(props.data);
  const [isloading,setisloading] = useState(false);

  const aprove_request = async()=>{
    setisloading(true);
    const url = "http://127.0.0.1:8000/citizen/request/"+data._id;
    const token = localStorage.getItem("token"); // replace 'token' with the key you used to store the token
    const config = {
      headers: { token: token },
      withCredentials: true,
    };


    const data = await axios
      .put(url, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });


    const data1 = await axios.get(url,config)
    .then((responce)=>{
      setdata(responce.data);
      setisloading(false)
    })
    .catch((error) => {
      console.log(error.response.data);
      setisloading(false);
    });
      

  }

  if(isloading)
  {
    return(
      <div className="request_card_outerdiv">
        <CircularProgress/>
      </div>
    )
  }
  return (
    <div className="request_card_outerdiv">
      <div className="request_card_innerdiv_1">
        <p>Your Public Profile is requested by</p>
        <h3>UID : {data.requested_by.UID}</h3>
        <p>Name : {data.requested_by.name}</p>
      </div>
      <div>
        {data.is_approved ? (
          <h3 style={{ color: green }}>Approved</h3>
        ) : (
          <Button onClick={aprove_request}>Approve</Button>
        )}
      </div>
    </div>
  );
}
