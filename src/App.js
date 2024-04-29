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
import courtAddJudgement from "./Pages/court/SearchCase";
import courtViewJudgement from "./Pages/court/viewJudgement";
import Profile_citizen from "./Pages/citizen/home";
import Status_citizen from "./Pages/citizen/status";
import Status_all from "./Pages/citizen/allstatus";
import AddNewCitizen from "./Pages/superuser/add_citizen";
import AddNewPolice from "./Pages/superuser/addpolice";
import AddNewCourt from "./Pages/superuser/addcourt";
import Allcitizen from "./Pages/superuser/AllCitizens";
import CitizenLogin from "./Pages/citizen/login";
import Request_By from "./Pages/citizen/request_by";
import Request_to from "./Pages/citizen/request_to";
import Public_profile from "./Pages/citizen/public_profile";
import Addrequest from "./Pages/citizen/addrequest";
import My_Public_profile from "./Pages/citizen/myPublicProfile";
import PoliceLogin from "./Pages/police/police_login";
import AllPolice from "./Pages/superuser/AllPolice";
import AllCourt from "./Pages/superuser/AllCourts";
import { ContextProvider } from "./Components/context/Context";
import CourtLogin from "./Pages/court/court_login";
import AllCases from "./Pages/court/All_Cases";
import ViewJudgementCase from "./Pages/court/ViewJudgementCase";
import Add_Judgement from "./Pages/court/Add_Judgement";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Routes>
          //Police Routes
          <Route path="/police/login" Component={PoliceLogin} />
          <Route path="/police/home" Component={Home} />
          <Route path="/police/profile" Component={Profile_page} />
          <Route path="/police/viewcase/:id" Component={ViewCase} />
          <Route path="/police/addcase" Component={AddCase} />
          <Route path="/police/allcase" Component={ViewAllCases} />
          <Route path="/police/searchcase" Component={Search_CNR} />
          <Route path="/police/settings" Component={Settings} />
          // Court Routes
          <Route path="/court/login" Component={CourtLogin} />
          <Route path="/court/home" Component={courtHome} />
          <Route path="/court/addjudgement" Component={courtAddJudgement} />
          {/* <Route path="/court/viewjudgement" Component={courtViewJudgement} /> */}
          <Route path="/court/cases" Component={AllCases} />
          <Route path="/court/addjudgement/:id" Component={Add_Judgement} />
          <Route
            path="/court/viewjudgement/:id"
            Component={ViewJudgementCase}
          />
          //citizen Routes
          <Route path="/citizen/login" Component={CitizenLogin} />
          <Route path="/citizen/home" Component={Profile_citizen} />
          <Route path="/citizen/requestby" Component={Request_By} />
          <Route path="/citizen/requestto" Component={Request_to} />
          <Route path="/citizen/publicprofile/:id" Component={Public_profile} />
          <Route path="/citizen/addrequest" Component={Addrequest} />
          <Route
            path="/citizen/mypublicprofile"
            Component={My_Public_profile}
          />
          <Route path="/citizen/status" Component={Status_citizen} />
          <Route path="/citizen/statusall" Component={Status_all} />
          //admin Routes
          <Route path="/admin/addcitizen" Component={AddNewCitizen} />
          <Route path="/admin/addpolice" Component={AddNewPolice} />
          <Route path="/admin/addcourt" Component={AddNewCourt} />
          <Route path="/admin/allcitizen" Component={Allcitizen} />
          <Route path="/admin/allPolice" Component={AllPolice} />
          <Route path="/admin/allCourt" Component={AllCourt} />
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;
