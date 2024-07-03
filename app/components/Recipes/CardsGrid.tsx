"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import RecipeCard from "./RecipeCard";
import { Pagination } from "@/components/ui/pagination";

const CardsGrid = ({
	recipes,
	currentUser,
}: {
	recipes: any[];
	currentUser: any;
}) => {
	const itemsPerPage = 20; // Adjust this number based on your preference
	const [currentPage, setCurrentPage] = useState(1);

	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: (index: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: index * 0.1,
				duration: 0.5,
			},
		}),
	};

	if (!recipes || recipes.length === 0) {
		return <div>No recipes to display.</div>;
	}

	const startIndex = (currentPage - 1) * itemsPerPage;
	const currentRecipes = recipes.slice(startIndex, startIndex + itemsPerPage);
	const totalPages = Math.ceil(recipes.length / itemsPerPage);

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage);
	};

	return (
		<>
			<div className="w-[96vw] mx-auto ml-[2vw] md:w-[90vw] md:ml-[5vw] gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{currentRecipes.map((recipe, index) => (
					<motion.div
						key={index}
						custom={index}
						initial="hidden"
						animate="visible"
						variants={cardVariants}
					>
						<RecipeCard currentUser={currentUser} recipe={recipe} />
					</motion.div>
				))}
			</div>
			{totalPages > 1 && (
				<div className="mt-4 flex justify-center mb-[5vh]">
					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={handlePageChange}
					/>
				</div>
			)}
		</>
	);
};

export default CardsGrid;
