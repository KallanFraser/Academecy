/** @format */

// Library Imports
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

// CSS Import
import "./LandingPage.css";

const LandingPage = () => {
	const [showHeader, setShowHeader] = useState(false);
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		// Step 1: Fade in the header
		const headerTimer = setTimeout(() => {
			setShowHeader(true);
		}, 10); // Tiny delay to ensure render cycle

		// Step 2: Fade in the button after header transition completes
		const buttonTimer = setTimeout(() => {
			setShowButton(true);
		}, 1400); // Start button fade AFTER header (matches header duration)

		// Cleanup timers
		return () => {
			clearTimeout(headerTimer);
			clearTimeout(buttonTimer);
		};
	}, []);

	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate("/HomePage");
	};

	return (
		<div id="landing-page">
			<h1 style={{ opacity: showHeader ? 1 : 0, transition: "opacity 1s ease-in-out" }}>
				Web Design Made Simple
			</h1>
			<button
				onClick={handleNavigate}
				style={{
					opacity: showButton ? 1 : 0,
					transition: "opacity 1s ease-in-out",
				}}
			>
				Begin Your Journey
			</button>
		</div>
	);
};

export default LandingPage;
