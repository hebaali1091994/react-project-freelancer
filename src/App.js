<<<<<<< HEAD

import './App.css';
import Home from './Pages/Home';
import Postproject from './Pages/post-project/Postproject.jsx';
import Login from './Components/Login/Login.jsx';
=======
import "./App.css";
import Home from "./Pages/Home";
import Postproject from "./Components/post-project/Postproject.jsx";
import Login from "./Components/Login/Login.jsx";
>>>>>>> 036eb0875347243e99a8a48af7219e4ac3010e12
import { Routes, Route } from "react-router";
import SignUp from "./Components/Sign up/SignUp";
import Paypal from "./Components/Paypal/paypal";
import { Suspense, useState } from "react";
import '../src/i18n'
function App() {
  const lang = localStorage.getItem('lang') || 'en';
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
      </Routes>
    </div>
    </Suspense>
  );
}

export default App;
