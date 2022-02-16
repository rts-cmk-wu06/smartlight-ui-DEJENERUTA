import React from "react";
import { motion } from "framer-motion";
const LightComponent = ({ image, txt }) => {
	const headerVariant = {
		hidden: {
			opacity: 0,
			x: "100vw",
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: { type: "tween", delay: 0.5 },
		},
		exit: {
			x: "-100vh",
			transition: { ease: "easeInOut" },
		},
	};
	return (
		<motion.div
			className="light-container flex items-center justify-center  bg-white text-lightblue pl-8 pr-8 rounded-xl gap-2"
			variants={headerVariant}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<img src={image} alt="light" />
			<p className="text-sm whitespace-nowrap">{txt}</p>
		</motion.div>
	);
};

export default LightComponent;
