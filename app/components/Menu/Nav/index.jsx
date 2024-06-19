import styles from "./style.module.scss";
import { motion } from "framer-motion";
/* import { links, footerLinks } from "./data";
 */ import { perspective, slideIn } from "./anim";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export const no_user_links = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Signup",
		href: "/dashboard",
	},
	{
		title: "Login",
		href: "/settings",
	},
	{
		title: "About",
		href: "/tasks",
	},
	{
		title: "Contact",
		href: "/contact",
	},
];

export default function Index({ currentUser }) {
	const router = useRouter();

	return (
		<div className={styles.nav}>
			<div className={styles.body}>
				{currentUser ? (
					/* Logged in links */

					<div className="styles.linkContainer">
						<div className={`my-2`}>
							<motion.button
								href={"/"}
								custom={0}
								variants={perspective}
								initial="initial"
								animate="enter"
								exit="exit"
							>
								<a href={"/"}>Home</a>
							</motion.button>
						</div>
						<div className={`my-2`}>
							<motion.button
								href={"/"}
								custom={1}
								variants={perspective}
								initial="initial"
								animate="enter"
								exit="exit"
							>
								<a href="/dashboard">Dashboard</a>
							</motion.button>
						</div>
						<div className={`my-2`}>
							<motion.button
								href={"/"}
								custom={2}
								variants={perspective}
								initial="initial"
								animate="enter"
								exit="exit"
								onClick={() => router.push("/")}
							>
								<a>Today&apos;s Entry</a>
							</motion.button>
						</div>
						<div className={`my-2`}>
							<motion.button
								href={"/"}
								custom={3}
								variants={perspective}
								initial="initial"
								animate="enter"
								exit="exit"
							>
								<a href={"/profile"}>Profile</a>
							</motion.button>
						</div>
						<div className={`my-2`}>
							<motion.button
								href={"/"}
								custom={4}
								variants={perspective}
								initial="initial"
								animate="enter"
								exit="exit"
								onClick={() => signOut()}
							>
								<a>Logout</a>
							</motion.button>
						</div>
					</div>
				) : (
					/* Not logged in links */
					<div className="">
						<div className={`my-2`}>
							<motion.button
								href={"/"}
								custom={0}
								variants={perspective}
								initial="initial"
								animate="enter"
								exit="exit"
							>
								<a href="/">Home</a>
							</motion.button>
						</div>
						<div className={`my-2`}>
							<motion.button
								href={"/"}
								custom={1}
								variants={perspective}
								initial="initial"
								animate="enter"
								exit="exit"
								onClick={() => router.push("/register")}
							>
								<a>Register</a>
							</motion.button>
						</div>
						<div className={`my-2`}>
							<motion.button
								href={"/"}
								custom={2}
								variants={perspective}
								initial="initial"
								animate="enter"
								exit="exit"
								onClick={() => router.push("/login")}
							>
								<a>Login</a>
							</motion.button>
						</div>
						<div className={`my-2`}>
							<motion.button
								href={"/"}
								custom={3}
								variants={perspective}
								initial="initial"
								animate="enter"
								exit="exit"
								onClick={() => loginModal.onOpen()}
							>
								<a>About</a>
							</motion.button>
						</div>
						<div className={`my-2`}>
							<motion.button
								href={"/"}
								custom={4}
								variants={perspective}
								initial="initial"
								animate="enter"
								exit="exit"
								onClick={() => loginModal.onOpen()}
							>
								<a>Contact</a>
							</motion.button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
