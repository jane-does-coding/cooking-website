import LandingCarousel from "./components/Landing/LandingCarousel";
import AnimatedTextWord from "./components/Text/AnimatedTextWord";
import AnimatedTextCharacter from "./components/Text/AnimatedTextCharacter";

export default function Home() {
	return (
		<>
			<div className=" min-h-[90vh] max-h-[105vh]">
				<div className="text-[2rem] mx-auto mt-28 mb-0 jura w-fit text-neutral-300">
					<AnimatedTextWord
						text="Perfect place to"
						className="text-[2rem]"
						animationDelay={0.3}
					/>
				</div>
				<h1 className="mx-auto mb-16 xl:mb-20 mt-0 slovensko w-fit ">
					<AnimatedTextCharacter
						text={"Explore Recipes"}
						className="text-[5rem] xl:text-[6rem]"
					/>
				</h1>
				<LandingCarousel />
			</div>
			<div className="w-[80vw] ml-[10vw] flex items-center justify-center gap-20 mt-14">
				<AnimatedTextWord
					text={
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus accusantium iste beatae doloremque nesciunt recusandae eum laboriosam ipsam, vero dicta!"
					}
					className="text-[1.5rem] xl:text-[1.75rem] max-w-[40vw] flex flex-wrap h-fit jura w-1/2"
				/>
				<div className="w-1/2">
					<img
						src="/banner1.jpeg"
						alt=""
						className="rounded-[3rem] w-full aspect-[1] object-cover"
					/>
				</div>
			</div>
		</>
	);
}
