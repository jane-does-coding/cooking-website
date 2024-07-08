"use client";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import ShareBtn from "./ShareBtn";
import RecipeCardActions from "./RecipeCardActions";
import { IoPeople } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { motion, useInView } from "framer-motion";

const fadeInVariant = {
	hidden: { opacity: 0, y: 20 },
	visible: (index: any) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: index * 0.06,
			duration: 0.5,
		},
	}),
};

const ListRecipeCard = ({ recipe, currentUser }: any) => {
	const router = useRouter();
	const cardRef = useRef(null);
	const headerRef = useRef(null);
	const contentRef = useRef(null);
	const footerRef = useRef(null);

	const cardInView = useInView(cardRef, { once: true });
	const headerInView = useInView(headerRef, { once: true });
	const contentInView = useInView(contentRef, { once: true });
	const footerInView = useInView(footerRef, { once: true });

	if (!recipe || !recipe.id) {
		return <div>Invalid recipe data.</div>;
	}

	return (
		<Card ref={cardRef} className="flex flex-col md:flex-row w-full p-4 mb-4">
			<motion.img
				src={recipe.imageUrl}
				className="w-full md:w-1/4 aspect-[3/2] rounded-lg object-cover mb-4 md:mb-0"
				alt=""
				initial="hidden"
				animate={cardInView ? "visible" : "hidden"}
				variants={fadeInVariant}
				custom={0}
			/>
			<div className="flex flex-col justify-center ml-4">
				<motion.div
					ref={headerRef}
					initial="hidden"
					animate={cardInView ? "visible" : "hidden"}
					variants={fadeInVariant}
					custom={1}
				>
					<CardHeader>
						<motion.div
							initial="hidden"
							animate={headerInView ? "visible" : "hidden"}
							variants={fadeInVariant}
							custom={2}
						>
							<CardTitle>{recipe.title}</CardTitle>
						</motion.div>
						<motion.div
							initial="hidden"
							animate={headerInView ? "visible" : "hidden"}
							variants={fadeInVariant}
							custom={3}
						>
							<CardDescription>{recipe.oneline}</CardDescription>
						</motion.div>
					</CardHeader>
				</motion.div>

				<motion.div
					ref={contentRef}
					initial="hidden"
					animate={cardInView ? "visible" : "hidden"}
					variants={fadeInVariant}
					custom={3}
				>
					<CardContent className="flex flex-col gap-2">
						<div className="flex gap-4 mb-2">
							<motion.div
								initial="hidden"
								animate={contentInView ? "visible" : "hidden"}
								variants={fadeInVariant}
								custom={4}
								className="flex gap-2 bg-neutral-800 p-1 px-6 text-sm items-center justify-center rounded-full w-fit"
							>
								<IoPeople size={24} />
								{recipe.servingSize} people
							</motion.div>
							<motion.div
								initial="hidden"
								animate={contentInView ? "visible" : "hidden"}
								variants={fadeInVariant}
								custom={5}
								className="flex gap-2 bg-neutral-800 p-1 px-6 text-sm items-center justify-center rounded-full w-fit"
							>
								<IoIosTimer size={24} />
								{recipe.expectedTime}
							</motion.div>
							<motion.div
								initial="hidden"
								animate={contentInView ? "visible" : "hidden"}
								variants={fadeInVariant}
								custom={6}
								className="flex gap-2 bg-neutral-800 p-1 px-6 text-sm items-center justify-center rounded-full w-fit"
							>
								<BiCategory strokeWidth={0.05} size={24} />
								{recipe.category}
							</motion.div>
						</div>
					</CardContent>
				</motion.div>

				<motion.div
					ref={footerRef}
					initial="hidden"
					animate={cardInView ? "visible" : "hidden"}
					variants={fadeInVariant}
					custom={7}
				>
					<CardFooter className="flex items-center gap-4">
						<ShareBtn recipe={recipe} />
						<Button onClick={() => router.push(`/recipes/${recipe.id}`)}>
							View
						</Button>
						<RecipeCardActions
							recipeId={recipe.id}
							likes={recipe.likes}
							saved={recipe.saved}
							currentUser={currentUser}
						/>
					</CardFooter>
				</motion.div>
			</div>
		</Card>
	);
};

export default ListRecipeCard;
