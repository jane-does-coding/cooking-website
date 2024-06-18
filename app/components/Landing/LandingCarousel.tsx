import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const LandingCarousel = () => {
	const items = [
		{
			link: "/",
			title: "",
			image: "/banner1.jpeg",
		},
		{
			link: "/",
			title: "",
			image: "/banner2.jpeg",
		},
		{
			link: "/",
			title: "",
			image: "/banner3.jpeg",
		},
		{
			link: "/",
			title: "",
			image: "/banner4.jpeg",
		},
		{
			link: "/",
			title: "",
			image: "/banner5.jpeg",
		},
		{
			link: "/",
			title: "",
			image: "/banner6.jpeg",
		},
	];

	return (
		<div className="mx-20 w-[100vw]">
			<Carousel
				opts={{
					align: "start",
				}}
				className="w-full max-w-[90vw]"
			>
				<CarouselContent>
					{items.map((item, index) => (
						<CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
							<div className="p-1">
								<Card>
									<CardContent className="flex aspect-square items-center justify-center p-6">
										{/* 										<span className="text-3xl font-semibold">hey</span>
										 */}{" "}
										<img
											className="w-full h-[30vh] object-cover"
											src={item.image}
											alt=""
										/>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
};

export default LandingCarousel;
