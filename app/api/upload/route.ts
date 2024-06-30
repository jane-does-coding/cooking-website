// pages/api/upload.ts
import type { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";
import cloudinary from "@/app/libs/cloudinaryConfig";

const upload = multer({ dest: "uploads/" }); // Temporary directory for multer

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		// Multer middleware parses the file from the request
		upload.single("image")(req, res, async (err: any) => {
			if (err) {
				console.error("Error uploading image:", err);
				return res.status(500).json({ message: "Error uploading image" });
			}

			// Upload image to Cloudinary
			const file: Express.Multer.File = req.file;
			const result = await cloudinary.uploader.upload(file.path, {
				folder: "uploads", // Optional folder in Cloudinary
			});

			// Clean up: delete the temporary file
			// fs.unlinkSync(file.path); // Uncomment if you want to delete the file after upload

			res.status(200).json({ imageUrl: result.secure_url });
		});
	} catch (error) {
		console.error("Error handling image upload:", error);
		res.status(500).json({ message: "Error handling image upload" });
	}
};

export const config = {
	api: {
		bodyParser: false, // Disallow body parsing, since multer handles it
	},
};

export default handler;
