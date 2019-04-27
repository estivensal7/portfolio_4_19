import React from "react";
import "./App.css";

//importing Sections
// import Contact from "./sections/contact";
import Hero from "./sections/hero";
import About from "./sections/about";
import TechSection from "./sections/techSection";
import ProjectSection from "./sections/projectSection";
import VideoSection from "./sections/videoSection";
import Contact from "./sections/contact";

//importing constant components
import Nav from "./components/nav";

function App() {
	return (
		<div className="App container-fluid">
			<Nav />
			<Hero />
			<About />
			<ProjectSection />
			<TechSection />
			<VideoSection />
			<Contact />
		</div>
	);
}

export default App;
