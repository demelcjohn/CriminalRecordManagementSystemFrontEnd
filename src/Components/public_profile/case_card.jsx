import React, { useState } from "react";

import "./case_card.css";
import Judgement_card from "./judgement_card";

export default function Case_card(props) {
  const [data, setdata] = useState(props.data);
  return (
    <div className=" case_card_div">
      <h2>Case Number : {data.case.caseNo}</h2>
      <h3>Case Title : {data.case.caseTitle}</h3>
      <p> Case Discription : {data.case.caseDiscription}</p>
      <h3>
        {" "}
        <u>Judgements of the case</u>{" "}
      </h3>
      {data.judgements.map((item) => {
        return <Judgement_card data={item} />;
      })}
    </div>
  );
}
