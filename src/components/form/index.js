import React from "react";
import "./style.css";

function Form({ handleInputChange, handleFormSubmit }) {
	return (
		<form className="contact-form">
			{/* First Name */}
			<div className="form-group first-name-input">
				<label htmlFor="firstName">
					<strong>First Name</strong>
				</label>
				<input
					className="form-control"
					id="Title"
					type="text"
					placeholder="John"
					name="firstName"
					onChange={handleInputChange}
					required
				/>
			</div>
			{/* Last Name */}
			<div className="form-group">
				<label htmlFor="lastName">
					<strong>Last Name</strong>
				</label>
				<input
					className="form-control"
					id="Title"
					type="text"
					placeholder="Smith"
					name="lastName"
					onChange={handleInputChange}
					required
				/>
			</div>
			{/* Text Area */}
			<div className="form-group">
				<label htmlFor="exampleFormControlTextarea1">
					Message
				</label>
				<textarea
					className="form-control"
					id="exampleFormControlTextarea1"
					rows="3"
				/>
			</div>
			{/* Send Message Button */}
			<div className="pull-left">
				<button
					onClick={handleFormSubmit}
					type="submit"
					className="btn btn-lg btn-dark align-item-center"
				>
					Send Message
				</button>
			</div>
		</form>
	);
}

export default Form;
