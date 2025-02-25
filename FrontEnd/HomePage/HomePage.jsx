/** @format */

// Library Imports
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

// CSS Import
import "./HomePage.css";

const HomePage = () => {
	const [opacity, setOpacity] = useState(0);
	const navigate = useNavigate();

	useEffect(() => {
		// Set opacity to 1 after component mounts to trigger transition
		const timer = setTimeout(() => {
			setOpacity(1);
		}, 10); // Ensures effect applies AFTER initial render

		return () => clearTimeout(timer); // Cleanup timer
	}, []);

	const handleCourseOneNavigate = () => {
		navigate("/WebDesign");
	};

	return (
		<div id="home-page" style={{ opacity, transition: "opacity 1.5s ease-in-out" }}>
			<h1>All Courses</h1>
			<div id="all-courses">
				<div className="all-courses-column">
					<button onClick={handleCourseOneNavigate}>1. Introduction to Web Design</button>
					<button>4. Databases</button>
				</div>
				<div className="all-courses-column">
					<button>2. React & Vite</button>
					<button>5. Hosting Your Site</button>
				</div>
				<div className="all-courses-column">
					<button>3. Node JS & Express</button>
					<button>6. Tips and Tricks</button>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
