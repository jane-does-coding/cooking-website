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
import RecipeCardActions from "./RecipeCardActions";
import { motion } from "framer-motion"; // Import Framer Motion

const fadeInVariant = {
	hidden: { opacity: 0, y: 20 },
	visible: (index: any) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: index * 0.09, // Stagger delay
			duration: 0.5, // Animation duration
		},
	}),
};

export default function RecipeCard() {
	return (
		<Card className="w-full">
			<motion.div
				initial="hidden"
				animate="visible"
				custom={0} // Custom index for staggered delay
				variants={fadeInVariant}
			>
				<CardHeader>
					<motion.div
						initial="hidden"
						animate="visible"
						custom={1}
						variants={fadeInVariant}
					>
						<CardTitle>Create project</CardTitle>
					</motion.div>
					<motion.div
						initial="hidden"
						animate="visible"
						custom={2}
						variants={fadeInVariant}
					>
						<CardDescription>
							Deploy your new project in one-click.
						</CardDescription>
					</motion.div>
				</CardHeader>
			</motion.div>

			<motion.div
				initial="hidden"
				animate="visible"
				custom={3}
				variants={fadeInVariant}
			>
				<CardContent>
					<img src="/banner4.jpeg" className="rounded-lg" alt="" />
				</CardContent>
			</motion.div>

			<motion.div
				initial="hidden"
				animate="visible"
				custom={4}
				variants={fadeInVariant}
			>
				<CardFooter className="flex justify-between">
					<motion.div
						initial="hidden"
						animate="visible"
						custom={5}
						variants={fadeInVariant}
					>
						<RecipeCardActions />
					</motion.div>
					<motion.div
						initial="hidden"
						animate="visible"
						custom={6}
						variants={fadeInVariant}
						className="flex gap-4 items-center"
					>
						<Button variant="outline">Share</Button>
						<Button>View</Button>
					</motion.div>
				</CardFooter>
			</motion.div>
		</Card>
	);
}
