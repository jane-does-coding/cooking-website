import getCurrentUser from "@/app/actions/getCurrentUser";
import getSavedRecipes from "@/app/actions/getSavedRecipes";
import Saved from "@/app/components/Saved/Saved";
import React from "react";

const page = async () => {
	const recipes = await getSavedRecipes();
	const currentUser = await getCurrentUser();

	console.log(recipes);
	return (
		<div>
			<Saved currentUser={currentUser} recipes={recipes} />
		</div>
	);
};

export default page;
