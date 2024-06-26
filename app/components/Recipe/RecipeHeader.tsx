import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";
import RecipeCardActions from "../Recipes/RecipeCardActions";

const RecipeHeader = ({ recipe, currentUser }: any) => {
	const createdAt = new Date(recipe.createdAt);

	const formattedDate = createdAt.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<div className="my-2 mb-4 flex items-center justify-between pr-2">
			<div className="flex gap-4 items-center justify-center">
				<Avatar>
					<AvatarImage
						src="/banner5.jpeg"
						alt="@shadcn"
						className="object-cover"
					/>
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<div>
					<p className="text-[1.15rem]">Lorem Ipsum</p>
					<p className="text-[1rem] text-neutral-400 jura">{formattedDate}</p>
				</div>
			</div>
			<RecipeCardActions
				currentUser={currentUser}
				recipeId={recipe.id}
				likes={recipe.likes}
				saved={recipe.saved}
			/>
		</div>
	);
};

export default RecipeHeader;
