import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/home";
import Login from "./Pages/login";
// import Login from './Pages/login';
import Profile_page from "./Pages/profile_page";
import ViewCase from "./Pages/viewCase";
import AddCase from "./Pages/addCase";
import { useEffect } from "react";
import ViewAllCases from "./Pages/ViewAllCases";
import { Search } from "@mui/icons-material";
import Search_CNR from "./Pages/Search_CNR";
import Settings from "./Pages/Settings";
import courtHome from "./Pages/court/home";
import courtAddJudgement from "./Pages/court/addJudgement";
import courtViewJudgement from "./Pages/court/viewJudgement";
import Profile_citizen from "./Pages/citizen/home";
import Status_citizen from "./Pages/citizen/status";
import Status_all from "./Pages/citizen/allstatus";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/home" Component={Home} />
        <Route path="/profile" Component={Profile_page} />
        <Route path="/viewcase/:id" Component={ViewCase} />
        <Route path="/addcase" Component={AddCase} />
        <Route path="/allcase" Component={ViewAllCases} />
        <Route path="/searchcase" Component={Search_CNR} />
        <Route path="/settings" Component={Settings} />
        <Route path="/court/home" Component={courtHome} />
        <Route path="/court/addjudgement" Component={courtAddJudgement} />
        <Route path="/court/viewjudgement" Component={courtViewJudgement} />
        <Route path="/citizen/home" Component={Profile_citizen} />
        <Route path="/citizen/status" Component={Status_citizen} />
        <Route path="/citizen/statusall" Component={Status_all} />
      </Routes>
    </div>
  );
}

export default App;
