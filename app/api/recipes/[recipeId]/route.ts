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

export async function PUT(
	req: Request,
	{ params }: { params: { recipeId: string } }
) {
	const currentUser = await getCurrentUser();

	if (!currentUser) return NextResponse.error();

	const recipeId = params.recipeId;

	if (!recipeId) throw new Error("Invalid Recipe ID");

	const body = await req.json();
	const {
		title,
		oneline,
		description,
		steps,
		ingredients,
		extraInfo,
		servingSize,
		expectedTime,
		category,
		imageUrl,
	} = body;

	if (!title || !description || !steps || !ingredients) {
		return NextResponse.json(
			{ message: "Missing required fields" },
			{ status: 400 }
		);
	}

	try {
		const recipe = await prisma.recipe.update({
			where: { id: recipeId },
			data: {
				title,
				oneline,
				description,
				steps,
				extraInfo,
				servingSize,
				expectedTime,
				category,
				imageUrl,
			},
		});

		await prisma.ingredient.deleteMany({
			where: {
				recipeId: recipeId,
			},
		});

		await prisma.ingredient.createMany({
			data: ingredients.map((ingredient: { name: string; amount: string }) => ({
				name: ingredient.name,
				amount: ingredient.amount,
				recipeId: recipeId,
			})),
		});

		console.log("Recipe updated:", recipe);
		return NextResponse.json(recipe);
	} catch (error) {
		console.error("Error updating recipe:", error);
		return NextResponse.json(
			{ message: "Error updating recipe" },
			{ status: 500 }
		);
	}
}
