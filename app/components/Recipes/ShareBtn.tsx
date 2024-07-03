"use client";
import { Button } from "@/components/ui/button";
import QRCodeStyling from "qr-code-styling";
import { useEffect, useState } from "react";

const ShareBtn = ({ recipe }: any) => {
	const [qrPopupOpen, setQrPopupOpen]: any = useState(false);
	const [qrCodeInstance, setQRCodeInstance] = useState<QRCodeStyling | null>(
		null
	);

	useEffect(() => {
		if (qrPopupOpen) {
			const qrCode = new QRCodeStyling({
				width: 300,
				height: 300,
				backgroundOptions: {
					color: "transparent",
				},
				dotsOptions: {
					type: "classy-rounded",
				},
				data: `/recipes/${recipe.id}`,
				imageOptions: {
					crossOrigin: "anonymous",
					margin: 20,
				},
			});

			setQRCodeInstance(qrCode);
		}
	}, [qrPopupOpen]);

	const toggleQrPopup = () => {
		setQrPopupOpen(!qrPopupOpen);
	};

	const openSharePopup = () => {
		toggleQrPopup();
	};

	return (
		<div>
			<Button variant="outline" className="w-full" onClick={openSharePopup}>
				Share
			</Button>
			{qrPopupOpen && qrCodeInstance && (
				<div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-neutral-950/25 backdrop-blur-sm z-[999]">
					<div className="bg-neutral-200 p-8 rounded-xl relative max-w-[90vw] max-h-[90vh] overflow-auto">
						<button
							className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
							onClick={toggleQrPopup}
						>
							<p>close</p>
						</button>

						<div
							className="bg-transparent"
							ref={(node) => node && qrCodeInstance?.append(node)}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default ShareBtn;
