import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import "../NavBar/NavBarNotVicible.css";

export default function NavBarNotVisible(props) {
  const openNavBar = () => {
    props.setvisible(true);
  };
  return (
    <div className="NavBarNotVisible_outerdiv">
      <AppsIcon
        className=" navbarIcon"
        onClick={openNavBar}
        style={{
          maxWidth: "50px",
          maxHeight: "50px",
          minWidth: "50px",
          minHeight: "50px",
          color: "white",
        }}
      />
    </div>
  );
}
