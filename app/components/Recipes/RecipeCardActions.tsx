"use client";
import React, { useEffect, useState } from "react";
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const RecipeCardActions = ({
	recipeId,
	likes: likesIds,
	saved: savedIds,
	currentUser,
}: any) => {
	const initialLiked = likesIds.includes(currentUser.id);
	const initialSaved = savedIds.includes(currentUser.id);

	const [liked, setLiked] = useState(initialLiked);
	const [saved, setSaved] = useState(initialSaved);
	const [animateLike, setAnimateLike] = useState(false);
	const [animateSave, setAnimateSave] = useState(false);

	const [displayedLikesCount, setDisplayedLikesCount] = useState(
		likesIds.length
	);
	const [displayedSavesCount, setDisplayedSavesCount] = useState(
		savedIds.length
	);

	const toggleSaved = async () => {
		setSaved(!saved);
		setAnimateSave(true);

		setDisplayedSavesCount(
			saved ? displayedSavesCount - 1 : displayedSavesCount + 1
		);

		try {
			const response = await fetch("/api/saveRecipe", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ recipeId }),
			});

			if (!response.ok) {
				throw new Error("Failed to save the recipe");
			}
		} catch (error) {
			console.error("Error saving the recipe:", error);
		}
	};

	const toggleLiked = async () => {
		setLiked(!liked);
		setAnimateLike(true);

		setDisplayedLikesCount(
			liked ? displayedLikesCount - 1 : displayedLikesCount + 1
		);

		try {
			const response = await fetch("/api/likeRecipe", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ recipeId }),
			});

			if (!response.ok) {
				throw new Error("Failed to like the recipe");
			}
		} catch (error) {
			console.error("Error liking the recipe:", error);
		}
	};

	useEffect(() => {
		if (animateLike) {
			const timer = setTimeout(() => {
				setAnimateLike(false);
			}, 400);
			return () => clearTimeout(timer);
		}
	}, [animateLike]);

	useEffect(() => {
		if (animateSave) {
			const timer = setTimeout(() => {
				setAnimateSave(false);
			}, 300);
			return () => clearTimeout(timer);
		}
	}, [animateSave]);

	return (
		<div className="flex gap-4">
			<div className="flex gap-2 items-center justify-center text-md text-neutral-300 jura">
				<button
					onClick={toggleSaved}
					className={animateSave ? "scale-animate" : ""}
				>
					{saved ? (
						<BsBookmarkHeartFill size={24} className="text-white" />
					) : (
						<BsBookmarkHeart size={24} className="text-white" />
					)}
				</button>
				{displayedSavesCount}
			</div>
			<div className="flex gap-2 items-center justify-center text-md text-neutral-300 jura">
				<button
					onClick={toggleLiked}
					className={animateLike ? "scale-animate" : ""}
				>
					{liked ? (
						<FaHeart className="text-red-500" size={24} />
					) : (
						<FaRegHeart size={24} className="text-white" />
					)}
				</button>
				{displayedLikesCount}
			</div>
		</div>
	);
};

export default RecipeCardActions;
