"use client";
import AnimatedTextCharacter from "../Text/AnimatedTextCharacter";
import { motion, useInView } from "framer-motion"; // Import Framer Motion and useInView
import AnimatedTextWord from "../Text/AnimatedTextWord";

const RecipeDetails = () => {
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
		<div className="w-full h-screen overflow-auto">
			<div className="container mx-auto py-8">
				<h1 className="mx-auto mb-6 xl:mb-6 mt-0 slovensko w-fit ">
					<AnimatedTextCharacter
						text={"Delicious Recipe Title"}
						className="text-[2rem] xl:text-[3rem]"
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
				<p className="text-lg mb-4">
					This is a wonderful recipe description. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Nullam ac tortor risus. Lorem ipsum dolor
					sit amet consectetur, adipisicing elit. Ipsa tempore voluptatem odit
					cumque voluptas earum, dolores error veniam maiores tempora.
				</p>

				{/* SECTION */}
				<div className="my-8 mb-14">
					<AnimatedTextWord
						className="text-md text-white mx-auto jura w-fit text-[2rem] text-center flex items-center justify-center mb-4"
						text={"Ingredients"}
					/>
					<div className="grid grid-cols-3 gap-4">
						<p className="bg-neutral-800 py-2 px-4 text-sm rounded-md">
							Ingredient 1
						</p>
						<p className="bg-neutral-800 py-2 px-4 text-sm rounded-md">
							Ingredient 1
						</p>
						<p className="bg-neutral-800 py-2 px-4 text-sm rounded-md">
							Ingredient 1
						</p>
						<p className="bg-neutral-800 py-2 px-4 text-sm rounded-md">
							Ingredient 1
						</p>
						<p className="bg-neutral-800 py-2 px-4 text-sm rounded-md">
							Ingredient 1
						</p>
						<p className="bg-neutral-800 py-2 px-4 text-sm rounded-md">
							Ingredient 1
						</p>
					</div>
				</div>

				<div className="my-4 mb-6">
					<AnimatedTextWord
						className="text-md text-white mx-auto jura w-fit text-[2rem] text-center flex items-center justify-center mb-4"
						text={"Steps"}
					/>
					<ol className="list-decimal pl-6 mb-4">
						<li>Step 1: Do this</li>
						<li>Step 2: Do that</li>
					</ol>
				</div>

				<h2 className="text-xl font-semibold mb-2">Extra Info</h2>
				<p className="mb-8">
					Some additional information about the recipe. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Nullam ac tortor risus. Lorem,
					ipsum dolor sit amet consectetur adipisicing elit. A sed, veritatis
					sint quo atque dolores, hic porro, praesentium temporibus animi
					distinctio quae laudantium tenetur. Aliquid neque suscipit facere
					numquam eveniet exercitationem eum error corporis repellat aut,
					delectus quidem similique eaque?
				</p>

				<h2 className="text-xl font-semibold mb-2">Extra Info</h2>
				<p className="mb-8">
					Some additional information about the recipe. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Nullam ac tortor risus. Lorem,
					ipsum dolor sit amet consectetur adipisicing elit. A sed, veritatis
					sint quo atque dolores, hic porro, praesentium temporibus animi
					distinctio quae laudantium tenetur. Aliquid neque suscipit facere
					numquam eveniet exercitationem eum error corporis repellat aut,
					delectus quidem similique eaque?
				</p>

				<h2 className="text-xl font-semibold mb-2">Extra Info</h2>
				<p className="mb-8">
					Some additional information about the recipe. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Nullam ac tortor risus. Lorem,
					ipsum dolor sit amet consectetur adipisicing elit. A sed, veritatis
					sint quo atque dolores, hic porro, praesentium temporibus animi
					distinctio quae laudantium tenetur. Aliquid neque suscipit facere
					numquam eveniet exercitationem eum error corporis repellat aut,
					delectus quidem similique eaque?
				</p>

				<h2 className="text-xl font-semibold mb-2">Extra Info</h2>
				<p className="mb-8">
					Some additional information about the recipe. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Nullam ac tortor risus. Lorem,
					ipsum dolor sit amet consectetur adipisicing elit. A sed, veritatis
					sint quo atque dolores, hic porro, praesentium temporibus animi
					distinctio quae laudantium tenetur. Aliquid neque suscipit facere
					numquam eveniet exercitationem eum error corporis repellat aut,
					delectus quidem similique eaque?
				</p>

				<h2 className="text-xl font-semibold mb-2">Extra Info</h2>
				<p className="mb-8">
					Some additional information about the recipe. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Nullam ac tortor risus. Lorem,
					ipsum dolor sit amet consectetur adipisicing elit. A sed, veritatis
					sint quo atque dolores, hic porro, praesentium temporibus animi
					distinctio quae laudantium tenetur. Aliquid neque suscipit facere
					numquam eveniet exercitationem eum error corporis repellat aut,
					delectus quidem similique eaque?
				</p>

				<h2 className="text-xl font-semibold mb-2">Category</h2>
				<p className="mb-8">Main Course</p>

				<h2 className="text-xl font-semibold mb-2">Extra Info</h2>
				<p className="mb-8">
					Some additional information about the recipe. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Nullam ac tortor risus. Lorem,
					ipsum dolor sit amet consectetur adipisicing elit. A sed, veritatis
					sint quo atque dolores, hic porro, praesentium temporibus animi
					distinctio quae laudantium tenetur. Aliquid neque suscipit facere
					numquam eveniet exercitationem eum error corporis repellat aut,
					delectus quidem similique eaque?
				</p>

				<h2 className="text-xl font-semibold mb-2">Category</h2>
				<p className="mb-8">Main Course</p>

				<h2 className="text-xl font-semibold mb-2">Extra Info</h2>
				<p className="mb-8">
					Some additional information about the recipe. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Nullam ac tortor risus. Lorem,
					ipsum dolor sit amet consectetur adipisicing elit. A sed, veritatis
					sint quo atque dolores, hic porro, praesentium temporibus animi
					distinctio quae laudantium tenetur. Aliquid neque suscipit facere
					numquam eveniet exercitationem eum error corporis repellat aut,
					delectus quidem similique eaque?
				</p>

				<h2 className="text-xl font-semibold mb-2">Category</h2>
				<p className="mb-8">Main Course</p>
			</div>
		</div>
	);
};

export default RecipeDetails;
