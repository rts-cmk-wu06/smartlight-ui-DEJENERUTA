import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Avatar from "@material-ui/core/Avatar";

const headerVariants = {
	in: {
		height: "calc(200% / 13)",
	},
	initial: {
		height: "calc(400% / 13)",
	},
};
const whitePanelVariants = {
	in: {
		height: "calc(1000% / 13)",
	},
	initial: {
		height: "calc(800% / 13)",
	},
};

const pageTransition = {
	type: "tween",
	ease: "anticipate",
	duration: 0.5,
};
const Home = () => {
	return (
		<>
			<motion.div
				className="home-header flex justify-between p-8"
				initial="initial"
				animate="in"
				exit="out"
				variants={headerVariants}
				transition={pageTransition}
			>
				<h2 className="control-panel  text-white  ">
					Control <span className="Panel block">Panel</span>
				</h2>
				<Avatar
					className=" mr-7 p-5"
					alt="Dejened"
					src="/static/images/avatar/1.jpg"
				/>
			</motion.div>
			<motion.div
				className="white-panel bg-gray rounded-md"
				initial="initial"
				animate="in"
				exit="out"
				variants={whitePanelVariants}
				transition={pageTransition}
			>
				<nav className="nav">
					<ul>
						<li>
							<Link to="/room">Bedroom</Link>
						</li>
						<li>
							<Link to="/room">Living Room</Link>
						</li>
						<li>
							<Link to="/room">Kitchen</Link>
						</li>
						<li>
							<Link to="/room">Bathroom</Link>
						</li>
						<li>
							<Link to="/room">Outdoor</Link>
						</li>
						<li>
							<Link to="/room">Balcony</Link>
						</li>
					</ul>
				</nav>
			</motion.div>
		</>
	);
};

export default Home;
