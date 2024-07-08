import React from "react";
import Saved from "../Saved/Saved";
import AnimatedTextCharacter from "../Text/AnimatedTextCharacter";
import CardsGrid from "../Recipes/CardsGrid";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Profile = ({
	user: currentUser,
	savedRecipes,
	userRecipes,
	likedRecipes,
}: any) => {
	return (
		<div>
			{/* 			<Saved currentUser={user} recipes={savedRecipes} />
			 */}

			<h1 className="mx-auto mb-6 xl:mb-6 mt-0 slovensko w-fit">
				<AnimatedTextCharacter
					text={`Hey, ${currentUser.username}`}
					className="text-[2rem] xl:text-[3rem] leading-[6rem]"
				/>
			</h1>

			{/* Personal Info */}
			<div className="flex gap-8 flex-col w-[80vw] items-center justify-center mx-auto my-10 mb-16">
				<div className="flex">
					<div className="border-r-2 border-neutral-400 px-8 flex flex-col">
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
						<div className="flex w-[25vw] items-center justify-between">
							<h2 className="text-neutral-300 text-[1.2rem] font-light jura">
								Email:
							</h2>
							<p className="text-white text-[1.35rem] jura">
								{currentUser.email}
							</p>
						</div>
					</div>
					<div className="px-8">
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
								Comments Written:
							</h2>
							<p className="text-white text-[1.35rem] jura">
								{currentUser.comments.length}
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Saved Recipes */}
			{savedRecipes ? (
				<>
					<h1 className="mx-auto mb-6 xl:mb-6 mt-0 slovensko w-fit">
						<AnimatedTextCharacter
							text={"Saved"}
							className="text-[2rem] xl:text-[3rem] leading-[6rem]"
						/>
					</h1>
					<CardsGrid recipes={savedRecipes} currentUser={currentUser} />
				</>
			) : (
				<div>No saved recipes</div>
			)}
			<br />
			<br />

			{/* Posted Recipes */}
			{userRecipes ? (
				<>
					<h1 className="mx-auto mb-6 xl:mb-6 mt-0 slovensko w-fit">
						<AnimatedTextCharacter
							text={"Your Recipes"}
							className="text-[2rem] xl:text-[3rem] leading-[6rem]"
						/>
					</h1>
					<CardsGrid recipes={userRecipes} currentUser={currentUser} />
				</>
			) : (
				<div>No posted recipes</div>
			)}

			{/* Add more func/stuff */}
		</div>
	);
};

export default Profile;
