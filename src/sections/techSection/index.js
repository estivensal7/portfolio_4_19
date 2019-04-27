import React, { Component } from "react";
import "./style.css";
import techList from "../../techList";
import bottomBorder from "../../images/border_1_bottom.png";
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
				<img
					src={bottomBorder}
					alt="bottom border"
					id="tech-border-bottom"
				/>
			</div>
		);
	}
}

export default TechSection;
