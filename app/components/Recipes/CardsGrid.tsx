"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import RecipeCard from "./RecipeCard";
import { Pagination } from "@/components/ui/pagination";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"; // Ensure these are correctly imported

const CardsGrid = ({
	recipes,
	currentUser,
}: {
	recipes: any;
	currentUser: any;
}) => {
	const itemsPerPage = 20; // Adjust this number based on your preference
	const [currentPage, setCurrentPage] = useState(1);
	const [timeFilter, setTimeFilter] = useState("");
	const [servingFilter, setServingFilter] = useState("");

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

	const filterRecipes = () => {
		return recipes.filter((recipe: any) => {
			let timeMatch = true;
			if (timeFilter) {
				const time = parseInt(recipe.expectedTime);
				switch (timeFilter) {
					case "<15":
						timeMatch = time < 15;
						break;
					case "15-30":
						timeMatch = time >= 15 && time <= 30;
						break;
					case "30-60":
						timeMatch = time >= 30 && time <= 60;
						break;
					case "60-90":
						timeMatch = time >= 60 && time <= 90;
						break;
					case "90-120":
						timeMatch = time >= 90 && time <= 120;
						break;
					case "120+":
						timeMatch = time > 120;
						break;
					default:
						timeMatch = true;
				}
			}

			let servingMatch = true;
			if (servingFilter) {
				const servings = recipe.servingSize;
				switch (servingFilter) {
					case "<3":
						servingMatch = servings < 3;
						break;
					case "3-5":
						servingMatch = servings >= 3 && servings <= 5;
						break;
					case "5-8":
						servingMatch = servings >= 5 && servings <= 8;
						break;
					case "8-10":
						servingMatch = servings >= 8 && servings <= 10;
						break;
					case "10+":
						servingMatch = servings > 10;
						break;
					default:
						servingMatch = true;
				}
			}

			return timeMatch && servingMatch;
		});
	};

	const filteredRecipes = filterRecipes();

	if (!filteredRecipes || filteredRecipes.length === 0) {
		return <div>No recipes to display.</div>;
	}

	const startIndex = (currentPage - 1) * itemsPerPage;
	const currentRecipes = filteredRecipes.slice(
		startIndex,
		startIndex + itemsPerPage
	);
	const totalPages = Math.ceil(filteredRecipes.length / itemsPerPage);

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage);
	};

	const handleTimeFilterChange = (value: string) => {
		setTimeFilter(value);
	};

	const handleServingFilterChange = (value: string) => {
		setServingFilter(value);
	};

	return (
		<>
			<div className="flex justify-start items-center w-[90vw] mx-auto gap-6 mb-6">
				<div className=" relative my-1 flex items-center justify-center">
					<Select onValueChange={handleTimeFilterChange}>
						<SelectTrigger className=" bg-neutral-800/75 border-2 border-neutral-800/75 ring-neutral-800 focus:ring-neutral-800 border-none focus:border-none outline-none focus:outline-none text-white px-8 py-2 h-full rounded-full">
							<SelectValue placeholder="Select time" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Time to Make</SelectLabel>
								<SelectItem value="<15">Less than 15 min</SelectItem>
								<SelectItem value="15-30">15-30 min</SelectItem>
								<SelectItem value="30-60">30-60 min</SelectItem>
								<SelectItem value="60-90">60-90 min</SelectItem>
								<SelectItem value="90-120">1:30-2:00</SelectItem>
								<SelectItem value="120+">More than 2 hours</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				<div className=" relative my-1 flex items-center justify-center">
					<Select onValueChange={handleServingFilterChange}>
						<SelectTrigger className=" bg-neutral-800/75 border-2 border-neutral-800/75 ring-neutral-800 focus:ring-neutral-800 border-none focus:border-none outline-none focus:outline-none text-white px-8 py-2 h-full rounded-full">
							<SelectValue placeholder="Select serving size" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Serving Size</SelectLabel>
								<SelectItem value="<3">Less than 3</SelectItem>
								<SelectItem value="3-5">3-5</SelectItem>
								<SelectItem value="5-8">5-8</SelectItem>
								<SelectItem value="8-10">8-10</SelectItem>
								<SelectItem value="10+">More than 10</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
			</div>

			<div className="w-[96vw] mx-auto ml-[2vw] md:w-[90vw] md:ml-[5vw] gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{currentRecipes.map((recipe: any, index: any) => (
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
