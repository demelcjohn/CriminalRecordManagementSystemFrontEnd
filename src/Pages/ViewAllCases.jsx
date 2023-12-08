import React, { useEffect, useState } from "react";
import Case from "../Components/Case";
import axios from "axios";
import NavBar from "../Components/NavBar/NavBar";

export default function ViewAllCases() {
  const [cases, setcases] = useState([]);
  useEffect(() => {
    const fechdata = async () => {
      const url = process.env.REACT_APP_API_URL + "/api/police/case";
      await axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          setcases(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fechdata();
    console.log(cases);
  }, []);

  return (
    <div>
      <NavBar />
      <div style={{ overflow: "scroll",height:"100vh",width:"100vw" }}>
        {cases?.map((item, index) => {
          console.log("test");
          return <Case key={index} data={item} />;
        })}
      </div>
    </div>
  );
}
