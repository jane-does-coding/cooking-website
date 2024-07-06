"use client";
import React from "react";
import { motion } from "framer-motion";
import Recommendation from "./Recommendation";
import AnimatedTextWord from "../Text/AnimatedTextWord";

const Recommended = ({
	recommendedRecipes,
	currentUser,
	recipe: currentRecipe,
}: any) => {
	const numberOfRecommendations = 6;

	const recommendationVariants = {
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

	const h2Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<div className="w-[100vw] md:w-[25vw] xl:w-[30vw] p-4 pl-8 gap-4 border-l-0 md:border-l-2 border-neutral-800 h-fit md:h-screen overflow-auto md:fixed flex flex-col right-8 top-0">
			<motion.h2
				className="slovensko text-[2.5rem] my-4 text-center"
				initial="hidden"
				animate="visible"
				variants={h2Variants}
			>
				Similar
			</motion.h2>
			{recommendedRecipes.length < 2 ? (
				<AnimatedTextWord
					text={"nothing was found"}
					className="w-fit mx-auto jura text-[1.5rem] mt-4"
				/>
			) : (
				recommendedRecipes.map((recipe: any, index: any) => {
					if (recipe.id !== currentRecipe.id) {
						return (
							<motion.div
								key={index}
								custom={index}
								initial="hidden"
								animate="visible"
								variants={recommendationVariants}
								className="mb-4"
							>
								<Recommendation currentUser={currentUser} recipe={recipe} />
							</motion.div>
						);
					}
				})
			)}
			{}
		</div>
	);
};

export default Recommended;
