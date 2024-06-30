import React, { useState } from "react";
import axios from "axios";
import AnimatedTextWord from "../Text/AnimatedTextWord";
import { useRouter } from "next/navigation";

const CreateComment = ({ recipeId }: any) => {
	const [isLoading, setIsLoading] = useState(false);
	const [comment, setComment] = useState("");
	const router = useRouter();

	const handleCommentSubmit = async () => {
		try {
			setIsLoading(true);
			const response = await axios.post("/api/createComment", {
				recipeId,
				content: comment,
			});
			console.log("Comment created successfully:", response.data);
			router.refresh();
		} catch (error) {
			console.error("Error creating comment:", error);
		} finally {
			setIsLoading(false);
			setComment("");
		}
	};

	return (
		<div className="mb-12">
			<AnimatedTextWord
				className=" text-white mx-auto jura w-fit text-[2.25rem] text-center flex items-center justify-center mb-6"
				text={"Comment"}
			/>
			<div className="w-full relative h-full">
				<textarea
					rows={2}
					id="comment"
					disabled={isLoading}
					value={comment}
					onChange={(e) => setComment(e.target.value)}
					required
					placeholder=" "
					className="peer w-full p-4 pb-6 pt-6 pl-4 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative text-white h-full"
				/>
				<label className="absolute text-md  duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-neutral-300">
					{"Leave a comment :)"}
				</label>
			</div>
			<button
				onClick={handleCommentSubmit}
				disabled={isLoading}
				className="w-full p-3 bg-neutral-200 text-black rounded-md disabled:opacity-70 disabled:cursor-not-allowed mt-6 mb-2 transition-all hover:tracking-[0.35rem]"
			>
				{isLoading ? "Loading..." : "Comment"}
			</button>
		</div>
	);
};

export default CreateComment;
