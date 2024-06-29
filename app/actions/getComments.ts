import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getComments() {
	try {
		const currentUser = await getCurrentUser();

		/* 		if (!currentUser) return [];
		 */
		const comments = await prisma.comment.findMany({
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
