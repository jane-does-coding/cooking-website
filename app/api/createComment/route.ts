import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(req: Request) {
	try {
		const { recipeId, content } = await req.json();

		const user = await getCurrentUser();
		if (!user?.id) {
			return NextResponse.json({ message: "not authorized" }, { status: 401 });
		}

		const recipe = await prisma.recipe.findUnique({
			where: { id: recipeId },
		});
		if (!recipe) {
			return NextResponse.json(
				{ message: "recipe not found" },
				{ status: 404 }
			);
		}

		const createdComment = await prisma.comment.create({
			data: {
				content,
				recipeId,
				userId: user.id,
			},
		});

		const updatedRecipe = await prisma.recipe.update({
			where: { id: recipeId },
			data: {
				comments: {
					connect: { id: createdComment.id },
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
