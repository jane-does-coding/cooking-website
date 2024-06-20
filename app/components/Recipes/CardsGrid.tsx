"use client";
import React from "react";
import { motion } from "framer-motion";
import RecipeCard from "./RecipeCard";

const CardsGrid = () => {
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

	return (
		<div className="w-[96vw] mx-auto ml-[2vw] md:w-[90vw] md:ml-[5vw] gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{Array.from({ length: numberOfCards }).map((_, index) => (
				<motion.div
					key={index}
					custom={index}
					initial="hidden"
					animate="visible"
					variants={cardVariants}
				>
					<RecipeCard />
				</motion.div>
			))}
		</div>
	);
};

export default CardsGrid;
