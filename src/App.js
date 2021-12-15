import "./App.css";
import Home from "./Pages/Home";
import Postproject from "./Pages/post-project/Postproject.jsx";
import Login from "./Pages/Login/Login";
import { Routes, Route } from "react-router";
import SignUp from "./Components/Sign up/SignUp";
import Paypal from "./Components/Paypal/paypal";
import { Suspense, useState, useContext, useEffect } from "react";
import { io } from "socket.io-client";
import "../src/i18n";

import { Context } from './context/Context';
import Dashbaord from './Pages/Dashbaord/Dashbaord';
import Feedback from './Pages/Feedback/feedback';
import Project_Contests from './Pages/Projects/Project_Contests';
import MemberShip from './Pages/MemberShip/memberShip';
import HowitWork from './Pages/HowItWork/howitWork';
import Inbox from './Pages/inbox/Inbox';
import DisplayProject from './Pages/DisplayProject/DisplayProject';

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
        <Route path="/" exact="true" element={<Home />} />
        <Route path="/Post-project" element={<Postproject />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path='/paypal'  element={<Paypal  />}/>
        <Route path='/Feedback'  element={<Feedback  />}/>
        <Route path='/Projects'  element={<Project_Contests  />}/>
        <Route path='/MemberShip'  element={<MemberShip  />}/>
        <Route path='/howwork'  element={<HowitWork/>}/>
        <Route path='/inbox'  element={<Inbox/>}/>
        <Route path='/DisplayPost'  element={<DisplayProject/>}/>
                <Route path='/Dashbaord'  element={<Dashbaord  />}/>

      </Routes>
    </div>
    </Suspense>
  );
}

export default App;
