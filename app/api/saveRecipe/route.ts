import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(req: Request) {
	const { recipeId } = await req.json();

	const user = await getCurrentUser();

	if (!user?.id) {
		return NextResponse.json({ message: "not authorized" }, { status: 401 });
	}

	const recipe = await prisma.recipe.findUnique({
		where: { id: recipeId },
	});

	if (!recipe) {
		return NextResponse.json({ message: "Recipe not found" }, { status: 404 });
	}

	const isSaved = recipe.saved.includes(user.id);

	const updatedRecipe = await prisma.recipe.update({
		where: { id: recipeId },
		data: {
			saved: isSaved
				? recipe.saved.filter((id: string) => id !== user.id)
				: [...recipe.saved, user.id],
		},
	});

	return NextResponse.json(updatedRecipe);
}
