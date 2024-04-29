import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Court_Case_Card(props) {
  const data = props.data;

  const navigate = useNavigate();

  const navigateto_all_judgements = () => {
    navigate("/court/viewjudgement/" + data._id);
  };

  const navigateto_addJudgement = () => {
    navigate("/court/addjudgement/" + data._id);
  };

  return (
    <div>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <tbody>
          <tr>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                textAlign: "left",
              }}
            >
              CNR Number
            </th>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              {data.cnr_number}
            </td>
          </tr>
          <tr>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                textAlign: "left",
              }}
            >
              Case Type
            </th>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              {data.case_type}
            </td>
          </tr>
          <tr>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                textAlign: "left",
              }}
            >
              Filling Number
            </th>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              {data.filling_number}
            </td>
          </tr>
          <tr>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                textAlign: "left",
              }}
            >
              Acts
            </th>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              {data.acts}
            </td>
          </tr>
          <tr>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                textAlign: "left",
              }}
            >
              Sections
            </th>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              {data.sections}
            </td>
          </tr>
          <tr>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                textAlign: "left",
              }}
            >
              FIR Number
            </th>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              {data.fir_number}
            </td>
          </tr>
          <tr>
            <td>
              <Button onClick={navigateto_all_judgements}>
                View Judgments
              </Button>
            </td>
            <td>
              <Button onClick={navigateto_addJudgement}>Add Judgement</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
