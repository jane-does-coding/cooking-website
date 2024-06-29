import getCurrentUser from "@/app/actions/getCurrentUser";
import getRecipeById from "@/app/actions/getRecipeById";
import Recipe from "@/app/components/Recipe/Recipe";
import React from "react";

const page = async (props: any) => {
	const { params } = props;
	const recipe = await getRecipeById(params);
	const currentUser = await getCurrentUser();
	return (
		<div>
			<Recipe recipe={recipe} currentUser={currentUser} />
		</div>
	);
};

export default page;
