import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

const Comment = () => {
	return (
		<div>
			<div className="flex flex-col justify-start items-start pb-6 border-b-2">
				<div className="flex gap-4 items-center justify-center">
					<Avatar>
						<AvatarImage
							src="/banner5.jpeg"
							alt="@shadcn"
							className="object-cover w-[3rem] h-[3rem] rounded-full"
						/>
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<p className="text-[1rem]">Lorem Ipsum</p>
					<p className="text-[0.9rem] text-neutral-400 jura">July 15th, 2024</p>
				</div>
				<p className="text-neutral-300 mt-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sunt
					quis cupiditate omnis maiores minima reprehenderit est soluta cumque
					quos accusamus ad tempore ullam, magnam aperiam? Facere saepe dolore
					amet.
				</p>
			</div>
		</div>
	);
};

export default Comment;
