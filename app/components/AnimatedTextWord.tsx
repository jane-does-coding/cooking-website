"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedTextWord = ({
	text,
	className = "",
	animationDelay = 0.04,
}: any) => {
	const words = text.split(" ");

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const container = {
		hidden: { opacity: 0 },
		visible: (i = 1) => ({
			opacity: 1,
			transition: { staggerChildren: 0.12, delayChildren: animationDelay * i },
		}),
	};

	const child = {
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100,
			},
		},
		hidden: {
			opacity: 0,
			x: 20,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100,
			},
		},
	};

	return (
		<motion.div
			ref={ref}
			style={{ overflow: "hidden", display: "flex" }}
			variants={container}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			className={className}
		>
			{words.map((word: any, index: any) => (
				<motion.span
					variants={child}
					style={{ marginRight: "5px" }}
					key={index}
				>
					{word}
				</motion.span>
			))}
		</motion.div>
	);
};

export default AnimatedTextWord;
