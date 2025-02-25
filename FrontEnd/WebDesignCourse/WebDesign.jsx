/** @format */

// Library Imports
import React, { useEffect, useState } from "react";

// CSS Import
import "./WebDesign.css";

const WebDesign = () => {
	const [opacity, setOpacity] = useState(0);

	useEffect(() => {
		// Set opacity to 1 after component mounts to trigger transition
		const timer = setTimeout(() => {
			setOpacity(1);
		}, 10); // Ensures effect applies AFTER initial render

		return () => clearTimeout(timer); // Cleanup timer
	}, []);

	return <div id="web-design" style={{ opacity, transition: "opacity 1.5s ease-in-out" }}></div>;
};

export default WebDesign;
