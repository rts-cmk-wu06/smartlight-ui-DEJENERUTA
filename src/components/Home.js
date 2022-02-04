import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Avatar from "@material-ui/core/Avatar";
import ButtonComponent from "./ButtonComponent";
import profileImage from "../assets/profile.jpg";
import bedImage from "../assets/bed.svg";
import livingStaff from "../assets/room.svg";
import kitchenStaff from "../assets/kitchen.svg";
import bathStaff from "../assets/bathtube.svg";
import outDoor from "../assets/house.svg";
import balconyStaff from "../assets/balcony.svg";

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
				<h2 className="control-panel  text-white">
					Control <span className="Panel block">Panel</span>
				</h2>

				<Avatar
					className="b-1 rounded-full p-8"
					src={profileImage}
					style={{ width: "100px", height: "100px" }}
					alt="profile"
				/>
			</motion.div>
			<motion.div
				className="white-panel bg-gray rounded-t-3xl"
				initial="initial"
				animate="in"
				exit="out"
				variants={whitePanelVariants}
				transition={pageTransition}
			>
				<h1 className="home-title p-8">All Rooms</h1>
				<nav className="nav">
					<ul className="ul flex gap-10 p-3">
						<li>
							<Link to="/room">
								<ButtonComponent
									image={bedImage}
									title="Bed room"
									description="4 Lights"
								/>
							</Link>
						</li>
						<li>
							<Link to="/room">
								<ButtonComponent
									image={livingStaff}
									title="Living room"
									description="2 Lights"
								/>
							</Link>
						</li>
						<li>
							<Link to="/room">
								<ButtonComponent
									image={kitchenStaff}
									title="Kitchen"
									description="5 Lights"
								/>
							</Link>
						</li>
					</ul>
					<ul className="second-ul flex gap-10 mt-5 p-3">
						<li>
							<Link to="/room">
								<ButtonComponent
									image={bathStaff}
									title="Bath room"
									description="1 Lights"
								/>
							</Link>
						</li>
						<li>
							<Link to="/room">
								<ButtonComponent
									image={outDoor}
									title="Outdoor"
									description="5 Lights"
								/>
							</Link>
						</li>
						<li>
							<Link to="/room">
								<ButtonComponent
									image={balconyStaff}
									title="Balcony"
									description="2 Lights"
								/>
							</Link>
						</li>
					</ul>
				</nav>
			</motion.div>
		</>
	);
};

export default Home;
