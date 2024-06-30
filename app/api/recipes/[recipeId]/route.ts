import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

interface IParams {
	recipeId: string;
}

export async function DELETE(
	request: Request,
	{ params }: { params: IParams }
) {
	const currentUser = await getCurrentUser();

	if (!currentUser) return NextResponse.error();

	let { recipeId } = params;
	recipeId = recipeId.toString();

	if (!recipeId) throw new Error("Invalid Id");

	await prisma.ingredient.deleteMany({
		where: {
			recipeId: recipeId,
		},
	});

	const recipe = await prisma.recipe.delete({
		where: {
			id: recipeId,
		},
	});

	return NextResponse.json(recipe);
}
