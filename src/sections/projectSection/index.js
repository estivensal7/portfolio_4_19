import React from "react";
import "./style.css";
import paintBorder from "../../images/border_1.png";
import headerTop from "../../images/deco.svg";

//importing components
import Projects from "../../components/projects";

function ProjectSection() {
	return (
		<div
			className="project-section-container"
			id="project-section-container"
		>
			<img
				className="header-top-img"
				src={headerTop}
				alt="header-border"
			/>
			<h1 id="project-section-header">Projects</h1>
			<img
				className="header-bottom-img"
				src={headerTop}
				alt="header-border"
			/>
			<Projects />
			<img
				src={paintBorder}
				alt="border"
				id="tech-border-top"
			/>
		</div>
	);
}

export default ProjectSection;
