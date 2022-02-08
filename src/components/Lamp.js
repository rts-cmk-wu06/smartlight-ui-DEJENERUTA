import React from "react";

const Lamp = ({ color }) => {
	return (
		<div className="lamp-animation mr-8">
			<svg
				width="139"
				height="147"
				viewBox="0 0 139 147"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g filter="url(#filter0_d_1_1169)">
					<path
						d="M70 128C76.0751 128 81 123.075 81 117C81 110.925 76.0751 106 70 106C63.9249 106 59 110.925 59 117C59 123.075 63.9249 128 70 128Z"
						fill={color}
					/>
				</g>
				<path
					d="M30.334 53.617H109.388C112.702 53.617 113.594 55.941 115.388 59.617L139 114C139 115.591 138.368 117.117 137.243 118.243C136.117 119.368 134.591 120 133 120H6C4.4087 120 2.88258 119.368 1.75736 118.243C0.632141 117.117 0 115.591 0 114L24.334 59.617C25.837 56.237 27.02 53.617 30.334 53.617Z"
					fill="white"
				/>
				<path d="M72 -4H67V98H72V-4Z" fill="white" />
				<path
					opacity="0.151"
					d="M104.294 59.365C103.862 58.3477 102.687 57.8731 101.67 58.305C100.653 58.7369 100.178 59.9117 100.61 60.929L121.724 110.663C122.156 111.68 123.331 112.155 124.348 111.723C125.365 111.291 125.84 110.116 125.408 109.099L104.294 59.365Z"
					fill="#568BD0"
				/>
				<defs>
					<filter
						id="filter0_d_1_1169"
						x="43"
						y="93"
						width="54"
						height="54"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="3" />
						<feGaussianBlur stdDeviation="8" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 1 0 0 0 0 0.780392 0 0 0 0 0.184314 0 0 0 1 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_1_1169"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_1_1169"
							result="shape"
						/>
					</filter>
				</defs>
			</svg>
		</div>
	);
};

export default Lamp;
