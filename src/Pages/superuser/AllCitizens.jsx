import React from "react";
import NavBar_SuperUser from "../../Components/NavBar_SuperUser/NavBar";
import UserCard from "../../Components/UserCard";

export default function Allcitizen() {
  return (
    <div>
      <NavBar_SuperUser />
      <div className="profile_page_outerdiv">
        <div className="profile_page_innerdiv">
          <UserCard />
          <br />
        </div>
        <div className="profile_page_innerdiv">
          <UserCard />
          <br />
        </div>
      </div>
    </div>
  );
}
