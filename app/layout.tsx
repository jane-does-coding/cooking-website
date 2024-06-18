import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { signOut } from "next-auth/react";
import getCurrentUser from "./actions/getCurrentUser";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const currentUser = await getCurrentUser();
	console.log(currentUser);

	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Playwrite+SK:wght@100..400&display=swap"
					rel="stylesheet"
				></link>
				<link
					href="https://fonts.googleapis.com/css2?family=Jura:wght@300..700&family=Playwrite+SK:wght@100..400&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className={`${inter.className} dark`}>{children}</body>
		</html>
	);
}
