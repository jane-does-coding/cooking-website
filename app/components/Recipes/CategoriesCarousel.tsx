"use client";

import { motion } from "framer-motion";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const CategoriesCarousel = () => {
	const items = [
		{ link: "/", title: "Fruits", image: "/banner1.jpeg" },
		{ link: "/", title: "Vegetables", image: "/banner2.jpeg" },
		{ link: "/", title: "Dairy", image: "/banner3.jpeg" },
		{ link: "/", title: "Meat", image: "/banner4.jpeg" },
		{ link: "/", title: "Seafood", image: "/banner5.jpeg" },
		{ link: "/", title: "Grains", image: "/banner6.jpeg" },
	];

	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
			className="ml-[5vw] w-[90vw]"
		>
			<Carousel opts={{ align: "start" }} className="w-full max-w-[90vw]">
				<CarouselContent className="flex flex-wrap gap-4 justify-center">
					{items.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="w-1/5 min-w-[120px] max-w-[225px] aspect-[1] mx-1"
						>
							<CarouselItem className="w-full h-full">
								<Card className="relative rounded-full overflow-hidden border-none">
									<CardContent className="relative flex items-center justify-center p-0">
										<img
											className="w-full h-full aspect-[1] object-cover rounded-full"
											src={item.image}
											alt={item.title}
										/>
										<div className="absolute inset-0 w-full h-full bg-neutral-950/[60%] transition rounded-full" />
										<div className="absolute inset-0 flex items-center justify-center text-white text-[1.5rem] font-bold slovensko">
											{item.title}
										</div>
									</CardContent>
								</Card>
							</CarouselItem>
						</motion.div>
					))}
				</CarouselContent>
				<CarouselPrevious className="absolute left-0" />
				<CarouselNext className="absolute right-0" />
			</Carousel>
		</motion.div>
	);
};

export default CategoriesCarousel;
