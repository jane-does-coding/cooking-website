"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useQRCode } from "next-qrcode";
import { IoMdClose } from "react-icons/io";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
	DialogTrigger,
} from "@radix-ui/react-dialog";
import { DialogFooter } from "@/components/ui/dialog";

const ShareBtn = ({ recipe }: any) => {
	const [showQRCode, setShowQRCode] = useState(false);
	const [dialogOpen, setDialogOpen] = useState(false);

	const handleCopyLink = () => {
		const link = `recipes/${recipe.id}`;
		navigator.clipboard
			.writeText(link)
			.then(() => alert("Link copied to clipboard!"))
			.catch((err) => console.error("Could not copy text: ", err));
	};

	const { Canvas } = useQRCode();

	return (
		<div>
			<Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
				<DialogTrigger asChild>
					<Button
						variant="outline"
						className="w-full"
						onClick={() => setDialogOpen(true)}
					>
						Share
					</Button>
				</DialogTrigger>

				{dialogOpen && (
					<div
						className="w-full h-screen bg-neutral-950/25 backdrop-blur-sm fixed top-0 left-0 z-50"
						onClick={() => setDialogOpen(false)}
					/>
				)}

				<DialogContent
					className="z-50 bg-neutral-900 px-8 py-8 rounded-xl min-w-[30vw] max-w-[40vw] max-h-[90vh] overflow-auto fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
					style={{
						animation: "fadeInFromBottom 0.3s ease-out",
					}}
				>
					<button
						className="absolute top-4 right-4 text-neutral-200 hover:text-neutral-100"
						onClick={() => setDialogOpen(false)}
					>
						<IoMdClose size={28} />
					</button>
					<DialogTitle className="text-lg font-bold text-neutral-100">
						Share Recipe
					</DialogTitle>
					<DialogDescription className="text-sm text-neutral-400">
						Choose how you want to share this recipe.
					</DialogDescription>

					{!showQRCode ? (
						<div className="flex flex-col items-center gap-4 mt-4">
							<Canvas
								text={`https://example.com/recipes/${recipe.id}`}
								options={{
									errorCorrectionLevel: "M",
									margin: 2,
									scale: 4,
									width: 350,
									color: {
										dark: "#FFFFFF",
										light: "#18181b",
									},
								}}
							/>
						</div>
					) : (
						<div className="flex flex-col items-center mt-4">
							<Canvas
								text={`https://example.com/recipes/${recipe.id}`}
								options={{
									errorCorrectionLevel: "M",
									margin: 3,
									scale: 4,
									width: 350,
									color: {
										dark: "#FFFFFF",
										light: "#18181b",
									},
								}}
							/>
							<Button
								variant="outline"
								className="mt-4"
								onClick={() => setShowQRCode(false)}
							>
								Back
							</Button>
						</div>
					)}

					<DialogFooter className="flex justify-center items-center mt-4">
						<Button
							variant="outline"
							className="w-full p-3 bg-neutral-200 hover:bg-neutral-300 hover:text-black text-black rounded-md disabled:opacity-70 disabled:cursor-not-allowed mt-2 mb-2 transition-all hover:tracking-[0.2rem]"
							onClick={handleCopyLink}
						>
							Copy Link
						</Button>
						<Button
							className="w-full bg-neutral-900 hover:bg-neutral-800 border-2 border-neutral-300 text-white font-normal text-lg hover:tracking-[0.2rem] transition-all"
							variant="outline"
							onClick={() => setDialogOpen(false)}
						>
							Close
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default ShareBtn;
