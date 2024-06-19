"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface RecipeData {
	title: string;
	description: string;
	ingredients: string[];
	steps: string[];
	extraInfo: string;
}

const CreateRecipe: React.FC = () => {
	const [data, setData] = useState<RecipeData>({
		title: "",
		description: "",
		ingredients: [""],
		steps: [""],
		extraInfo: "",
	});
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { id, value } = e.target;
		setData((prevData) => ({ ...prevData, [id]: value }));
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

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsLoading(true);

		// Simulate a successful form submission
		setTimeout(() => {
			setIsLoading(false);
			toast.success("Recipe created successfully");
			router.push("/");
		}, 2000);
	};

	return (
		<div className="w-[100vw] h-[100vh] mt-8 flex items-center justify-center">
			<div className="w-[70vw] h-fit rounded-xl bg-neutral-900 px-8 py-8">
				<h1 className="text-[2rem] mx-auto mb-8 w-fit text-center text-white">
					Create Recipe
				</h1>
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

					<div className="w-full my-1">
						<label className="text-md text-white">Ingredients</label>
						{data.ingredients.map((ingredient, index) => (
							<div key={index} className="w-full relative my-1">
								<input
									type="text"
									value={ingredient}
									onChange={(e) =>
										handleArrayChange("ingredients", index, e.target.value)
									}
									disabled={isLoading}
									placeholder={`Ingredient ${index + 1}`}
									className="peer w-full p-3 pl-4 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative text-white"
								/>
							</div>
						))}
						<button
							type="button"
							onClick={() => handleAddField("ingredients")}
							className="w-full p-2 mt-2 bg-neutral-950 text-white rounded-md"
							disabled={isLoading}
						>
							+ Ingredient
						</button>
					</div>

					<div className="w-full my-1">
						<label className="text-md text-white">Recipe Steps</label>
						{data.steps.map((step, index) => (
							<div key={index} className="w-full relative my-1">
								<textarea
									value={step}
									onChange={(e) =>
										handleArrayChange("steps", index, e.target.value)
									}
									disabled={isLoading}
									placeholder={`Step ${index + 1}`}
									className="peer w-full p-3 pl-4 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative text-white"
									rows={2}
								/>
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
						<label className="text-md text-white">Extra Info</label>
						<textarea
							id="extraInfo"
							disabled={isLoading}
							value={data.extraInfo}
							onChange={handleChange}
							placeholder="Any additional information or tips..."
							className="peer w-full p-3 pl-4 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative text-white"
							rows={2}
						/>
					</div>

					<div className="w-full relative my-1 p-2 text-white">
						<Label htmlFor="picture">Picture</Label>
						<Input
							id="picture"
							type="file"
							className="h-12 pt-3 bg-neutral-800"
						/>
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
