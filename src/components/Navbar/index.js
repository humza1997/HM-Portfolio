import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <>
      <ul>
        <a href='#home'>
          {" "}
          <li>home</li>
        </a>
        <a href='#aboutme'>
          <li>about me</li>
        </a>
        <a href='#projects'>
          <li>projects</li>
        </a>
        <a href='#contact'>
          <li>contact</li>
        </a>
      </ul>
    </>
  );
};

export default Navbar;
