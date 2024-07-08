"use client";
import React, { useState } from "react";
import AnimatedTextCharacter from "../Text/AnimatedTextCharacter";
import CardsGrid from "../Recipes/CardsGrid";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const formatDate = (dateString: any) => {
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	return new Date(dateString).toLocaleDateString(undefined, options);
};

const Profile = ({
	user: currentUser,
	savedRecipes,
	userRecipes,
	likedRecipes,
}: any) => {
	const [activeTab, setActiveTab] = useState("saved");

	return (
		<div>
			<h1 className="mx-auto mb-6 xl:mb-16 mt-0 md:mt-10 slovensko w-fit">
				<AnimatedTextCharacter
					text={`Hey, ${currentUser.username}`}
					className="text-[2rem] xl:text-[3rem] leading-[6rem]"
				/>
			</h1>

			{/* Personal Info */}
			<div className="flex gap-8 flex-col w-[80vw] items-center justify-center mx-auto my-10 mb-24">
				<div className="flex">
					<div className="border-r-2 border-neutral-400 px-8 flex flex-col gap-2">
						<Avatar className="w-[6rem] h-[6rem] mx-auto mb-6">
							<AvatarImage src="/avatar.png" className="w-[6rem] h-[6rem]" />
						</Avatar>
						<div className="flex w-[25vw] items-center justify-between">
							<h2 className="text-neutral-300 text-[1.2rem] font-light jura">
								Name:
							</h2>
							<p className="text-white text-[1.35rem] jura">
								{currentUser.name}
							</p>
						</div>
						<div className="flex w-[25vw] items-center justify-between">
							<h2 className="text-neutral-300 text-[1.2rem] font-light jura">
								Username:
							</h2>
							<p className="text-white text-[1.35rem] jura">
								{currentUser.username}
							</p>
						</div>
					</div>
					<div className="px-8 flex flex-col gap-2">
						<div className="flex w-[25vw] items-center justify-between">
							<h2 className="text-neutral-300 text-[1.2rem] font-light jura">
								Recipes Posted:
							</h2>
							<p className="text-white text-[1.35rem] jura">
								{userRecipes.length}
							</p>
						</div>
						<div className="flex w-[25vw] items-center justify-between">
							<h2 className="text-neutral-300 text-[1.2rem] font-light jura">
								Recipes Saved:
							</h2>
							<p className="text-white text-[1.35rem] jura">
								{savedRecipes.length}
							</p>
						</div>
						<div className="flex w-[25vw] items-center justify-between">
							<h2 className="text-neutral-300 text-[1.2rem] font-light jura">
								Recipes Liked:
							</h2>
							<p className="text-white text-[1.35rem] jura">
								{likedRecipes.length}
							</p>
						</div>
						<div className="flex w-[25vw] items-center justify-between">
							<h2 className="text-neutral-300 text-[1.2rem] font-light jura">
								Email:
							</h2>
							<p className="text-white text-[1.35rem] jura">
								{currentUser.email}
							</p>
						</div>
						<div className="flex w-[25vw] items-center justify-between">
							<h2 className="text-neutral-300 text-[1.2rem] font-light jura">
								Profile Created:
							</h2>
							<p className="text-white text-[1.35rem] jura">
								{formatDate(currentUser.createdAt)}
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-center mb-6">
				<button
					onClick={() => setActiveTab("saved")}
					className={`px-4 py-2 rounded-md ${
						activeTab === "saved"
							? "text-white bg-neutral-800"
							: "text-neutral-500 bg-neutral-900"
					}`}
				>
					Saved
				</button>
				<button
					onClick={() => setActiveTab("posted")}
					className={`px-4 py-2 rounded-md mx-2 ${
						activeTab === "posted"
							? "text-white bg-neutral-800"
							: "text-neutral-500 bg-neutral-900"
					}`}
				>
					Posted
				</button>
				<button
					onClick={() => setActiveTab("liked")}
					className={`px-4 py-2 rounded-md ${
						activeTab === "liked"
							? "text-white bg-neutral-800"
							: "text-neutral-500 bg-neutral-900"
					}`}
				>
					Liked
				</button>
			</div>

			<div>
				{activeTab === "saved" && (
					<>
						<h1 className="mx-auto mb-6 xl:mb-6 mt-0 slovensko w-fit">
							<AnimatedTextCharacter
								text={"Saved"}
								className="text-[2rem] xl:text-[3rem] leading-[6rem]"
							/>
						</h1>
						{savedRecipes.length > 0 ? (
							<CardsGrid recipes={savedRecipes} currentUser={currentUser} />
						) : (
							<div>No saved recipes</div>
						)}
					</>
				)}

				{activeTab === "posted" && (
					<>
						<h1 className="mx-auto mb-6 xl:mb-6 mt-0 slovensko w-fit">
							<AnimatedTextCharacter
								text={"Your Recipes"}
								className="text-[2rem] xl:text-[3rem] leading-[6rem]"
							/>
						</h1>
						{userRecipes.length > 0 ? (
							<CardsGrid recipes={userRecipes} currentUser={currentUser} />
						) : (
							<div>No posted recipes</div>
						)}
					</>
				)}

				{activeTab === "liked" && (
					<>
						<h1 className="mx-auto mb-6 xl:mb-6 mt-0 slovensko w-fit">
							<AnimatedTextCharacter
								text={"Liked Recipes"}
								className="text-[2rem] xl:text-[3rem] leading-[6rem]"
							/>
						</h1>
						{likedRecipes.length > 0 ? (
							<CardsGrid recipes={likedRecipes} currentUser={currentUser} />
						) : (
							<div>No liked recipes</div>
						)}
					</>
				)}
			</div>

			{/* Add more stuff */}
			{/* Maybe, but idk */}
		</div>
	);
};

export default Profile;
