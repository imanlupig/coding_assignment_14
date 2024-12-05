import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import TechList from "./components/TechList";
import Skills from "./components/Skills";
import Resources from "./components/Resources";
import DeveloperSetup from "./components/DeveloperSetup";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Work />
      <TechList />
      <Skills />
      <Resources />
      <DeveloperSetup />
    </div>
  );
}

export default App;
