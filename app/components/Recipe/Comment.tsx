import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

const Comment = ({ comment }: any) => {
	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		const options: any = {
			month: "long",
			day: "numeric",
			year: "numeric",
		};
		return date.toLocaleDateString("en-US", options);
	};

	return (
		<div>
			<div className="flex flex-col justify-start items-start pb-6 border-b-2">
				<div className="flex gap-4 items-center justify-center">
					<Avatar>
						<AvatarImage
							src="/avatar.png"
							alt="@shadcn"
							className="object-cover w-[3rem] h-[3rem] rounded-full"
						/>
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<p className="text-[1rem]">{comment.user.username}</p>
					<p className="text-[0.9rem] text-neutral-400 jura">
						{formatDate(comment.createdAt)}
					</p>
				</div>
				<p className="text-neutral-300 mt-2">{comment.content}</p>
			</div>
		</div>
	);
};

export default Comment;
