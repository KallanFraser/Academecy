/** @format */

import React, { StrictMode } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";

import "./main.css";

import LandingPage from "./LandingPage/LandingPage";
import HomePage from "./HomePage/HomePage";

import WebDesign from "./WebDesignCourse/WebDesign";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/HomePage" element={<HomePage />} />
				<Route path="/WebDesign" element={<WebDesign />} />
			</Routes>
		</Router>
	</StrictMode>
);
