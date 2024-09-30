import React from 'react'
import { CgDarkMode } from "react-icons/cg";

const NavLinks = [
    {
        id: "1",
        name: "FLEET",
        link: "/#fleet",
    },
    {
        id: "2",
        name: "BOOKING",
        link: "/#booking",
    },
    {
        id: "3",
        name: "CONTACT US",
        link: "/#contact",
    },
];
// const Navbar = ({theme, setTheme}) => {
 
function Navbar({theme, setTheme}) {    

  return <nav className="shadow-md bg-white
  dark:bg-dark dark:text-black duration-300">
        <div className="container">
        <div className="flex 
        justify-between items-center">
        <div>
        <h1 className="text-3xl
        font-bold font-serif"
        >ASCENT</h1>
        </div>
        <div className="hidden md:block">
        <ul className="flex items-center gap-8">
        {NavLinks.map((data) => (
        <li key={data.id}
            className="py-4">
        <a 
        className="py-2 hover:border-b-2
        hover:text-primary
        hover: border-primary 
        transition-colors 
        duration-500 text-lg font-medium"
        href={data.link}>
            {data.name}
            </a>
        </li>
            ))}
        </ul>
        </div>
        <div>
            {
                theme === "dark" ? (
                    <CgDarkMode
                    onClick={() => setTheme("light")}
                    className="text-2xl"
                    />
                ) : (
                    <CgDarkMode
                    onClick={() => setTheme("dark")}
                    className="text-2xl"
                    />
                )
            }
        </div>
        </div>
        </div>
    </nav>;
  };

export default Navbar;