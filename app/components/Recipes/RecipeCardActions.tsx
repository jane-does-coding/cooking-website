// RecipeCardActions.jsx
"use client";
import React, { useEffect, useState } from "react";
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const RecipeCardActions = ({ likes: likesIds, saved: savedIds }: any) => {
	const [saved, setSaved] = useState(false);
	const [liked, setLiked] = useState(true);
	const [animateLike, setAnimateLike] = useState(false);
	const [animateSave, setAnimateSave] = useState(false);

	const toggleSaved = () => {
		setSaved(!saved);
		setAnimateSave(true);
	};

	const toggleLiked = () => {
		setLiked(!liked);
		setAnimateLike(true);
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
			<div className="flex gap-2 items-center justify-center text-md text-neutral-300 jura ">
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
				{savedIds.length + 1}
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
				{likesIds.length + 1}
			</div>
		</div>
	);
};

export default RecipeCardActions;
