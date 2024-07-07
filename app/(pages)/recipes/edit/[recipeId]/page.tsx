import React from "react";
import EditRecipe from "@/app/components/CreateRecipe/EditRecipe";
import getRecipeById from "@/app/actions/getRecipeById";

const Page = async ({ params }: { params: { recipeId: string } }) => {
	const recipe = await getRecipeById(params);

	return (
		<div>
			<EditRecipe recipeId={params.recipeId} recipe={recipe} />
		</div>
	);
};

export default Page;
