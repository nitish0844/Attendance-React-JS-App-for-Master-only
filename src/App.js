import React, { useEffect } from "react";
import Header from "./screens/Header";
import Qrcode from "./screens/Qrcode";
import Navigation from "./screens/Navigation";
import Contact from "./screens/Contact";
import "./App.css";

function App() {
  // useEffect(() => {
  //   const handleContextmenu = (e) => {
  //     e.preventDefault();
  //   };
  //   document.addEventListener("contextmenu", handleContextmenu);
  //   return function cleanup() {
  //     document.removeEventListener("contextmenu", handleContextmenu);
  //   };
  // }, []);

  return (
    <div>
      <Navigation />
      <Header />
      <Qrcode />
      <Contact />
    </div>
  );
}

export default App;
