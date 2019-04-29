import React from "react";
import "./style.css";

import stachePic from "../../images/stachebarbers.png";
import mernTodoPic from "../../images/mern_todo.png";

function Projects() {
	return (
		<div className="project-container">
			<div className="card col-sm-4 col-md-4 col-lg-4 col-xl-4 mx-auto project-card">
				<img
					className="card-img-top"
					src={stachePic}
					alt="Stache Barbers Project"
				/>
				<a
					className="project-title-div"
					href="https://thestachebarbershop.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<p className="project-title">
						Stache Barbershop
					</p>
				</a>
			</div>

			<div className="card col-sm-4 col-md-4 col-lg-4 col-xl-4 mx-auto project-card">
				<img
					className="card-img-top"
					src={mernTodoPic}
					alt="Mern To-Do Project"
				/>
				<a
					className="project-title-div"
					href="https://murmuring-ocean-48913.herokuapp.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<p className="project-title">
						MERN To-Do
					</p>
				</a>
			</div>

			<div className="card col-sm-4 col-md-4 col-lg-4 col-xl-4 mx-auto project-card">
				<img
					className="card-img-top"
					src={mernTodoPic}
					alt="Mern To-Do Project"
				/>
				<a
					className="project-title-div"
					href="https://pure-garden-27585.herokuapp.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<p className="project-title">
						MiniFlix
					</p>
				</a>
			</div>
		</div>
	);
}

export default Projects;
