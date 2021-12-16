
import "./App.css";
import Home from "./Pages/Home";
import Postproject from "./Pages/post-project/Postproject.jsx";
import Login from "./Pages/Login/Login";

import './App.css';


import { Routes, Route } from "react-router";
import SignUp from "./Components/Sign up/SignUp";
import Paypal from "./Components/Paypal/paypal";
import { Suspense, useState, useContext, useEffect } from "react";
import { io } from "socket.io-client";
import "../src/i18n";

import { Context } from './context/Context';
import Dashbaord from './Pages/Dashbaord/Dashbaord';

import Massenger from './Pages/Massenger/Massenger.jsx';


import Feedback from './Pages/Feedback/feedback';
import Project_Contests from './Pages/Projects/Project_Contests';
import MemberShip from './Pages/MemberShip/memberShip';
import HowitWork from './Pages/HowItWork/howitWork';
import Inbox from './Pages/inbox/Inbox';
import DisplayProject from './Pages/DisplayProject/DisplayProject';
import Skills from './Pages/Skills/Skills';
import Proposals from './Pages/projectinfo/Proposals';
import Tasks from './Pages/projectinfo/Tasks';
import Details from './Pages/projectinfo/Details';
import Files from './Pages/projectinfo/Files';
import DetailsData from './Pages/projectinfo/DetailsData';

function App() {
  const [socket, setSocket] = useState(null);

  const { user } = useContext(Context);

  useEffect(() => {
    setSocket(io("http://localhost:5000"));
  }, []);
  // useEffect(() => {
  //   socket.emit("newUser", user);
  // }, [socket, user]);

  const lang = localStorage.getItem("lang") || "en";
  document.documentElement.language = lang;
  return (
    <Suspense fallback="Loading ...">
      
    <div className="App">
      <Routes>
        <Route path="/" exact="true" element={ user ? <Dashbaord/> : <Home />} />
        <Route path="/Post-project/" element={<Postproject />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path='/paypal'  element={<Paypal  />}/>
        <Route path='/Dashbaord'  element={<Dashbaord  />}/>
        <Route path='/Massenger'  element={<Massenger />}/>
        <Route path='/Dashbaord'  element={<Dashbaord  />}/>
        <Route path='/Massenger'  element={<Massenger />}/>

        <Route path='/Feedback'  element={<Feedback  />}/>
        <Route path='/Projects'  element={<Project_Contests/>}/>
        <Route path='/MemberShip'  element={<MemberShip  />}/>
        <Route path='/howwork'  element={<HowitWork/>}/>
        <Route path='/inbox'  element={<Inbox/>}/>
        <Route path='/DisplayPost'  element={<DisplayProject/>}/>
       <Route path='/Dashbaord'  element={user ? <Dashbaord /> : <Home/>}/>
                <Route path='/Dashbaord'  element={<Dashbaord  />}/>
<Route path='/DisplayProject'  element={<DisplayProject  />}/>
        <Route path='/Dashbaord'  element={<Dashbaord  />}/>
        <Route path='/DisplayProject/'  element={<DisplayProject  />}/>
            <Route path='/DisplayProject/Proposals/:id'  element={<Proposals  />}/>
            <Route path='/DisplayProject/Tasks/:id'  element={<Tasks  />}/>
            <Route path='/DisplayProject/Details/:id'  element={<DetailsData  />}/>
            <Route path='/DisplayProject/Files/:id'  element={<Files  />}/>
        <Route path='/Skills'  element={<Skills/>}/>



      </Routes>
    </div>
    </Suspense>
  );
}

export default App;
