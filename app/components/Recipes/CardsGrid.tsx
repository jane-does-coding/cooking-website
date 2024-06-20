"use client";
import React from "react";
import { motion } from "framer-motion";
import RecipeCard from "./RecipeCard";

const CardsGrid = ({ recipes }: any) => {
	const numberOfCards = 20;

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
	/* 
	const recipe = {
		id: 23232,
		userId: 32423,
		title: "Recipe 1",
		oneline: "Really nice recipe!",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, impedit?",
		ingredients: [
			{ name: "Sugar", amount: "1 tbs" },
			{ name: "Starwberries", amount: "1 cup" },
			{ name: "Milk", amount: "1 cup" },
			{ name: "Ice Cream", amount: "1 scoop" },
		],
		steps: ["", ""],
		extraInfo: "",
		servingSize: 1,
		expectedTime: "",
		category: "",
		likes: [3232, 4324234, 2342342, 343],
		saved: [3232, 4324234, 2342342, 343, 324234, 3423423, 3423],
		createdAt: "",
	};
 */
	return (
		<div className="w-[96vw] mx-auto ml-[2vw] md:w-[90vw] md:ml-[5vw] gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{recipes.map((recipe: any, index: any) => (
				<motion.div
					key={index}
					custom={index}
					initial="hidden"
					animate="visible"
					variants={cardVariants}
				>
					<RecipeCard recipe={recipe} />
				</motion.div>
			))}
		</div>
	);
};

export default CardsGrid;
