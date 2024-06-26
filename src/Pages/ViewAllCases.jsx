import React, { useEffect, useState } from "react";
import Case from "../Components/Case";
import axios from "axios";
import NavBar from "../Components/NavBar_Police/NavBar";
import NavBar_Police from "../Components/NavBar_Police/NavBar";

export default function ViewAllCases() {
  const [cases, setcases] = useState([]);
  const fechdata = async () => {
    const url = "http://127.0.0.1:8000/police/cases";
    const token = localStorage.getItem("police_token");
    const config = {
      headers: { token: token },
      withCredentials: true,
    };
    await axios
      .get(url, config)
      .then((response) => {
        console.log(response.data.data);
        setcases(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    fechdata();
    console.log(cases);
  }, []);

  return (
    <div>
      <NavBar_Police />
      <div style={{ overflow: "scroll", height: "100vh", width: "100vw" }}>
        {cases.map((item, index) => {
          console.log("test");
          return <Case key={index} data={item} />;
        })}
      </div>
    </div>
  );
}
