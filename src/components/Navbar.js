import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-indigo-600">
      <div className="flex p-5 justify-center items-center">
        <li className="list-none text-indigo-100">
          <Link to="/">Home</Link>
        </li>
        <li className="list-none text-indigo-100">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="list-none text-indigo-100">
          <Link to="/about">About</Link>
        </li>
      </div>
    </nav>
  );
}

export default Navbar;
