"use client";
import CardsGrid from "../Recipes/CardsGrid";
import AnimatedTextCharacter from "../Text/AnimatedTextCharacter";

const transformCategoryName = (name: any) => {
	return name
		.split("-")
		.map(
			(word: any) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
		)
		.join(" ");
};

const Category = ({ currentUser, recipes, categoryName }: any) => {
	if (!recipes) return "hey";

	const transformedCategoryName = transformCategoryName(categoryName);

	return (
		<div className="min-h-screen pt-4">
			<h1 className="mx-auto mb-6 xl:mb-6 mt-0 slovensko w-fit">
				<AnimatedTextCharacter
					text={transformedCategoryName}
					className="text-[2rem] xl:text-[3rem] leading-[6rem]"
				/>
			</h1>
			<CardsGrid
				recipes={recipes}
				currentUser={currentUser}
				showFilters={true}
			/>
		</div>
	);
};

export default Category;
