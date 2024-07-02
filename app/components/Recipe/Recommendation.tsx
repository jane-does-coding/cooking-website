"use client";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import RecipeCardActions from "../Recipes/RecipeCardActions";

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

export default function Recommendation({ recipe, currentUser }: any) {
	const cardRef = useRef(null);
	const headerRef = useRef(null);
	const contentRef = useRef(null);
	const footerRef = useRef(null);

	const cardInView = useInView(cardRef, { once: true });
	const headerInView = useInView(headerRef, { once: true });
	const contentInView = useInView(contentRef, { once: true });
	const footerInView = useInView(footerRef, { once: true });

	const router = useRouter();

	if (!recipe || !recipe.id) {
		return <div>Invalid recipe data.</div>;
	}

	return (
		<Card className="w-full" ref={cardRef}>
			<motion.div
				ref={headerRef}
				initial="hidden"
				animate={cardInView ? "visible" : "hidden"}
				custom={0}
				variants={fadeInVariant}
			>
				<CardHeader>
					<motion.div
						initial="hidden"
						animate={headerInView ? "visible" : "hidden"}
						custom={1}
						variants={fadeInVariant}
					>
						<CardTitle>{recipe.title}</CardTitle>
					</motion.div>
					<motion.div
						initial="hidden"
						animate={headerInView ? "visible" : "hidden"}
						custom={2}
						variants={fadeInVariant}
					>
						<CardDescription>{recipe.oneline}</CardDescription>
					</motion.div>
				</CardHeader>
			</motion.div>

			<motion.div
				ref={contentRef}
				initial="hidden"
				animate={contentInView ? "visible" : "hidden"}
				custom={3}
				variants={fadeInVariant}
			>
				<CardContent>
					<img
						src={recipe.imageUrl}
						className="rounded-lg aspect-[3/2] w-full object-cover"
						alt=""
					/>
				</CardContent>
			</motion.div>

			<motion.div
				ref={footerRef}
				initial="hidden"
				animate={footerInView ? "visible" : "hidden"}
				custom={4}
				variants={fadeInVariant}
			>
				<CardFooter className="flex justify-between">
					<motion.div
						initial="hidden"
						animate={footerInView ? "visible" : "hidden"}
						custom={5}
						variants={fadeInVariant}
					>
						<RecipeCardActions
							currentUser={currentUser}
							recipeId={recipe.id}
							likes={recipe.likes}
							saved={recipe.saved}
						/>
					</motion.div>
					<motion.div
						initial="hidden"
						animate={footerInView ? "visible" : "hidden"}
						custom={6}
						variants={fadeInVariant}
						className="flex gap-4 items-center"
					>
						<Button variant="outline">Share</Button>
						<Button onClick={() => router.push(`/recipes/${recipe.id}`)}>
							View
						</Button>
					</motion.div>
				</CardFooter>
			</motion.div>
		</Card>
	);
}
