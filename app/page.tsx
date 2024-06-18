import Image from "next/image";
import LandingCarousel from "./components/Landing/LandingCarousel";

export default function Home() {
	return (
		<div className="">
			<h1 className="text-[4rem] mx-auto my-10">Explore Recipes</h1>
			<LandingCarousel />
		</div>
	);
}
