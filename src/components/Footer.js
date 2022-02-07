import React from "react";
import IconComponent from "./IconComponent";
import bulb from "../assets/bulb.svg";
import home from "../assets/home.svg";
import settings from "../assets/settings.svg";

const Footer = () => {
	return (
		<footer className="footer flex justify-center gap-20 items-center align-middle">
			<IconComponent icon={bulb} />
			<IconComponent icon={home} />
			<IconComponent icon={settings} />
		</footer>
	);
};

export default Footer;
