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
import AddNewCitizen from "./Pages/superuser/add_citizen";
import AddNewPolice from "./Pages/superuser/addpolice";
import AddNewCourt from "./Pages/superuser/addcourt";
import Allcitizen from "./Pages/superuser/AllCitizens";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/police/login" Component={Login} />
        <Route path="/police/home" Component={Home} />
        <Route path="/police/profile" Component={Profile_page} />
        <Route path="/police/viewcase/:id" Component={ViewCase} />
        <Route path="/police/addcase" Component={AddCase} />
        <Route path="/police/allcase" Component={ViewAllCases} />
        <Route path="/police/searchcase" Component={Search_CNR} />
        <Route path="/police/settings" Component={Settings} />
        <Route path="/court/home" Component={courtHome} />
        <Route path="/court/addjudgement" Component={courtAddJudgement} />
        <Route path="/court/viewjudgement" Component={courtViewJudgement} />
        <Route path="/citizen/home" Component={Profile_citizen} />
        <Route path="/citizen/status" Component={Status_citizen} />
        <Route path="/citizen/statusall" Component={Status_all} />
        <Route path="/admin/addcitizen" Component={AddNewCitizen}/>
        <Route path ="/admin/addpolice" Component={AddNewPolice}/>
        <Route path = "/admin/addcourt" Component={AddNewCourt}/>
        <Route path="/admin/allcitizen" Component={Allcitizen}/>
      </Routes>
    </div>
  );
}

export default App;
