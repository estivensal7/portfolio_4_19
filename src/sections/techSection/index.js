import React, { Component } from "react";
import "./style.css";
import techList from "../../techList";
import headerTop from "../../images/deco_black.svg";

// importing components
import Techs from "../../components/techs";

class TechSection extends Component {
	state = {
		techList
	};

	render() {
		return (
			<div id="tech-section-container">
				<img
					className="header-top-img"
					src={headerTop}
					alt="deco-border"
					id="tech-header-top-img"
				/>
				<h1 id="tech-h1">Technologies</h1>
				<img
					className="header-bottom-img"
					src={headerTop}
					alt="deco-border"
				/>
				<br />
				{this.state.techList.map(tech => {
					return (
						<Techs
							key={tech.id}
							techSrc={tech.src}
							name={tech.name}
						/>
					);
				})}
			</div>
		);
	}
}

export default TechSection;
