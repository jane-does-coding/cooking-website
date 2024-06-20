import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";
import RecipeCardActions from "../Recipes/RecipeCardActions";

const RecipeHeader = () => {
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
				<p className="text-[1.15rem]">Lorem Ipsum</p>
				<p className="text-[1rem] text-neutral-400 jura">July 15th, 2024</p>
			</div>
			<RecipeCardActions likes={[12, 12, 1232]} saved={[12, 12, 1232]} />
		</div>
	);
};

export default RecipeHeader;
