import getCurrentUser from "@/app/actions/getCurrentUser";
import getRecipes from "@/app/actions/getRecipes";
import CardsGrid from "@/app/components/Recipes/CardsGrid";
import CategoriesGrid from "@/app/components/Recipes/CategoriesGrid";
import React from "react";

const page = async () => {
	/* FETCH RECIPES */
	const recipes = await getRecipes();
	const currentUser = await getCurrentUser();
	/* 	console.log(recipes);
	 */
	return (
		<div className="pt-10">
			<h1 className="text-[3.5rem] mx-auto mb-8 w-fit text-center text-white slovensko">
				Explore Recipes
			</h1>
			<CategoriesGrid />
			<CardsGrid recipes={recipes} currentUser={currentUser} />
		</div>
	);
};

export default page;
