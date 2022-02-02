import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Room from "./components/Room";
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();
	return (
		<>
			<AnimatePresence exitBeforeEnter>
				<Routes location={location} key={location.pathname}>
					<Route path="/room" element={<Room />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</AnimatePresence>
			<Footer />
		</>
	);
}

export default App;
