import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const headerVariants = {
	in: {
		height: "calc(400% / 13)",
	},
	initial: {
		height: "calc(200% / 13)",
	},
};
const whitePanelVariants = {
	in: {
		height: "calc(800% / 13)",
	},
	initial: {
		height: "calc(1000% / 13)",
	},
};

const pageTransition = {
	type: "tween",
	ease: "anticipate",
	duration: 0.5,
};
const Room = () => {
	return (
		<>
			<motion.div
				initial="initial"
				animate="in"
				exit="out"
				variants={headerVariants}
				transition={pageTransition}
			>
				<Link className="back text-white" to="/">
					BedRoom
				</Link>
			</motion.div>
			<motion.div
				className="white-panel bg-white"
				initial="initial"
				animate="in"
				exit="out"
				variants={whitePanelVariants}
				transition={pageTransition}
			>
				<h1>BedRoom</h1>
			</motion.div>
		</>
	);
};

export default Room;
