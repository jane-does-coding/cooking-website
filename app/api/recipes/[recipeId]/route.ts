import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const body = await req.json();
	const {} = body;

	const user = await getCurrentUser();

	if (user?.id) {
	} else {
		return NextResponse.json({ message: "not authorized" }, { status: 401 });
	}
}
