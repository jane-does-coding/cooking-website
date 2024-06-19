// RecipeCardActions.jsx
"use client";
import React, { useEffect, useState } from "react";
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const RecipeCardActions = () => {
	const [saved, setSaved] = useState(false);
	const [liked, setLiked] = useState(true);
	const [animateLike, setAnimateLike] = useState(false);
	const [animateSave, setAnimateSave] = useState(false);

	const toggleSaved = () => {
		setSaved(!saved);
		setAnimateSave(true); // Trigger the save animation
	};

	const toggleLiked = () => {
		setLiked(!liked);
		setAnimateLike(true); // Trigger the like animation
	};

	useEffect(() => {
		// Remove the like animation class after the animation ends
		if (animateLike) {
			const timer = setTimeout(() => {
				setAnimateLike(false);
			}, 400); // Duration should match the CSS animation duration

			return () => clearTimeout(timer); // Clean up the timer on unmount
		}
	}, [animateLike]);

	useEffect(() => {
		// Remove the save animation class after the animation ends
		if (animateSave) {
			const timer = setTimeout(() => {
				setAnimateSave(false);
			}, 300); // Duration should match the CSS animation duration

			return () => clearTimeout(timer); // Clean up the timer on unmount
		}
	}, [animateSave]);

	return (
		<div className="flex gap-4">
			<div className="flex gap-2 items-center justify-center text-sm text-neutral-300">
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
				14
			</div>
			<div className="flex gap-2 items-center justify-center text-sm text-neutral-300">
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
				35
			</div>
		</div>
	);
};

export default RecipeCardActions;
