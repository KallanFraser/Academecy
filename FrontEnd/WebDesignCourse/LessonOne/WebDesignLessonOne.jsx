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
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
	const [renderedContent, setRenderedContent] = useState(1);

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
		setRenderedContent((prev) => Math.min(prev + 1, LessonOne[1].length));
		setTimeout(() => {
			contentEndRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 500);
	};

	return (
		<div id="web-design-lesson-one" style={{ opacity, transition: "opacity 1.5s ease-in-out" }}>
			<NavigationBar />
			<div id="all-lessons-container">
				{/*Future code here to determine which lesson is shown*/}
				{/*Current Lesson = AllLessonsArray[i++]*/}
				<div className="lesson">
					{/*Rendering the Main Header*/}
					<h1 className="fade-word-effect" style={{ animationDelay: "0.2s" }}>
						{LessonOne[0][0]}
					</h1>
					{/*Rendering sub Header + its paragraphs*/}
					{/*the opacity line ensures content starts w opacity 0 and fades in*/}
					{LessonOne[1].slice(0, renderedContent).map((heading, index) => (
						<div
							key={index}
							className="fade-word-effect"
							style={{
								animationDelay: "1s",
								opacity: renderedContent - 1 === index ? 0 : 1,
								transition: "opacity 1s ease-in-out",
							}}
						>
							<h2>{heading}</h2>
							<p>{LessonOne[2][index].join(" ")}</p>
						</div>
					))}
					<div ref={contentEndRef} />
				</div>
				<button id="next-button" onClick={handleNext}>
					Next
				</button>
			</div>
			{/*Future button here to handle next lesson click*/}
		</div>
	);
};

export default WebDesignLessonOne;
