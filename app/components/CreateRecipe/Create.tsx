"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import axios from "axios";
import ImageUpload from "../Inputs/ImageUpload";

// Define the structure for each ingredient
interface IngredientData {
	name: string;
	amount: string;
}

// Update RecipeData to include ingredients with names and amounts
interface RecipeData {
	title: string;
	oneline: string;
	description: string;
	ingredients: IngredientData[];
	steps: string[];
	extraInfo: string;
	category: string;
	servingSize: number;
	expectedTime: string;
	imageUrl: string;
}

const CreateRecipe: React.FC = () => {
	const [data, setData] = useState<RecipeData>({
		title: "",
		oneline: "",
		description: "",
		ingredients: [
			{ name: "", amount: "" },
			{ name: "", amount: "" },
		],
		steps: ["", ""],
		extraInfo: "",
		servingSize: 1,
		expectedTime: "",
		category: "",
		imageUrl: "",
	});
	const [isLoading, setIsLoading] = useState(false);
	const [imageFile, setImageFile] = useState<File | null>(null); // For handling image files

	const router = useRouter();

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { id, value } = e.target;
		setData((prevData) => ({ ...prevData, [id]: value }));
	};

	const handleIngredientChange = (
		index: number,
		type: keyof IngredientData,
		value: string
	) => {
		const newIngredients = [...data.ingredients];
		newIngredients[index][type] = value;
		setData((prevData) => ({ ...prevData, ingredients: newIngredients }));
	};

	const handleAddIngredient = () => {
		setData((prevData) => ({
			...prevData,
			ingredients: [...prevData.ingredients, { name: "", amount: "" }],
		}));
	};

	const handleRemoveIngredient = (index: number) => {
		const newIngredients = [...data.ingredients];
		newIngredients.splice(index, 1);
		setData((prevData) => ({ ...prevData, ingredients: newIngredients }));
	};

	const handleArrayChange = (
		type: keyof RecipeData,
		index: number,
		value: string
	) => {
		const newArray = [...(data[type] as string[])];
		newArray[index] = value;
		setData((prevData) => ({ ...prevData, [type]: newArray }));
	};

	const handleAddField = (type: keyof RecipeData) => {
		setData((prevData) => ({
			...prevData,
			[type]: [...(prevData[type] as string[]), ""],
		}));
	};

	const handleRemoveField = (type: keyof RecipeData, index: number) => {
		setData((prevData) => {
			const newArray = [...(prevData[type] as string[])];
			newArray.splice(index, 1);
			return { ...prevData, [type]: newArray };
		});
	};

	const handleCategoryChange = (value: string) => {
		setData((prevData) => ({ ...prevData, category: value }));
	};

	const handleServingSizeChange = (value: string) => {
		setData((prevData) => ({ ...prevData, servingSize: parseInt(value) }));
	};

	const handleExpectedTimeChange = (value: string) => {
		setData((prevData) => ({ ...prevData, expectedTime: value }));
	};

	const handleImageUpload = (value: string) => {
		setData((prevData) => ({ ...prevData, imageUrl: value }));
		console.log("In the handleImageUpload: " + data);
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsLoading(true);

		try {
			let imageUrl = "";

			if (imageFile) {
				const formData = new FormData();
				formData.append("file", imageFile);
				formData.append("upload_preset", "your_upload_preset"); // Your Cloudinary upload preset

				const response = await axios.post(
					`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
					formData
				);

				imageUrl = response.data.secure_url;
			}

			// Add the imageUrl to the data object
			const recipeData = { ...data, imageSrc: imageUrl };

			// Make the POST request using Axios
			const response = await axios.post("/api/recipes", recipeData, {
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (response.status === 200) {
				toast.success("Recipe created successfully");
				router.push("/");
			} else {
				toast.error("Failed to create recipe");
			}
		} catch (error: any) {
			if (error.response) {
				toast.error(`Failed to create recipe: ${error.response.data.message}`);
			} else {
				console.error("An error occurred:", error);
				toast.error("An error occurred while creating the recipe");
			}
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="w-[100vw] min-h-[100vh] mt-8 flex items-center justify-center">
			<div className="w-[70vw] h-fit rounded-xl bg-neutral-900 px-8 py-8">
				<h1 className="text-[2.5rem] mx-auto mb-8 w-fit text-center text-white slovensko">
					Create Recipe
				</h1>

				<ImageUpload onChange={handleImageUpload} value={data.imageUrl} />

				<form onSubmit={handleSubmit} className="gap-2 flex flex-col">
					<div className="w-full relative my-1">
						<input
							id="title"
							type="text"
							disabled={isLoading}
							value={data.title}
							onChange={handleChange}
							required
							placeholder=" "
							className="peer w-full p-3 pt-6 pl-4 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative text-white"
						/>
						<label className="absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-white">
							Title
						</label>
					</div>

					<div className="w-full relative my-1">
						<input
							id="oneline"
							type="text"
							disabled={isLoading}
							value={data.oneline}
							onChange={handleChange}
							required
							placeholder=" "
							className="peer w-full p-3 pt-6 pl-4 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative text-white"
						/>
						<label className="absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-white">
							One line description
						</label>
					</div>

					<div className="w-full relative my-1">
						<textarea
							id="description"
							disabled={isLoading}
							value={data.description}
							onChange={handleChange}
							required
							placeholder=" "
							className="peer w-full p-3 pt-6 pl-4 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative text-white"
							rows={3}
						/>
						<label className="absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-white">
							Description
						</label>
					</div>

					<div className="flex gap-2 items-center justify-center h-fit">
						{/* CATEGORY DROPDOWN */}
						<div className="w-full relative my-1">
							<Select onValueChange={handleCategoryChange}>
								<SelectTrigger className="w-full bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md text-white p-3 py-6 h-full">
									<SelectValue placeholder="Select a category" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Categories</SelectLabel>
										<SelectItem value="appetizer">Appetizer</SelectItem>
										<SelectItem value="main-course">Main Course</SelectItem>
										<SelectItem value="dessert">Dessert</SelectItem>
										<SelectItem value="beverage">Beverage</SelectItem>
										<SelectItem value="snack">Snack</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>

						<div className="w-full relative my-1">
							<Select onValueChange={handleServingSizeChange}>
								<SelectTrigger className="w-full bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md text-white p-3 py-6 h-full">
									<SelectValue placeholder="Select serving size" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Serving Size</SelectLabel>
										{[...Array(12)].map((_, i) => (
											<SelectItem key={i + 1} value={(i + 1).toString()}>
												{i + 1}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>

						<div className="w-full relative h-full">
							<input
								id="expectedTime"
								type="text"
								disabled={isLoading}
								value={data.expectedTime}
								onChange={(e) => handleExpectedTimeChange(e.target.value)}
								required
								placeholder=" "
								className="peer w-full p-4 pb-6 pt-6 pl-4 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative text-white h-full"
								step="1"
							/>
							<label className="absolute text-md  duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-neutral-300">
								Expected Time (hh:mm)
							</label>
						</div>
					</div>

					<div className="w-full my-1">
						<label className="text-md text-white mx-auto jura w-fit text-[2rem] text-center flex items-center justify-center mb-4">
							Ingredients
						</label>
						{data.ingredients.map((ingredient, index) => (
							<div
								key={index}
								className="w-full relative my-1 flex space-x-2 gap-2"
							>
								<div className="w-2/3 relative my-1">
									<input
										type="text"
										value={ingredient.name}
										onChange={(e) =>
											handleIngredientChange(index, "name", e.target.value)
										}
										disabled={isLoading}
										required
										placeholder=" "
										className="peer w-full p-3 pt-6 pl-4 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative text-white"
									/>
									<label className="absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-white">
										Ingredient
									</label>
								</div>
								<div className="w-1/3 relative my-1">
									<input
										type="text"
										value={ingredient.amount}
										onChange={(e) =>
											handleIngredientChange(index, "amount", e.target.value)
										}
										disabled={isLoading}
										required
										placeholder=" "
										className="peer w-full p-3 pt-6 pl-4 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative text-white"
									/>
									<label className="absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-white">
										Amount
									</label>
								</div>
								{data.ingredients.length > 2 && (
									<button
										type="button"
										onClick={() => handleRemoveIngredient(index)}
										className="ml-2 p-2 bg-neutral-950 text-white rounded-md"
										disabled={isLoading}
									>
										<IoMdClose size={24} />
									</button>
								)}
							</div>
						))}
						<button
							type="button"
							onClick={handleAddIngredient}
							className="w-full p-2 mt-2 bg-neutral-950 text-white rounded-md"
							disabled={isLoading}
						>
							+ Ingredient
						</button>
					</div>

					<div className="w-full my-1">
						<label className="text-md text-white mx-auto jura w-fit text-[2rem] text-center flex items-center justify-center mb-4">
							Recipe Steps
						</label>
						{data.steps.map((step, index) => (
							<div key={index} className="w-full relative my-1 flex">
								<textarea
									value={step}
									onChange={(e) =>
										handleArrayChange("steps", index, e.target.value)
									}
									disabled={isLoading}
									required
									placeholder=" "
									className="peer w-full p-3 pt-6 pl-4 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative text-white"
									rows={2}
								/>
								<label className="absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-white">
									Step {index + 1}
								</label>
								{data.steps.length > 2 && (
									<button
										type="button"
										onClick={() => handleRemoveField("steps", index)}
										className="ml-2 p-2 bg-neutral-950 text-white rounded-md"
										disabled={isLoading}
									>
										<IoMdClose size={24} />
									</button>
								)}
							</div>
						))}
						<button
							type="button"
							onClick={() => handleAddField("steps")}
							className="w-full p-2 mt-2 bg-neutral-950 text-white rounded-md"
							disabled={isLoading}
						>
							+ Step
						</button>
					</div>

					<div className="w-full relative my-1">
						<textarea
							id="extraInfo"
							disabled={isLoading}
							value={data.extraInfo}
							onChange={handleChange}
							required
							placeholder=" "
							className="peer w-full p-3 pt-6 pl-4 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative text-white"
							rows={2}
						/>
						<label className="absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-white">
							Extra Info
						</label>
					</div>

					<button
						type="submit"
						disabled={isLoading}
						className="w-full p-3 bg-neutral-950 text-white rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed mt-2"
					>
						{isLoading ? "Creating Recipe..." : "Submit"}
					</button>
				</form>
				<div className="mt-4 text-neutral-500 text-sm flex gap-2 text-center items-center justify-center mx-auto">
					Want to view recipes?{" "}
					<a href="/" className="text-neutral-200">
						Home
					</a>
				</div>
			</div>
		</div>
	);
};

export default CreateRecipe;
