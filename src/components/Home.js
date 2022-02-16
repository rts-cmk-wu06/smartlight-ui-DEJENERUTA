import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Avatar from "./Avatar";
import ButtonComponent from "./ButtonComponent";

import bedImage from "../assets/bed.svg";
import livingStaff from "../assets/room.svg";
import kitchenStaff from "../assets/kitchen.svg";
import bathStaff from "../assets/bathtube.svg";
import outDoor from "../assets/house.svg";
import balconyStaff from "../assets/balcony.svg";
import * as Sentry from "@sentry/react";

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
				<h2 className="control-panel  text-white text-3xl">
					Control <span className="Panel block">Panel</span>
				</h2>

				<Avatar />
			</motion.div>
			<motion.div
				className="white-panel bg-gray rounded-t-3xl"
				initial="initial"
				animate="in"
				exit="out"
				variants={whitePanelVariants}
				transition={pageTransition}
			>
				<h1 className="home-title p-8 text-lg pb-0">All Rooms</h1>
				<nav className="nav">
					<ul className="ul  gap-8 p-8 grid grid-cols-2 place-content-center ">
						<li className="w-full">
							<Sentry.ErrorBoundary fallback={<p>An error occured</p>}>
								<Link className="block" to="/room">
									<ButtonComponent
										image={bedImage}
										title="Bed room"
										description="4 Lights"
									/>
								</Link>
							</Sentry.ErrorBoundary>
						</li>
						<li className="w-full">
							<Link className="block" to="/room">
								<ButtonComponent
									image={livingStaff}
									title="Living room"
									description="2 Lights"
								/>
							</Link>
						</li>
						<li className="w-full">
							<Link className="block" to="/room">
								<ButtonComponent
									image={kitchenStaff}
									title="Kitchen"
									description="5 Lights"
								/>
							</Link>
						</li>
						<li className="w-full">
							<Link className="block" to="/room">
								<ButtonComponent
									image={bathStaff}
									title="Bath room"
									description="1 Lights"
								/>
							</Link>
						</li>
						<li className="w-full">
							<Link className="block" to="/room">
								<ButtonComponent
									image={outDoor}
									title="Outdoor"
									description="5 Lights"
								/>
							</Link>
						</li>
						<li className="w-full">
							<Link className="block" to="/room">
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
