"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import RecipeCard from "./RecipeCard";
import ListRecipeCard from "./ListRecipeCard";
import { Pagination } from "@/components/ui/pagination";
import { CiBoxList } from "react-icons/ci";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { CiGrid41 } from "react-icons/ci";

const CardsGrid = ({ recipes, currentUser, showFilters }: any) => {
	const itemsPerPage = 15;
	const [currentPage, setCurrentPage] = useState(1);
	const [timeFilter, setTimeFilter] = useState("All");
	const [servingFilter, setServingFilter] = useState("All");
	const [searchQuery, setSearchQuery] = useState("");
	const [isListView, setIsListView] = useState(false);

	const router = useRouter();

	const filterRecipes = () => {
		return recipes.filter((recipe: any) => {
			let timeMatch =
				timeFilter === "All" || recipe.expectedTime === timeFilter;
			let servingMatch = true;
			if (servingFilter !== "All") {
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
			let searchMatch = recipe.title
				.toLowerCase()
				.includes(searchQuery.toLowerCase());

			return timeMatch && servingMatch && searchMatch;
		});
	};

	const handleReset = () => {
		setTimeFilter("All");
		setServingFilter("All");
		setCurrentPage(1);
		router.refresh();
	};

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

	const dropdownVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: (index: any) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.25 + index * 0.1,
				duration: 0.3,
			},
		}),
	};

	const toggleVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: (index: any) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.25 + index * 0.1,
				duration: 0.5,
			},
		}),
	};

	const filteredRecipes = filterRecipes();

	const startIndex = (currentPage - 1) * itemsPerPage;
	const currentRecipes = filteredRecipes.slice(
		startIndex,
		startIndex + itemsPerPage
	);
	const totalPages = Math.ceil(filteredRecipes.length / itemsPerPage);

	const handlePageChange = (newPage: any) => {
		setCurrentPage(newPage);
	};

	const handleTimeFilterChange = (value: any) => {
		setTimeFilter(value);
	};

	const handleServingFilterChange = (value: any) => {
		setServingFilter(value);
	};

	const toggleView = () => {
		setIsListView((prev) => !prev);
	};

	return (
		<div className="min-h-[50vh]">
			{showFilters ? (
				<div className="flex flex-col md:flex-row justify-start items-start md:items-center w-[90vw] mx-auto gap-2 md:gap-6 mb-6">
					<motion.div
						initial="hidden"
						animate="visible"
						variants={dropdownVariants}
						custom={0}
						className="w-full"
					>
						<input
							type="text"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							placeholder="Search recipes..."
							className="bg-neutral-800/75 border-2 border-neutral-800/75 ring-neutral-800 focus:ring-neutral-800 text-white px-4 py-2 rounded-full outline-none w-full"
						/>
					</motion.div>

					{[timeFilter, servingFilter].map((filter, index) => (
						<motion.div
							key={index}
							custom={index + 1}
							initial="hidden"
							animate="visible"
							variants={dropdownVariants}
							className="relative my-1 flex items-center justify-center md:w-1/3 w-full"
						>
							{index === 0 ? (
								<Select onValueChange={handleTimeFilterChange}>
									<SelectTrigger className="bg-neutral-800/75 border-2 border-neutral-800/75 ring-neutral-800 focus:ring-neutral-800 border-none focus:border-none outline-none focus:outline-none text-white px-8 py-[12px] h-full rounded-full w-full">
										<SelectValue placeholder="Select time" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Time to Make</SelectLabel>
											<SelectItem value="All">All</SelectItem>
											<SelectItem value="<15">Less than 15 min</SelectItem>
											<SelectItem value="15-30">15-30 min</SelectItem>
											<SelectItem value="30-60">30-60 min</SelectItem>
											<SelectItem value="60-90">60-90 min</SelectItem>
											<SelectItem value="90-120">90-120 min</SelectItem>
											<SelectItem value="120+">More than 2 hours</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							) : (
								<Select onValueChange={handleServingFilterChange}>
									<SelectTrigger className="bg-neutral-800/75 border-2 border-neutral-800/75 ring-neutral-800 focus:ring-neutral-800 border-none focus:border-none outline-none focus:outline-none text-white px-8 py-[12px] h-full rounded-full">
										<SelectValue placeholder="Select serving size" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Serving Size</SelectLabel>
											<SelectItem value="All">All</SelectItem>
											<SelectItem value="<3">Less than 3</SelectItem>
											<SelectItem value="3-5">3-5</SelectItem>
											<SelectItem value="5-8">5-8</SelectItem>
											<SelectItem value="8-10">8-10</SelectItem>
											<SelectItem value="10+">More than 10</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							)}
						</motion.div>
					))}

					<motion.button
						onClick={toggleView}
						className="bg-neutral-800/75 text-white px-4 py-2 rounded-full hidden md:flex"
						initial="hidden"
						animate="visible"
						variants={toggleVariants}
						custom={3}
					>
						{isListView ? <CiGrid41 size={28} /> : <CiBoxList size={28} />}
					</motion.button>
				</div>
			) : (
				""
			)}

			{filteredRecipes.length > 0 ? (
				<div
					className={`w-[96vw] mx-auto ml-[2vw] md:w-[90vw] md:ml-[5vw] gap-8 ${
						isListView ? "" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
					}`}
				>
					{isListView
						? currentRecipes.map((recipe: any, index: any) => (
								<motion.div
									key={index}
									custom={index}
									initial="hidden"
									animate="visible"
									variants={cardVariants}
								>
									<ListRecipeCard currentUser={currentUser} recipe={recipe} />
								</motion.div>
						  ))
						: currentRecipes.map((recipe: any, index: any) => (
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
			) : (
				<div className="gap-4">
					<h1 className="text-white w-full mx-auto text-center jura text-[3rem] mt-12 capitalize">
						nothing was found
					</h1>
					<p
						onClick={handleReset}
						className="jura text-neutral-400 cursor-pointer text-center mx-auto w-full text-[2rem] lowercase"
					>
						Reset
					</p>
				</div>
			)}

			{totalPages > 1 && (
				<div className="mt-4 flex justify-center mb-[5vh]">
					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={handlePageChange}
					/>
				</div>
			)}
		</div>
	);
};

export default CardsGrid;
