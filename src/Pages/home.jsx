import React from "react";
import NavWeb from "../Components/NavBar/NavWeb";
import NavMobile from "../Components/NavBar/NavMobile";
import { Route, Routes } from "react-router-dom";
import page1 from "../Components/page1";
import page2 from "../Components/page2";

export default function Home() {
  const isWideScreen = window.innerWidth > 600;

  return (
    <div>
      {isWideScreen ? <NavWeb /> : <NavMobile />}
      <Routes>
        <Route path="/home/page1" Component={page1}></Route>
        <Route path="home/page2" Component={page2}></Route>
      </Routes>
    </div>
  );
}
