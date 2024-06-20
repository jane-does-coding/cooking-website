import getRecipes from "@/app/actions/getRecipes";
import CardsGrid from "@/app/components/Recipes/CardsGrid";
import CategoriesGrid from "@/app/components/Recipes/CategoriesGrid";
import React from "react";

const page = async () => {
	/* FETCH RECIPES */
	const recipes = await getRecipes();
	console.log(recipes);

	return (
		<div className="pt-10">
			<h1 className="text-[3.5rem] mx-auto mb-8 w-fit text-center text-white slovensko">
				Explore Recipes
			</h1>
			<CategoriesGrid />
			<CardsGrid recipes={recipes} />
		</div>
	);
};

export default page;
