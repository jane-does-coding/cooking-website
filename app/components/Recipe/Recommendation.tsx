"use client";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { motion, useInView } from "framer-motion"; // Import Framer Motion and useInView
import { useRef } from "react"; // Import useRef

const fadeInVariant = {
	hidden: { opacity: 0, y: 20 },
	visible: (index: any) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: index * 0.06, // Stagger delay
			duration: 0.5, // Animation duration
		},
	}),
};

const Recommendation = () => {
	const cardRef = useRef(null);
	const headerRef = useRef(null);
	const contentRef = useRef(null);
	const footerRef = useRef(null);

	// Use useInView to track visibility
	const cardInView = useInView(cardRef, { once: true });
	const headerInView = useInView(headerRef, { once: true });
	const contentInView = useInView(contentRef, { once: true });
	const footerInView = useInView(footerRef, { once: true });

	return (
		<div>
			<Card className="w-full" ref={cardRef}>
				<motion.div
					ref={headerRef}
					initial="hidden"
					animate={cardInView ? "visible" : "hidden"}
					custom={0}
					variants={fadeInVariant}
				>
					<CardHeader>
						<motion.div
							initial="hidden"
							animate={headerInView ? "visible" : "hidden"}
							custom={1}
							variants={fadeInVariant}
						>
							<CardTitle>Create project</CardTitle>
						</motion.div>
						<motion.div
							initial="hidden"
							animate={headerInView ? "visible" : "hidden"}
							custom={2}
							variants={fadeInVariant}
						>
							<CardDescription>
								Deploy your new project in one-click.
							</CardDescription>
						</motion.div>
					</CardHeader>
				</motion.div>

				<motion.div
					ref={contentRef}
					initial="hidden"
					animate={contentInView ? "visible" : "hidden"}
					custom={3}
					variants={fadeInVariant}
				>
					<CardContent>
						<img src="/banner4.jpeg" className="rounded-lg" alt="" />
					</CardContent>
				</motion.div>

				<motion.div
					ref={footerRef}
					initial="hidden"
					animate={footerInView ? "visible" : "hidden"}
					custom={4}
					variants={fadeInVariant}
				>
					<CardFooter className="flex justify-between">
						<motion.div
							initial="hidden"
							animate={footerInView ? "visible" : "hidden"}
							custom={5}
							variants={fadeInVariant}
						></motion.div>
						<motion.div
							initial="hidden"
							animate={footerInView ? "visible" : "hidden"}
							custom={6}
							variants={fadeInVariant}
							className="flex gap-4 items-center"
						>
							<Button variant="outline">Share</Button>
							<Button>View</Button>
						</motion.div>
					</CardFooter>
				</motion.div>
			</Card>
		</div>
	);
};

export default Recommendation;
