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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/home" Component={Home} />
        <Route path="/profile" Component={Profile_page} />
        <Route path="/viewcase/:id" Component={ViewCase} />
        <Route path="/addcase" Component={AddCase} />
        <Route path="/allcase" Component={ViewAllCases}/>
        <Route path="/searchcase" Component={Search_CNR}/>
      </Routes>
    </div>
  );
}

export default App;
