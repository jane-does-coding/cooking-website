import getRecipeById from "@/app/actions/getRecipeById";
import Recipe from "@/app/components/Recipe/Recipe";
import React from "react";

const page = async (props: any) => {
	console.log(props);
	const { params } = props;
	const { recipeId } = params;
	const recipe = await getRecipeById(recipeId);
	console.log(params);

	console.log(recipe);
	return (
		<div>
			<Recipe />
		</div>
	);
};

export default page;
