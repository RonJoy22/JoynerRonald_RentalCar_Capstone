import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./components/Contact";
import Fleet from "./components/Fleet";
import { Routes, Route } from "react-router-dom";
import { Booking } from "./components";


const App = () => {
//Dark Mode feature
const [theme, setTheme] = React.useState(
  localStorage.getItem("theme")?
localStorage.getItem("theme") : "light");

const element = document.documentElement;
useEffect(() => {
  if (theme === "dark") {
    element.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    element.classList.remove("dark");
  localStorage.setItem("theme", theme);
}
}), [theme];

//AOS initialization
React.useEffect(() => {
  AOS.init({
    offset: 100,
    duration: 800,
    easing: "ease-in-sine",
    delay: 100,
  });
AOS.refresh();
}, []);


return (
    <Routes>
      <Route path="/" element={<Hero theme= {theme} setTheme={setTheme} />} />
      <Route path="/fleet" element={<Fleet />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
   
  );
}

export default App;
