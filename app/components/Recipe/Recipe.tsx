import React from "react";
import RecipeDetails from "./RecipeDetails";
import Recommended from "./Recommended";

const Recipe = ({ recipe, currentUser, comments, recommendedRecipes }: any) => {
	return (
		<div className="flex w-[90vw] min-h-scree mx-auto items-center justify-center relative">
			<RecipeDetails
				currentUser={currentUser}
				comments={comments}
				recipe={recipe}
			/>
			<Recommended
				currentUser={currentUser}
				recommendedRecipes={recommendedRecipes}
			/>
		</div>
	);
};

export default Recipe;
