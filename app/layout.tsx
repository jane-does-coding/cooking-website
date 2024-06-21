import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import getCurrentUser from "./actions/getCurrentUser";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Recipe Site",
	description: "Find and post recipes",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const currentUser = await getCurrentUser();

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
			<body className={`${inter.className} dark`}>
				<Menu currentUser={currentUser} />
				{children}
				<br />
				<br />
				<Footer />
			</body>
		</html>
	);
}
