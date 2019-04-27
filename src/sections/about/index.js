import React from "react";
import "./style.css";

import bottomBorder from "../../images/border_1_bottom.png";
import esLogo from "../../images/ES_logo.png";

function About() {
	return (
		<div
			className="about-container row-fluid align-items-center d-flex container-fluid"
			id="about-container"
		>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<img
							src={esLogo}
							alt="ES Logo"
							id="about-logo"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<p id="about-text">
							Hi, I'm Estiven Salazar,
							an innovative and
							ambitious Full Stack Web
							Developer! At first I
							intended to be a
							Mechanical Engineer, and
							began my journey to
							become just that. One
							thing led to another,
							and I enrolled in the
							Rutgers University
							Coding Bootcamp! This
							fortunate turn of events
							led me to find a new
							passion in technology. I
							was born in Costa Rica,
							and moved to the United
							States when I was 5
							years old. Those customs
							and traditions have been
							with me through my
							entire life, and in
							Costa Rica we have a
							saying... "Pura Vida".
							Pura Vida essentially
							translates to "Pure
							Life", and it represents
							not only faith and
							appreciation but, the
							ambition to make the
							most out of life itself.
							Embarking on this
							journey as a Web
							Developer encourages me
							to make the most out of
							my life with every
							project that I work on
							because, Web Development
							allows you to express
							yourself, and change
							people's lives for the
							better... that to me is
							Pura Vida.
						</p>
					</div>
				</div>
			</div>

			<img
				src={bottomBorder}
				alt="bottom border"
				id="about-border-bottom"
			/>
		</div>
	);
}

export default About;
