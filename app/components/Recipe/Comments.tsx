import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Comment from "./Comment";
import AnimatedTextWord from "../Text/AnimatedTextWord";

const Comments = ({ comments }: any) => {
	const commentVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	if (comments.length < 1)
		return (
			<div>
				<h2>
					<AnimatedTextWord
						text={"Be the first to comment"}
						className="jura text-center text-[1.25rem] w-fit mx-auto text-neutral-200"
					/>
				</h2>
			</div>
		);

	return (
		<div className="flex flex-col gap-6">
			{comments.map((comment: any, index: number) => (
				<CommentItem
					comment={comment}
					key={index}
					index={index}
					variants={commentVariants}
				/>
			))}
		</div>
	);
};

const CommentItem = ({ index, variants, comment }: any) => {
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
			transition={{ delay: index * 0.1 }}
		>
			<Comment comment={comment} />
		</motion.div>
	);
};

export default Comments;
