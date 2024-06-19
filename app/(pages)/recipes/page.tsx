import CardsGrid from "@/app/components/Recipes/CardsGrid";
import CategoriesGrid from "@/app/components/Recipes/CategoriesGrid";
import React from "react";

const page = () => {
	/* FETCH RECIPES */

	return (
		<div className="pt-10">
			<h1 className="text-[3.5rem] mx-auto mb-8 w-fit text-center text-white slovensko">
				Explore Recipes
			</h1>
			<CategoriesGrid />
			<CardsGrid />
		</div>
	);
};

export default page;
