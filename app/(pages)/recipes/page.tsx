import getCurrentUser from "@/app/actions/getCurrentUser";
import getRecipes from "@/app/actions/getRecipes";
import CardsGrid from "@/app/components/Recipes/CardsGrid";
import CategoriesGrid from "@/app/components/Recipes/CategoriesGrid";
import AnimatedTextCharacter from "@/app/components/Text/AnimatedTextCharacter";
import React from "react";

const page = async () => {
	/* FETCH RECIPES */
	const recipes = await getRecipes();
	const currentUser = await getCurrentUser();
	/* 	console.log(recipes);
	 */
	return (
		<div className="pt-10">
			<AnimatedTextCharacter
				text="Explore Recipes"
				className="text-[3.5rem] mx-auto mb-8 w-fit text-center text-white slovensko"
			/>
			<CategoriesGrid />
			<CardsGrid recipes={recipes} currentUser={currentUser} />
		</div>
	);
};

export default page;
