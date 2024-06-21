import getRecipeById from "@/app/actions/getRecipeById";
import Recipe from "@/app/components/Recipe/Recipe";
import React from "react";

const page = async (props: any) => {
	const { params } = props;
	const recipe = await getRecipeById(params);
	return (
		<div>
			<Recipe recipe={recipe} />
		</div>
	);
};

export default page;
