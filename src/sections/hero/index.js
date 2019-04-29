import React from "react";
import "./style.css";
import heroImage from "../../images/portfolio_hero.png";

function Hero() {
	return (
		<div
			className="hero-container row-fluid align-items-center d-block"
			id="hero-container"
		>
			<div className="col-10 mx-auto hero-img-container">
				<img
					src={heroImage}
					alt="Hero"
					id="hero-image"
					className="img-fluid"
				/>
			</div>
			<div className="typewriter col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 mx-auto">
				<h1>Hi. My Name is Estiven...Welcome!</h1>
			</div>
		</div>
	);
}

export default Hero;
