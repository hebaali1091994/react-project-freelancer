import "./App.css";
import Home from "./Pages/Home";
import Postproject from "./Pages/post-project/Postproject.jsx";
import Login from "./Pages/Login/Login";

import "./App.css";

import { Routes, Route, Navigate } from "react-router";
import SignUp from "./Pages/Sign up/SignUp";
import Paypal from "./Components/Paypal/paypal";
import { Suspense, useState, useContext, useEffect } from "react";
import { io } from "socket.io-client";
import "../src/i18n";

import { Context } from "./context/Context";
import Dashbaord from "./Pages/Dashbaord/Dashbaord";

import Massenger from "./Pages/Massenger/Massenger.jsx";

import Feedback from "./Pages/Feedback/feedback";
import Project_Contests from "./Pages/Projects/Project_Contests";
import MemberShip from "./Pages/MemberShip/memberShip";
import HowitWork from "./Pages/HowItWork/howitWork";
import Inbox from "./Pages/inbox/Inbox";
import DisplayProject from "./Pages/DisplayProject/DisplayProject";
import Skills from "./Pages/Skills/Skills";
import Proposals from "./Pages/projectinfo/Proposals";
import Tasks from "./Pages/projectinfo/Tasks";
import Details from "./Pages/projectinfo/Details";
import Files from "./Pages/projectinfo/Files";
import DetailsData from "./Pages/projectinfo/DetailsData";
import Setting from "./Pages/Setting/Setting";
import SingleFreelancer from "./Components/Single Freelancer/SingleFreelancer";
// import Details from './Pages/Test/Details';
import Freelancerpage from "./Pages/FreelancerPage/Freelancerpage";
import NoFoundpage from "./Pages/NoFoundPage/NoFoundpage";
import Contract from "./Pages/Contract/Contract";
import Contactus from "./Pages/Contactus/Contactus";
import Enterprise from "./Pages/enterprise/Enterprise";
import Documentation from "./Pages/Documentation/Documentation";
import MyProfile from "./Pages/proflleEdit/MyProfile";
import Browse_Jobs from "./Pages/BrowseJobs/Browse_Jobs";
import Mylist from "./Pages/Mylist/Mylist";
function App() {
  const [socket, setSocket] = useState(null);

  const { user } = useContext(Context);

  // useEffect(() => {
  //   setSocket(io("http://localhost:5000"));
  // }, []);
  // useEffect(() => {
  //   socket.emit("newUser", user);
  // }, [socket, user]);

  let lang = localStorage.getItem("lang") || "en";
  document.documentElement.language = lang;

  return (
    <div
      className="App"
      dir={lang === "ar" ? "rtl" : "ltr"}
      lang={lang === "ar" ? "ar" : "en"}
    >
      <Suspense fallback="Loading ...">
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Setting" element={<Setting />} />
          <Route
            path="/"
            exact="true"
            element={user ? <Dashbaord /> : <Home />}
          />
          <Route
            path="/Post-project/"
            element={user ? <Postproject /> : <Navigate to="/Login" />}
          />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path='/paypal' element={user ? <Paypal /> : <Navigate to="/Login" />} />
          <Route path='/' element={<Dashbaord />} />
          <Route path='/Massenger' element={user ? <Massenger /> : <Navigate to="/Login" />} />

          <Route path='/Feedback' element={user ? <Feedback /> : <Navigate to="/Login" />} />
          <Route path='/Projects' element={user ? <Project_Contests /> : <Navigate to="/Login" />} />
          <Route path='/MemberShip' element={user ? <MemberShip /> : <Navigate to="/Login" />} />
          <Route path='/howwork' element={user ? <HowitWork /> : <Navigate to="/Login" />} />
          <Route path='/inbox' element={user ? <Inbox /> : <Navigate to="/Login" />} />
          <Route path='/DisplayPost' element={user ? <DisplayProject /> : <Navigate to="/Login" />} />
          <Route path='/' element={user ? <Dashbaord /> : <Route path="/Login" element={<Login />} />} />
          <Route path='/DisplayProject' element={user ? <DisplayProject /> : <Navigate to="/Login" />} />
          <Route path='/DisplayProject/Proposals/:id' element={user ? <Proposals /> : <Navigate to="/Login" />} />
          <Route path='/DisplayProject/Tasks/:id' element={user ? <Tasks /> : <Navigate to="/Login" />} />
          <Route path='/DisplayProject/Details/:id' element={user ? <DetailsData /> : <Navigate to="/Login" />} />
          <Route path='/DisplayProject/Files/:id' element={user ? <Files /> : <Navigate to="/Login" />} />
          <Route path='/Skills' element={user ? <Skills /> : <Navigate to="/Login" />} />
          <Route path='/Contract/:id' element={user ? <Contract /> : <Navigate to="/Login" />} />
          <Route path='/DisplayProject' element={user ? <DisplayProject /> : <Navigate to="/Login" />} />
          <Route path='/DisplayProject/Proposals/:id' element={user ? <Proposals /> : <Navigate to="/Login" />} />
          <Route path='/DisplayProject/Tasks/:id' element={user ? <Tasks /> : <Navigate to="/Login" />} />
          <Route path='/DisplayProject/Details/:id' element={user ? <DetailsData /> : <Navigate to="/Login" />} />
          <Route path='/DisplayProject/Files/:id' element={user ? <Files /> : <Navigate to="/Login" />} />
          <Route path='/Contactus' element={user ? <Contactus /> : <Navigate to="/Login" />} />
          <Route path='/Enterprise' element={user ? <Enterprise /> : <Navigate to="/Login" />} />
          <Route path='/Documentation' element={user ? <Documentation /> : <Navigate to="/Login" />} />
          <Route path='/ProfileUser/:id' element={user ? <MyProfile /> : <Navigate to="/Login" />} />
          <Route path='/Browse_Jobs' element={user ? <Browse_Jobs /> : <Navigate to="/Login" />} />
          <Route path='**' element={<NoFoundpage />} />


          <Route path='**' element={<NoFoundpage />} />
          
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;