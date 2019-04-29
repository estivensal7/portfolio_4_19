import React from "react";
import "./style.css";
import headerTop from "../../images/deco.svg";

// importing components
import Videos from "../../components/videos";

function VideoSection() {
	return (
		<div id="video-section-container">
			<img
				className="header-top-img"
				src={headerTop}
				alt="deco-border"
			/>
			<h1 id="video-h1">Videos</h1>
			<img
				className="header-bottom-img"
				src={headerTop}
				alt="deco-border"
			/>
			<br />
			<Videos />
		</div>
	);
}

export default VideoSection;
