import React from "react";
import { Home, Aboutme, Projects, Contact, Background } from "./pages";
import "./style.css";
function App() {
  return (
    <div id='app'>
      <Background />
      <Home />
      <Aboutme />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
