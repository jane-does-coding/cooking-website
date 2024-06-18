"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsLoading(true);

		const callback = await signIn("credentials", {
			redirect: false,
			email,
			password,
		});

		setIsLoading(false);

		if (callback?.ok) {
			toast.success("Logged in");
			router.push("/");
			router.refresh();
		} else if (callback?.error) {
			toast.error(callback.error);
		}
	};

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<div className="w-full relative my-1">
					<label
						htmlFor="email"
						className="absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-zinc-400"
					>
						Email
					</label>
					<input
						id="email"
						type="text"
						disabled={isLoading}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						placeholder=" "
						className={`peer w-full p-3 pt-6 pl-4 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative
						focus:border-neutral-900`}
					/>
				</div>

				<div className="w-full relative my-1">
					<label
						htmlFor="password"
						className="absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-zinc-400"
					>
						Password
					</label>
					<input
						id="password"
						type="password"
						disabled={isLoading}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						placeholder=" "
						className={`peer w-full p-3 pt-6 pl-4 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative
						focus:border-neutral-900`}
					/>
				</div>

				<button
					type="submit"
					disabled={isLoading}
					className="w-full p-3 bg-blue-500 text-white rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed"
				>
					{isLoading ? "Logging in..." : "Submit"}
				</button>
			</form>
		</div>
	);
};

export default Login;
