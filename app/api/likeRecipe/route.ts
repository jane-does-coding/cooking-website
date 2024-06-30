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
		select: { likes: true },
	});

	if (!recipe) {
		return NextResponse.json({ message: "recipe not found" }, { status: 404 });
	}

	let updatedLikes;

	if (recipe.likes.includes(user.id)) {
		updatedLikes = recipe.likes.filter((likeId) => likeId !== user.id);
	} else {
		updatedLikes = [...recipe.likes, user.id];
	}

	const updatedRecipe = await prisma.recipe.update({
		where: { id: recipeId },
		data: { likes: updatedLikes },
	});

	return NextResponse.json(updatedRecipe);
}
