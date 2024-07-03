"use client";
import React from "react";
import RecipeCard from "../Recipes/RecipeCard";
import { motion } from "framer-motion";
import AnimatedTextCharacter from "../Text/AnimatedTextCharacter";
import CardsGrid from "../Recipes/CardsGrid";

const Saved = ({ recipes, currentUser }: any) => {
	if (!recipes || recipes.length < 1) {
		return (
			<h1 className="jura text-[3rem] pt-20 mx-auto w-fit h-[90vh]">
				No saved recipes
			</h1>
		);
	}
	return (
		<div className="min-h-screen pt-4">
			<h1 className="mx-auto mb-6 xl:mb-6 mt-0 slovensko w-fit">
				<AnimatedTextCharacter
					text={"Saved"}
					className="text-[2rem] xl:text-[3rem] leading-[6rem]"
				/>
			</h1>
			<CardsGrid recipes={recipes} currentUser={currentUser} />
		</div>
	);
};

export default Saved;
