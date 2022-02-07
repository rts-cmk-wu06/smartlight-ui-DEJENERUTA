import React from "react";
import profileImage from "../assets/profile.jpg";

const Avatar = () => {
	return (
		<div style={{ width: "48px", height: "48px", position: "relative" }}>
			<img
				className=" rounded-full"
				src={profileImage}
				style={{ width: "100%", height: "100%", border: "2px solid white" }}
				alt="profile"
			/>
			<div
				style={{
					position: "absolute",
					width: "10px",
					height: "10px",
					backgroundColor: "#FF9898",
					top: "2px",
					right: "2px",
					borderRadius: "50%",
				}}
			></div>
		</div>
	);
};

export default Avatar;
