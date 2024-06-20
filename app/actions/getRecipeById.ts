import prisma from "@/app/libs/prismadb";

interface IParams {
	recipe_id: string;
}

export default async function getRecipeById(params: IParams) {
	try {
		const { recipe_id } = params;

		if (!recipe_id) return;

		const recipe = await prisma.recipe.findUnique({
			where: {
				id: recipe_id,
			},
			include: {
				user: true,
			},
		});

		if (!recipe) return null;

		return recipe;
	} catch (err) {
		console.log(err);
	}
}
