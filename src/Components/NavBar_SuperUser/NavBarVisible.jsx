import React from "react";
import "./NavBarVisible.css";
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
        <Link to="/addcase">Page1</Link>
      </div>
      <div className="navbar_visible_item">
        <Link to="/allcase">View All Case</Link>
      </div>
      <div className="navbar_visible_item">
        <Link>Search Case</Link>
      </div>
    </div>
  );
}
