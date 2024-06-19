import React from "react";
import RecipeDetails from "./RecipeDetails";
import Recommended from "./Recommended";

const Recipe = () => {
	return (
		<div className="flex w-[90vw] h-screen overflow-auto mx-auto items-center justify-center">
			<RecipeDetails />
			<Recommended />
		</div>
	);
};

export default Recipe;
