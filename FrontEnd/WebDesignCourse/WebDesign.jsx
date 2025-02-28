/** @format */

// Library Imports
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

//Component Imports
import { NavigationBar } from "../NavigationBar/NavigationBar";

// CSS Import
import "./WebDesign.css";

const WebDesign = () => {
	const [opacity, setOpacity] = useState(0);
	const navigate = useNavigate();

	useEffect(() => {
		// Set opacity to 1 after component mounts to trigger transition
		const timer = setTimeout(() => {
			setOpacity(1);
		}, 10); // Ensures effect applies AFTER initial render

		return () => clearTimeout(timer); // Cleanup timer
	}, []);

	const handleNavigation = (path) => {
		navigate(path);
	};

	return (
		<div id="web-design" style={{ opacity, transition: "opacity 1.5s ease-in-out" }}>
			<NavigationBar />
			<div id="web-design-lesson-list">
				<div class="lesson-icon" onClick={() => handleNavigation("/WebDesignLessonOne")}>
					<img src="../Images/Web-Design-Lesson-One.jpg"></img>
					<div className="overlay-text">1 - Foundations of the Web</div>
				</div>
				<div class="lesson-icon">
					<img src="../Images/Web-Design-Lesson-Two.jpg"></img>
					<div className="overlay-text">2 - HTML & CSS</div>
				</div>
				<div class="lesson-icon">
					<img src="../Images/Web-Design-Lesson-Three.jpg"></img>
					<div className="overlay-text">3 - Javascript & The DOM</div>
				</div>
				<div class="lesson-icon">
					<img src="../Images/Web-Design-Lesson-Four.jpg"></img>
					<div className="overlay-text">4 - Tools & Frameworks</div>
				</div>
				<div class="lesson-icon">
					<img src="../Images/Web-Design-Lesson-Five.jpg"></img>
					<div className="overlay-text">5 - Design Principles</div>
				</div>
			</div>
		</div>
	);
};

export default WebDesign;
