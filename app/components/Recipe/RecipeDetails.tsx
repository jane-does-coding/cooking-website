"use client";
import AnimatedTextCharacter from "../Text/AnimatedTextCharacter";
import { motion } from "framer-motion";
import AnimatedTextWord from "../Text/AnimatedTextWord";
import RecipeHeader from "./RecipeHeader";
import Comments from "./Comments";

const RecipeDetails = ({ recipe, currentUser }: any) => {
	const ingredients = recipe.ingredients;

	const imageVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.2,
				delay: 0.2,
			},
		},
	};

	return (
		<div className="w-full pr-[25vw] xl:pr-[30vw] ">
			<div className="container mx-auto py-8">
				<h1 className="mx-auto mb-6 xl:mb-6 mt-0 slovensko w-fit">
					<AnimatedTextCharacter
						text={recipe.title}
						className="text-[2rem] xl:text-[3rem] leading-[6rem]"
					/>
				</h1>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={imageVariants}
					className="mb-6 opacity-0"
				>
					<img
						src="/banner4.jpeg"
						className="w-[100%] aspect-[3/2] mx-auto rounded-xl object-cover"
						alt=""
					/>
				</motion.div>

				<RecipeHeader recipe={recipe} currentUser={currentUser} />

				<p className="text-lg mb-4">
					This is a wonderful recipe description. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Nullam ac tortor risus. Lorem ipsum dolor
					sit amet consectetur, adipisicing elit. Ipsa tempore voluptatem odit
					cumque voluptas earum, dolores error veniam maiores tempora.
				</p>

				<div className="my-8 mt-[4rem] mb-14">
					<AnimatedTextWord
						className=" text-white mx-auto jura w-fit text-[2.25rem] text-center flex items-center justify-center mb-6"
						text={"Ingredients"}
					/>
					<div className="flex items-center justify-between">
						<div className="w-1/2 flex flex-col gap-2 ">
							{ingredients
								.slice(0, Math.ceil(ingredients.length / 2))
								.map((ingredient: any, index: any) => (
									<div
										key={index}
										className={`flex gap-4 items-center justify-between ${
											index < Math.ceil(ingredients.length / 2) - 1
												? "border-b-2 border-neutral-800 pb-4 pr-6"
												: "pr-6 pt-2"
										}`}
									>
										<h3 className="text-[1.15rem] text-white">
											{ingredient.name}
										</h3>
										<p className="text-[1rem] text-neutral-400">
											{ingredient.amount}
										</p>
									</div>
								))}
						</div>
						<div className="w-1/2 border-l-2 border-neutral-800 pr-4 flex flex-col gap-2 ">
							{ingredients
								.slice(Math.ceil(ingredients.length / 2))
								.map((ingredient: any, index: any) => (
									<div
										key={index}
										className={`flex gap-4 items-center justify-between ${
											index < Math.ceil(ingredients.length / 2) - 1
												? "border-b-2 border-neutral-800 pb-4 pr-6 pl-10"
												: "pl-10 pr-6 pt-2"
										}`}
									>
										<h3 className="text-[1.15rem] text-white">
											{ingredient.name}
										</h3>
										<p className="text-[1rem] text-neutral-400">
											{ingredient.amount}
										</p>
									</div>
								))}
						</div>
					</div>
				</div>

				<div className="my-4 mt-[6rem] mb-6">
					<AnimatedTextWord
						className="text-md text-white mx-auto jura w-fit text-[2.25rem] text-center flex items-center justify-center mb-6"
						text={"Steps"}
					/>
					{recipe.steps.map((step: any, i: any) => (
						<div className="border-b-2 pb-12 mb-12 border-neutral-800" key={i}>
							<AnimatedTextWord
								className="text-md text-white mx-auto jura w-full text-[2.25rem] text-left flex mb-6 bg-gradient-to-r from-neutral-800/50 to-neutral-950 pl-6 border-l-4 border-neutral-700"
								text={`Step ${i + 1}`}
							/>
							<p>{step}</p>
						</div>
					))}
				</div>

				<AnimatedTextWord
					className=" text-white mx-auto jura w-fit text-[2.25rem] text-center flex items-center justify-center mb-6 mt-8"
					text={"Extra Info"}
				/>
				<p className="mb-8">{recipe.extraInfo}</p>

				<h2 className="text-xl font-semibold mb-2">Category</h2>
				<p className="mb-8">Main Course</p>

				<Comments />
			</div>
		</div>
	);
};

export default RecipeDetails;
