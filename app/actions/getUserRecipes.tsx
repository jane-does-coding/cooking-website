import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getUserRecipes() {
	try {
		const currentUser = await getCurrentUser();

		if (!currentUser) return [];

		const recipes = await prisma.recipe.findMany({
			where: {
				userId: currentUser.id,
			},
			orderBy: {
				createdAt: "desc",
			},
		});

		return recipes;
	} catch (error) {
		console.error("Error fetching recipes:", error);
		return { message: "Internal Server Error" };
	}
}
