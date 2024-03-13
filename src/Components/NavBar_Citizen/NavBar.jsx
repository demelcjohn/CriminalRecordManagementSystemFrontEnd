import React from "react";
import NavWeb from "./NavWeb";
import NavMobile from "./NavMobile";
export default function NavBar_Citizen() {
  const isWideScreen = window.innerWidth > 600;

  return <div>{isWideScreen ? <NavWeb /> : <NavMobile />}</div>;
}
