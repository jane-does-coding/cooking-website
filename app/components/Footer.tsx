import React from "react";

const Footer = () => {
	return (
		<div className="p-4 md:px-24 bg-neutral-900/50 backdrop-blur-md w-full flex items-center justify-between">
			<h3 className="slovensko text-[1.15rem]">Recipes</h3>
			<div className=" gap-8 text-neutral-400 hidden md:flex">
				<a href="/">Recipes</a>
				<a href="/">Explore Latest</a>
				<a href="/">About us</a>
			</div>
		</div>
	);
};

export default Footer;
