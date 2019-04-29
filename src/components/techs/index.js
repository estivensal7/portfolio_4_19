import React from "react";
import "./style.css";

function Techs({ ...props }) {
	return (
		<div
			className="card tech-card col-6 col-sm-3 col-md-6 col-xl-3 float-left"
			style={{ borderRadius: "0px !important" }}
		>
			<img
				className="card-img-top"
				style={{
					height: "10vh"
				}}
				src={props.techSrc}
				alt="Tech"
			/>
			<div className="card-body">
				<p className="tech-text">{props.name}</p>
			</div>
		</div>
	);
}

export default Techs;
