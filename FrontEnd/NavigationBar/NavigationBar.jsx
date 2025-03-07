/** @format */

import React from "react";
import { Link } from "react-router-dom";

import "./NavigationBar.css";

export const NavigationBar = () => {
	return (
		<div id="navigation-bar">
			<Link to="/">
				<img src="../Images/HomePageImage.png"></img>
			</Link>
			<div id="text-links">
				<Link to="/HomePage">
					<a className="links-text">All Courses</a>
				</Link>
				<Link to="/HomePage">
					<a className="links-text">Mini Projects</a>
				</Link>
			</div>
			<Link to="/">
				<img src="../Images/DonateImage.png"></img>
			</Link>
		</div>
	);
};
