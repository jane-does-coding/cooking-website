import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";
import cloudinary from "@/app/libs/cloudinaryConfig";

export async function POST(req: Request) {
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

	const user = await getCurrentUser();
	console.log("Received data:", title, user, body);

	if (user?.id) {
		try {
			const recipe = await prisma.recipe.create({
				data: {
					userId: user.id,
					title,
					oneline,
					description,
					steps,
					extraInfo,
					servingSize,
					expectedTime,
					category,
					imageUrl,
					likes: [],
					saved: [],
					ingredients: {
						create: ingredients.map(
							(ingredient: { name: string; amount: string }) => ({
								name: ingredient.name,
								amount: ingredient.amount,
							})
						),
					},
				},
			});

			console.log("Recipe created:", recipe);
			return NextResponse.json(recipe);
		} catch (error) {
			console.error("Error creating recipe:", error);
			return NextResponse.json(
				{ message: "Error creating recipe" },
				{ status: 500 }
			);
		}
	} else {
		return NextResponse.json({ message: "not authorized" }, { status: 401 });
	}
}
