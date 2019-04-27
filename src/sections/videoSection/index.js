import React, { Component } from "react";
import "./style.css";
import videoList from "../../videosList";
import bottomBorder from "../../images/border_1.png";
import headerTop from "../../images/deco.svg";

// importing components
import Videos from "../../components/videos";

class VideoSection extends Component {
	state = {
		videoList
	};

	render() {
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
				<Videos
					hrefLink={videoList[0].link}
					name={videoList[0].title}
					imageSrc={videoList[0].img_src}
				/>
				<img
					src={bottomBorder}
					alt="bottom border"
					id="video-border-bottom"
				/>
			</div>
		);
	}
}

export default VideoSection;
