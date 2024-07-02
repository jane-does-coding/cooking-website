"use client";
import React from "react";
import RecipeCard from "../Recipes/RecipeCard";
import { motion } from "framer-motion";
import AnimatedTextCharacter from "../Text/AnimatedTextCharacter";
import CardsGrid from "../Recipes/CardsGrid";

const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (index: any) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: index * 0.1,
			duration: 0.5,
		},
	}),
};

const Saved = ({ recipes, currentUser }: any) => {
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
