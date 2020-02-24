import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./layout/Navigation";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
		<div className="App">
			<Navigation />
			<div className="content">
				<Hero />
				<Projects />
				<Skills />
				<About />
				<Contact />
			</div>
		</div>
  );
}

export default App;
