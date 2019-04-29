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
				<a
					className="video-title-div"
					href="https://drive.google.com/file/d/1IMng9r9xvfb-JL_PAs1Z6p_eUOZKs6Ky/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
				>
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
				<a
					className="video-title-div"
					href="https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c5206211-1417-4993-b3ae-aa2700edf7ee"
					target="_blank"
					rel="noopener noreferrer"
				>
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
				<a
					className="video-title-div"
					href="https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7db02fb8-3edb-4c52-a127-aa27011c28c3"
					target="_blank"
					rel="noopener noreferrer"
				>
					<p className="video-title">
						MERN To-Do Presentation Pt. 2
					</p>
				</a>
			</div>
		</div>
	);
}

export default Videos;
