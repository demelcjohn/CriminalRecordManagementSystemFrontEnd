import React, { useState } from "react";
import NavBarVisible from "./NavBarVisible";
import NavBarNotVisible from "./NavBarNotVisible";

export default function NavMobile() {
  const [visible, setvisible] = useState(false);
  return (
    <div style={{ backgroundColor: "#2d2d2d", width: "100vh", height: "10vh" }}>
      {visible ? (
        <NavBarVisible setvisible={setvisible} />
      ) : (
        <NavBarNotVisible setvisible={setvisible} />
      )}
    </div>
  );
}
