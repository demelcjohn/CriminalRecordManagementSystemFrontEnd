import React, { useState } from "react";

import "./case_card.css";
import Judgement_card from "./judgement_card";

export default function Case_card(props) {
  const [data, setdata] = useState(props.data);
  return (
    <div className=" case_card_div">
      <h2>Case Number : {data.case.cnt_number}</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
    <tbody>
        <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Case Type</th>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{data.case.case_type}</td>
        </tr>
        <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Filing Number</th>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{data.case.filling_date}</td>
        </tr>
        <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Acts</th>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{data.case.acts}</td>
        </tr>
        <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Sections</th>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{data.case.sections}</td>
        </tr>
        <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>FIR Number</th>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{data.case.fir_number}</td>
        </tr>
    </tbody>
</table>


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
