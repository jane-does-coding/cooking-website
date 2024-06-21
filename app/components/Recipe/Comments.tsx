import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Comment from "./Comment";
import AnimatedTextWord from "../Text/AnimatedTextWord";

const Comments = () => {
	const commentsArray = new Array(5).fill(0); // Array to map over

	// Animation variants
	const commentVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<div className="flex flex-col gap-6">
			<AnimatedTextWord
				className="text-md text-white mx-auto jura w-fit text-[2.25rem] text-center flex items-center justify-center mb-6"
				text={"Comments"}
			/>
			{commentsArray.map((_, index) => (
				<CommentItem key={index} index={index} variants={commentVariants} />
			))}
		</div>
	);
};

// Component to animate each comment
const CommentItem = ({ index, variants }: any) => {
	const controls = useAnimation();
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

	React.useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<motion.div
			ref={ref}
			custom={index}
			initial="hidden"
			animate={controls}
			variants={variants}
			transition={{ delay: index * 0.1 }} // stagger with 0.1s delay per item
		>
			<Comment />
		</motion.div>
	);
};

export default Comments;
