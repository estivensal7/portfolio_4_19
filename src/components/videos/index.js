import React from "react";
import "./style.css";

import project3Pic from "../../images/project-3-vid.png";
import mernTodoPic from "../../images/mern_todo.png";

function Videos() {
	return (
		<div className="video-container">
			<div className="card video-card col-12 col-sm-4 col-md-8 col-lg-4  mx-auto">
				<img
					className="card-img-top"
					src={project3Pic}
					alt="Video Source"
				/>
				<a className="video-title-div" href="/">
					<p className="video-title">
						JobCards Presentation
					</p>
				</a>
			</div>

			<div className="card video-card col-12 col-sm-4 col-md-8 col-lg-4  mx-auto">
				<img
					className="card-img-top"
					src={mernTodoPic}
					alt="Video Source"
				/>
				<a className="video-title-div" href="/">
					<p className="video-title">
						MERN To-Do Presentation Pt. 1
					</p>
				</a>
			</div>

			<div className="card video-card col-12 col-sm-4 col-md-8 col-lg-4  mx-auto">
				<img
					className="card-img-top"
					src={mernTodoPic}
					alt="Video Source"
				/>
				<a className="video-title-div" href="/">
					<p className="video-title">
						MERN To-Do Presentation Pt. 2
					</p>
				</a>
			</div>
		</div>
	);
}

export default Videos;
