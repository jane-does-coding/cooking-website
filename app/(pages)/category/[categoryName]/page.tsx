import getCategoryByName from "@/app/actions/getCategoryByName";
import getCurrentUser from "@/app/actions/getCurrentUser";
import Category from "@/app/components/Category/Category";
import React from "react";

const page = async ({ params }: any) => {
	const { categoryName } = params;
	const recipes = await getCategoryByName(categoryName);
	const currentUser = getCurrentUser();

	return (
		<div>
			<Category
				currentUser={currentUser}
				recipes={recipes}
				categoryName={categoryName}
			/>
		</div>
	);
};

export default page;
