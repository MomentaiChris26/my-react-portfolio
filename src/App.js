import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./layout/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
		<BrowserRouter>
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
		</BrowserRouter>

  );
}

export default App;
