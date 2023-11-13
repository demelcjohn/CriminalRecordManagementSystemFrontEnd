import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/home';
import Login from './Pages/login';
// import Login from './Pages/login';
import Profile_page from './Pages/profile_page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' Component={Login}/>
        <Route path='/home' Component={Home}/>
        <Route path='/profile' Component={Profile_page}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
