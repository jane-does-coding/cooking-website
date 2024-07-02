import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

interface IParams {
	categoryName: string;
}

export default async function getRecipes(params: IParams) {
	try {
		const { categoryName } = params;

		const currentUser = await getCurrentUser();

		if (!currentUser) return [];

		const recipes = await prisma.recipe.findMany({
			where: {
				category: categoryName,
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
