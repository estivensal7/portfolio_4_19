import React, { Component } from "react";
import "./style.css";
import esLogo from "../../images/ES_logo_black.png";

class Nav extends Component {
	state = {
		open: false,
		width: window.innerWidth
	};

	updateWidth = () => {
		const newState = { width: window.innerWidth };

		if (this.state.open && newState.width > 991) {
			newState.open = false;
		}

		this.setState(newState);
	};

	toggleNav = () => {
		this.setState({ open: !this.state.open });
	};

	componentDidMount() {
		window.addEventListener("resize", this.updateWidth);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateWidth);
	}

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light mb-2 fixed-top navbar-inner">
				<a href="/" className="navbar-left">
					<img
						className="es-logo"
						src={esLogo}
						alt="ES_logo"
					/>
				</a>
				<button
					onClick={this.toggleNav}
					className="navbar-toggler"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className={`${
						this.state.open
							? ""
							: "collapse "
					}navbar-collapse`}
					id="navbarNav"
				>
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<a href="#hero-container">
								Home
							</a>
						</li>

						<li className="nav-item">
							<a href="#about-container">
								About
							</a>
						</li>

						<li className="nav-item">
							<a href="#project-section-container">
								Projects
							</a>
						</li>

						<li className="nav-item">
							<a href="#tech-section-container">
								Technologies
							</a>
						</li>

						<li className="nav-item">
							<a href="#video-section-container">
								Videos
							</a>
						</li>

						<li className="nav-item">
							<a href="#contact-section-container">
								Contact
							</a>
						</li>

						<li className="nav-item">
							<a
								href="https://drive.google.com/file/d/1Tj-py3ZzAnE1ScAa7R0w0gIvaNQadne7/view?usp=sharing"
								target="_blank"
								rel="noopener noreferrer"
								download
							>
								Resume
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Nav;
