import React, { useEffect, useState } from "react";
import "./public_profile.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import Case_card from "../../Components/public_profile/case_card";

export default function Public_profile() {
  const params = useParams();

  const id = params.id;
  const [public_profile, setpublic_profile] = useState([]);
  const [isloading, setisloading] = useState(false);

  const data_fetch = async () => {
    setisloading(true);
    const url = "http://127.0.0.1:8000/citizen/profile/" + id;
    const token = localStorage.getItem("token"); // replace 'token' with the key you used to store the token
    const config = {
      headers: { token: token },
      withCredentials: true,
    };

    const data = await axios
      .get(url, config)
      .then((response) => {
        console.log(response.data);
        setpublic_profile(response.data)
        setisloading(false);
      })
      .catch((error) => {
        console.log(error.response.data);
        setisloading(false);
      });
  };

  useEffect(() => {
    data_fetch();
  }, []);

  if (isloading) {
    return (
      <div className="public_profile_outerdiv_loading">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="public_profile_outerdiv">
      <h1>Public Profile</h1>
      <div>
        {public_profile.map((item) => {
          return(<Case_card data = {item}/>)
        //    return <h1>hello</h1>;
        })}
      </div>
    </div>
  );
}
