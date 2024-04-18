
import React, { useEffect, useState } from "react";
import NavBar_SuperUser from "../../Components/NavBar_SuperUser/NavBar";
import UserCard from "../../Components/admin/UserCard";
import "./all_citizens.css";
import { CircularProgress } from "@mui/material";
import axios from "axios";

export default function Allcitizen() {
  const [isloading, setisloading] = useState(false);
  const [citizens, setcitizens] = useState([]);

  const datafech = async () => {
    setisloading(true);
    const url = "http://127.0.0.1:8000/admin/police";
    const token = localStorage.getItem("token"); // replace 'token' with the key you used to store the token
    const config = {
      headers: { token: token },
      withCredentials: true,
    };

    axios
      .get(url, config)
      .then((responce) => {
        setcitizens(responce.data);
        setisloading(false);
      })
      .catch((error) => {
        console.log(error.responce.data);
        setisloading(false);
      });
  };

  useEffect(() => {
    datafech();
  }, []);

  if (isloading) {
    return (
      <div className="all_citizens_outer_div_loading">
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className="all_citizens_outer_div">
      <NavBar_SuperUser />
      <div className="all_citizens_inner_div">
        {citizens.map((item) => {
          return <UserCard data={item}></UserCard>;
        })}
      </div>
    </div>
  );
}
