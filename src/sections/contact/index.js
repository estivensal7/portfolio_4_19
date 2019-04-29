import React, { Component } from "react";
import "./style.css";
import headerTop from "../../images/deco_black.svg";
import githubIcon from "../../images/github.svg";
import linkedInIcon from "../../images/linkedin.svg";
import stackOverflowIcon from "../../images/stackoverflow.svg";

import Form from "../../components/form";

class Contact extends Component {
	state = {
		name: ""
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		console.log("submit button clicked");
	};

	render() {
		return (
			<div id="contact-section-container">
				<img
					className="header-top-img"
					src={headerTop}
					alt="deco-border"
					id="contact-header-top-img"
				/>
				<h1 className="contact-h1">Contact Me</h1>
				<img
					className="header-bottom-img"
					src={headerTop}
					alt="deco-border"
				/>
				<Form
					handleInputChange={
						this.handleInputChange
					}
					handleFormSubmit={this.handleFormSubmit}
				/>
				<div className="col-12">
					<a
						className="contact-icon-a"
						href="https://github.com/estivensal7"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={githubIcon}
							className="contact-icon"
							alt="contact-github-icon"
						/>
					</a>

					<a
						className="contact-icon-a"
						href="https://www.linkedin.com/in/estiven-salazar/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={linkedInIcon}
							className="contact-icon"
							alt="contact-linked-in-icon"
						/>
					</a>

					<a
						className="contact-icon-a"
						href="https://stackoverflow.com/users/8817266/estiven-salazar"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={stackOverflowIcon}
							className="contact-icon"
							alt="contact-stack-overflow-icon"
						/>
					</a>
				</div>
			</div>
		);
	}
}

export default Contact;
