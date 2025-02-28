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
	["What is the internet?", "How data travels across the web", "Purpose of the browser"],
	[
		[
			"The internet is the common virtual space and platform where all of todays modern day communication unfolds.",
			"Under the hood it is really just a global network of interconnected computers that exchange data.",
			"Data exchange's typically follow certain procedures called standardized communication protocols.",
			"These communication protocols are important to ensure data security and assurances of intact delivery.",
			"An additional look deeper down would reveal that this data exchange occurs through real life physical infrastructure.",
			"Cables, routers, and satellites are essentially the true backbone of the internet, providing the mediums for which data exchange can occur.",
		],
		[
			"Whenever your browser wants to load a webpage, it creates a request and places it into something called a packet.",
			"It then sends out this packet for it to travel across networks of connected devices which use routing algorithms to direct each packet toward its final destination.",
			"Once the packet reaches its destination (the web server hosting the website), the server processes the request and either sends back the data requested, an error, or nothing at all.",
			"If the data sent back is quite large, we usually break it down into smaller chunks - called packets.",
			"Breaking data down into packets helps create a more efficient and reliable transmission of data",
			"Once your browser receives these packets, it reassembles them in the correct order and reconstructs the complete response.",
			"Your browser then reads over the data and renders the content into the webpage you see before you.",
		],
		[
			"As mentioned before the browser is responsible for requesting data, reassembling it, and displaying it.",
			"However the browser also does a whole lot more than just that.",
			"It also is responsible for running the javascript that powers websites, handling user interactions, managing local data, and ensuring security.",
			"As a little side note, the HTTP and HTTPS in the search panel you see often is actually the communication protocol all devices use to retrieve web pages and other associated resources.",
			"So any time you see HTTP or HTTPS, just think of it as 'This is just my device attempting to fetch a web resource.'",
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
	//Controls the opacity of the entire page
	const [opacity, setOpacity] = useState(0);

	//Keeps track of what page / lesson we are currently rendering / showing
	const [currentIndex, setCurrentIndex] = useState(0);

	//Used to automatically adjust the view if new content is lengthy
	const contentEndRef = useRef(null);

	//Use effect to apply the opacity fade in affect to the page
	useEffect(() => {
		const timer = setTimeout(() => {
			setOpacity(1);
		}, 10);
		return () => clearTimeout(timer); // Cleanup timer
	}, []);

	//Function to handle the button click to view the next piece of content
	const handleNext = () => {
		//The min is used here to avoid accidental overflow
		setCurrentIndex((prev) => Math.min(prev + 1, LessonOne[1].length - 1));
		//Smooth transition effect
		setTimeout(() => {
			contentEndRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 500);
	};

	//Function to handle if we want to go back to the previous piece of content
	const handleBack = () => {
		//Max is used here to prevent accidental underflow
		setCurrentIndex((prev) => Math.max(prev - 1, 0));
		//Smooth transition effect
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
