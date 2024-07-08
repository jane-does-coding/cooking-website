import getCurrentUser from "@/app/actions/getCurrentUser";
import getLikedRecipes from "@/app/actions/getLikedRecipes";
import getSavedRecipes from "@/app/actions/getSavedRecipes";
import getUserRecipes from "@/app/actions/getUserRecipes";
import Profile from "@/app/components/Profile/Profile";
import React from "react";

const page = async () => {
	const currentUser = await getCurrentUser();
	const savedRecipes = await getSavedRecipes();
	const likedRecipes = await getLikedRecipes();
	const userRecipes = await getUserRecipes();

	if (!currentUser) return <div></div>;

	/* Idk, maybe add more actions */

	return (
		<div>
			<Profile
				user={currentUser}
				savedRecipes={savedRecipes}
				likedRecipes={likedRecipes}
				userRecipes={userRecipes}
			/>
		</div>
	);
};

export default page;
