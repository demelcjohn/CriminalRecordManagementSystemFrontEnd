import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar_Court from "../../Components/NavBar_Court/NavBar";

export default function ViewJudgementCase() {
  const params = useParams();
  const id = params.id;
  const [data, setdata] = useState([]);
  const [casedata, setcasedata] = useState({
    cnr_number: "",
  });
  const datafech = async () => {
    const url = "http://127.0.0.1:8000/court/judgement/" + id;
    console.log(url);
    const token = localStorage.getItem("court_token");
    const config = {
      headers: { token: token },
      withCredentials: true,
    };

    const data_1 = await axios
      .get(url, config)
      .then((response) => {
        console.log(response.data);
        setdata(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    const url1 = "http://127.0.0.1:8000/court/case/" + id;
    const data2 = await axios
      .get(url1, config)
      .then((response) => {
        console.log(response.data);
        setcasedata(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    datafech();
  }, []);
  return (
    <div>
      <NavBar_Court />
      <div
        style={{
          color: "black",
          padding: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h3>Judgements of the case with CNR Number : {casedata.cnr_number}</h3>
        {data.map((item) => {
          return (
            <div
              style={{
                border: "solid",
                padding: "30px",
                width: "50vw",
                margin: "30px",
              }}
            >
              <h2>Title : {item.judgement_title}</h2>
              <p>Judgement : {item.judgement}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
