import React from "react";
import RecipeDetails from "./RecipeDetails";
import Recommended from "./Recommended";

const Recipe = ({ recipe, currentUser, comments }: any) => {
	return (
		<div className="flex w-[90vw] min-h-scree mx-auto items-center justify-center relative">
			<RecipeDetails
				currentUser={currentUser}
				comments={comments}
				recipe={recipe}
			/>
			<Recommended />
		</div>
	);
};

export default Recipe;
