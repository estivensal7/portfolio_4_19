import React from "react";
import "./style.css";
import heroImage from "../../images/portfolio_hero.png";
import paintBorder from "../../images/border_1.png";

function Hero() {
	return (
		<div
			className="hero-container row-fluid align-items-center d-block"
			id="hero-container"
		>
			<div className="col-10 mx-auto">
				<img
					src={heroImage}
					alt="Hero"
					id="hero-image"
					className="img-fluid"
				/>
			</div>
			<div className="typewriter col-4 mx-auto">
				<h1>Hi. My Name is Estiven...Welcome!</h1>
			</div>
			<img
				src={paintBorder}
				alt="border"
				id="about-border-top"
			/>
		</div>
	);
}

export default Hero;
