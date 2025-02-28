/** @format */

// Library Imports
import React, { useEffect, useState, useRef } from "react";

//Component Imports
import { NavigationBar } from "../../NavigationBar/NavigationBar";

// CSS Import
import "./WebDesignLessonOne.css";

//Can put the Lessons in JSON files but for now are consts here

const LessonOne = [
	["Lesson 1.1: Introduction to the Internet"],
	[
		"What is the internet?",
		"Basic networking concepts and protocols",
		"How data travels across the web",
		"Purpose of the browser",
	],
	[
		[
			"The internet is the common virtual space and platform where all of todays modern day communication unfolds.",
			"Under the hood it is really just a global network of interconnected computers that exchange data.",
			"Data exchange's typically follow certain procedures called standardized communication protocols.",
			"These communication protocols are important to ensure data security and assurances of intact delivery.",
			"An additional look deeper down would reveal that this data exchange occurs through real life physical infrastructure.",
			"Cables, routers, and satellites are essentially the true backbone of the internet, providing the mediums for which data exchange can occur",
		],
		[
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		],
		[
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"123",
			"123",
			"123",
			"123",
		],
		[
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"123",
		],
	],
];

const LessonTwo = [
	["Lesson 1.2: Webpages vs. Websites"],
	[
		"Defining a webpage as a single document",
		"Understanding a website as a collection of interconnected webpages",
		"Real world examples and basic navigation concepts",
	],
	[
		["123", "123", "123"],
		["123", "123"],
		["123", "123", "123", "123", "123", "123"],
	],
];

const LessonThree = [
	["Lesson 1.3: How Websites Work – The Client-Server Model"],
	[
		"Overview of client server architecture",
		"How browsers send requests and servers respond",
		"Introduction to HTTP/HTTPS protocols and basic security considerations",
	],
	[
		["123", "123", "123"],
		["123", "123"],
		["123", "123", "123", "123", "123", "123"],
	],
];

const WebDesignLessonOne = () => {
	const [opacity, setOpacity] = useState(0); //Controls the opacity of the entire page

	//Keeps track of how many sections of content should be rendered. Initially 1 section.
	const [currentIndex, setCurrentIndex] = useState(0);

	const contentEndRef = useRef(null);

	useEffect(() => {
		// Set opacity to 1 after component mounts to trigger transition
		const timer = setTimeout(() => {
			setOpacity(1);
		}, 10); // Ensures effect applies AFTER initial render

		return () => clearTimeout(timer); // Cleanup timer
	}, []);

	//Basically increments renderedContent. The min is to ensure we do not exceed max length
	const handleNext = () => {
		setCurrentIndex((prev) => Math.min(prev + 1, LessonOne[1].length - 1));
		setTimeout(() => {
			contentEndRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 500);
	};

	// Move to the previous section (if available)
	const handleBack = () => {
		setCurrentIndex((prev) => Math.max(prev - 1, 0));
		setTimeout(() => {
			contentEndRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 500);
	};

	return (
		<div id="web-design-lesson-one" style={{ opacity, transition: "opacity 1.5s ease-in-out" }}>
			<NavigationBar />
			<div id="all-lessons-container">
				<div className="lesson">
					{/* Main Header */}
					<h1 className="fade-word-effect" style={{ animationDelay: "0.2s" }}>
						{LessonOne[0][0]}
					</h1>
					{/* Current Section Content */}
					<div
						className="fade-word-effect"
						style={{
							animationDelay: "1.5s",
							transition: "opacity 1s ease-in-out",
						}}
					>
						<h2>{LessonOne[1][currentIndex]}</h2>
						<p>
							{LessonOne[2][currentIndex].map((line, i) => (
								<React.Fragment key={i}>
									{line}
									<br />
									<br />
								</React.Fragment>
							))}
						</p>
					</div>
					<div ref={contentEndRef} />
				</div>
				<div id="button-containers">
					{/* Show Back button if not on the first section */}
					{currentIndex > 0 && <button onClick={handleBack}>Back</button>}
					{/* Show Next button if not on the last section */}
					{currentIndex < LessonOne[1].length - 1 && <button onClick={handleNext}>Next</button>}
				</div>
			</div>
		</div>
	);
};

export default WebDesignLessonOne;
