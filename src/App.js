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
import { Context } from "./context/Context";
import Dashbaord from "./Pages/Dashbaord/Dashbaord";

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
          <Route path="/paypal" element={<Paypal />} />
          <Route path="/Dashbaord" element={<Dashbaord />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
