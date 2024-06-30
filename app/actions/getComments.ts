import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getComments(recipeId: any) {
	try {
		const currentUser = await getCurrentUser();

		if (!recipeId) {
			throw new Error("Recipe ID is required");
		}

		const comments = await prisma.comment.findMany({
			where: {
				recipeId: recipeId,
			},
			include: {
				user: true,
			},
			orderBy: {
				createdAt: "desc",
			},
		});

		return comments;
	} catch (error) {
		console.error("Error fetching comments:", error);
		return { message: "Internal Server Error" };
	}
}
