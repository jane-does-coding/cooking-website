import Recipe from "@/app/components/Recipe/Recipe";
import React from "react";

const page = (props: any) => {
	console.log(props);
	return (
		<div>
			<Recipe />
		</div>
	);
};

export default page;
