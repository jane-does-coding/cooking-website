import prisma from "@/app/libs/prismadb";

interface IParams {
	categoryName: string;
}

export default async function getCategoryByName(params: any) {
	try {
		if (!params) {
			console.error("Category name is required");
			return;
		}

		console.log(params);

		const recipes = await prisma.recipe.findMany({
			where: {
				category: params,
			},
			include: {
				user: true,
				ingredients: true,
				comments: true,
			},
		});

		if (!recipes.length) {
			console.warn(`No recipes found for category: ${params}`);
			return null;
		}

		return recipes;
	} catch (err) {
		console.error("Error fetching recipes:", err);
	}
}
