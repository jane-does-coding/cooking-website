import prisma from "@/app/libs/prismadb";

interface IParams {
	recipeId: string;
}

export default async function getRecipeById(params: IParams) {
	try {
		const { recipeId } = params;

		if (!recipeId) return;

		const recipe = await prisma.recipe.findUnique({
			where: {
				id: recipeId,
			},
			include: {
				user: true,
				ingredients: true,
			},
		});

		if (!recipe) return null;

		return recipe;
	} catch (err) {
		console.log(err);
	}
}
