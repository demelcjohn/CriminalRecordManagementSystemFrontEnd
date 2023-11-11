import React from "react";
import "../NavBar/NavBarVisible.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

export default function NavBarVisible(props) {
  const closeNavBar = () => {
    props.setvisible(false);
  };
  return (
    <div className="navbar_visible_outerdiv">
      <div className="navbar_visible_closediv" onClick={closeNavBar}>
        <CloseIcon
          style={{
            maxWidth: "50px",
            maxHeight: "50px",
            minWidth: "50px",
            minHeight: "50px",
            color: "white",
          }}
        />
      </div>
      <div className="navbar_visible_item">
        <Link to="/home/page1">Page1</Link>
      </div>
      <div className="navbar_visible_item">
        <Link to="/home/page2">PAge2</Link>
      </div>
    </div>
  );
}
