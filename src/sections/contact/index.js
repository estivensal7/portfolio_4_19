import React, { Component } from "react";
import "./style.css";
import headerTop from "../../images/deco_black.svg";

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
			</div>
		);
	}
}

export default Contact;
