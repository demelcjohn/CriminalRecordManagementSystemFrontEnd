import NavBar from "../Components/NavBar/NavBar";
import "./profile_page.css";
import dp from "../img/dp.png";

import React from "react";

export default function Profile_page() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="profile_page_outerdiv">
        <div className="profile_page_innerdiv">
          <table className="profile_page_table">
            <tr>
              <td colSpan={2} className="profile_page_table_col_img">
                <img src={dp} />
              </td>
            </tr>
            <tr>
              <td className="profile_page_table_col">
                <b>UID</b>
              </td>
              <td className="profile_page_table_col">1111 1111 1111 1111</td>
            </tr>
            <tr>
              <td className="profile_page_table_col">
                <b>Name</b>
              </td>
              <td className="profile_page_table_col">Jesvin Jose</td>
            </tr>
            <tr>
              <td className="profile_page_table_col">
                <b>Gender</b>
              </td>
              <td className="profile_page_table_col">Male</td>
            </tr>
            <tr>
              <td className="profile_page_table_col">
                <b>DOB</b>
              </td>
              <td className="profile_page_table_col">21/11/2001</td>
            </tr>
            <tr>
              <td className="profile_page_table_col">
                <b>House Name</b>
              </td>
              <td className="profile_page_table_col">House</td>
            </tr>
            <tr>
              <td className="profile_page_table_col">
                <b>Street</b>
              </td>
              <td className="profile_page_table_col">Street 1</td>
            </tr>
            <tr>
              <td className="profile_page_table_col">
                <b>City</b>
              </td>
              <td className="profile_page_table_col">City 1</td>
            </tr>
            <tr>
              <td className="profile_page_table_col">
                <b>Pin</b>
              </td>
              <td className="profile_page_table_col">111111</td>
            </tr>
            <tr>
              <td className="profile_page_table_col">
                <b>State</b>
              </td>
              <td className="profile_page_table_col">State 1</td>
            </tr>
            <tr>
              <td className="profile_page_table_col">
                <b>Country</b>
              </td>
              <td className="profile_page_table_col">Country 1</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
