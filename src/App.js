
import './App.css';
import Home from './Pages/Home';
import Postproject from './Pages/post-project/Postproject.jsx';
import Login from './Components/Login/Login.jsx';
import { Routes, Route } from "react-router";
import SignUp from './Components/Sign up/SignUp';
function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" exact="true" element={<Home/>}/>
        <Route path="/Post-project"  element={<Postproject/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
     </Routes>
    </div>
  );
}

export default App;
