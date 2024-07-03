import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getSavedRecipes() {
	try {
		const currentUser = await getCurrentUser();

		if (!currentUser) {
			return [];
		}

		const recipes = await prisma.recipe.findMany({
			where: {
				saved: {
					has: currentUser.id,
				},
			},
		});

		return recipes;
	} catch (error) {
		console.log(error);
		throw new Error("Error fetching saved posts");
	}
}
