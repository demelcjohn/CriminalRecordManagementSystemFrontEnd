import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/home';
import Login from './Pages/login';
// import Login from './Pages/login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' Component={Login}/>
        <Route path='/home' Component={Home}/>
      </Routes>
      {/* <Home/> */}
      {/* <Login/> */}
      
    </div>
  );
}

export default App;
