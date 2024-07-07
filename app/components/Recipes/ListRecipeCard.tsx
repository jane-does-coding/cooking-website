"use client";
import React from "react";
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

const ListRecipeCard = ({ recipe, currentUser }: any) => {
	const router = useRouter();

	if (!recipe || !recipe.id) {
		return <div>Invalid recipe data.</div>;
	}

	return (
		<Card className="flex flex-col md:flex-row w-full p-4 mb-4">
			<img
				src={recipe.imageUrl}
				className="w-full md:w-1/4 aspect-[3/2] rounded-lg object-cover mb-4 md:mb-0"
				alt=""
			/>
			<div className="flex flex-col justify-between ml-4">
				<CardHeader>
					<CardTitle>{recipe.title}</CardTitle>
					<CardDescription>{recipe.oneline}</CardDescription>
				</CardHeader>
				<CardContent>
					<p>Cooking Time: {recipe.expectedTime}</p>
					<p>Serving Size: {recipe.servingSize}</p>
				</CardContent>
				<CardFooter className="flex justify-between">
					<Button onClick={() => router.push(`/recipes/${recipe.id}`)}>
						View
					</Button>
					{/* Add more actions if needed */}
				</CardFooter>
			</div>
		</Card>
	);
};

export default ListRecipeCard;
