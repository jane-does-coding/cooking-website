import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";
import RecipeCardActions from "../Recipes/RecipeCardActions";
import { IoPeople } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";

const RecipeHeader = ({ recipe, currentUser }: any) => {
	const createdAt = new Date(recipe.createdAt);

	const categoryName = recipe.category
		.split("-")
		.map(
			(word: any) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
		)
		.join(" ");

	const formattedDate = createdAt.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<div className="flex flex-col mb-6">
			<div className="my-2 mb-2 flex items-center justify-between pr-2">
				<div className="flex gap-4 items-center justify-center">
					<Avatar>
						<AvatarImage
							src="/avatar.png"
							alt="@shadcn"
							className="object-cover"
						/>
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<div>
						<p className="text-[1.15rem]">{recipe.user.username}</p>
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
			<div className="pt-2 mt-0 border-t-[1px] border-neutral-700 flex items-center justify-between">
				<div className="jura text-[1.5rem]">{categoryName}</div>
				<div className="flex gap-4 my-2">
					<div className="flex gap-2 bg-neutral-800 p-2 px-4 text-sm items-center justify-center rounded-full">
						<IoPeople size={24} />
						{recipe.servingSize} people
					</div>
					<div className="flex gap-2 bg-neutral-800 p-2 px-4 text-sm items-center justify-center rounded-full">
						<IoIosTimer size={24} />
						{recipe.expectedTime}
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecipeHeader;
