import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(req: Request) {
	try {
		const { recipeId, content } = await req.json();

		// Retrieve current user
		const user = await getCurrentUser();
		if (!user?.id) {
			return NextResponse.json({ message: "not authorized" }, { status: 401 });
		}

		// Find the recipe to associate the comment with
		const recipe = await prisma.recipe.findUnique({
			where: { id: recipeId },
		});
		if (!recipe) {
			return NextResponse.json(
				{ message: "recipe not found" },
				{ status: 404 }
			);
		}

		// Create the comment and associate it with the recipe and user
		const createdComment = await prisma.comment.create({
			data: {
				content,
				recipeId,
				userId: user.id,
			},
		});

		// Optionally, update the recipe to include the new comment ID in its comments array
		const updatedRecipe = await prisma.recipe.update({
			where: { id: recipeId },
			data: {
				comments: {
					connect: { id: createdComment.id }, // Use connect to add a new ID to the array
				},
			},
		});

		return NextResponse.json(createdComment);
	} catch (error) {
		console.error("Error creating comment:", error);
		return NextResponse.json(
			{ message: "Failed to create comment" },
			{ status: 500 }
		);
	}
}
