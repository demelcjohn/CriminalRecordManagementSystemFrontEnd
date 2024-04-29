import React, { useEffect, useState } from "react";

import axios from "axios";

import Court_Case_Card from "../../Components/court/Court_Case_Card";
import NavBar_Court from "../../Components/NavBar_Court/NavBar";

export default function AllCases() {
  const [cases, setcases] = useState([]);
  const fechdata = async () => {
    const url = "http://127.0.0.1:8000/court/cases";
    const token = localStorage.getItem("court_token");
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
      <NavBar_Court />

      <div style={{ overflow: "scroll", height: "100vh" }}>
        {cases.map((item, index) => {
          console.log("test");
          return (
            <div
              style={{ paddingLeft: "250px", margin: "30px", color: "black" }}
            >
              <Court_Case_Card data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
