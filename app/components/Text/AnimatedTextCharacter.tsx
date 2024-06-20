"use client";
import React from "react";
import { motion } from "framer-motion";

interface AnimatedTextCharacterProps {
	text: string;
	className?: string;
	animationDelay?: number;
}

const AnimatedTextCharacter: React.FC<AnimatedTextCharacterProps> = ({
	text,
	className = "",
	animationDelay = 0.04,
}) => {
	const letters = Array.from(text);

	const container = {
		hidden: { opacity: 0 },
		visible: (i = 1) => ({
			opacity: 1,
			transition: { staggerChildren: 0.03, delayChildren: animationDelay * i },
		}),
	};

	const child = {
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100,
			},
		},
		hidden: {
			opacity: 0,
			x: -20,
			y: 10,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100,
			},
		},
	};

	return (
		<motion.div
			style={{ overflow: "hidden", display: "flex" }}
			variants={container}
			initial="hidden"
			animate="visible"
			className={className}
		>
			{letters.map((letter, index) => (
				<motion.span variants={child} key={index}>
					{letter === " " ? "\u00A0" : letter}
				</motion.span>
			))}
		</motion.div>
	);
};

export default AnimatedTextCharacter;
