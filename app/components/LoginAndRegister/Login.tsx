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
		<div className="w-[100vw] h-[100vh] flex items-center justify-center">
			<div className="w-[40vw] h-fit rounded-xl bg-neutral-900 px-8 py-8">
				<h1 className="slovensko text-[2rem] mx-auto mb-8 w-fit">Login</h1>
				<form onSubmit={handleSubmit} className="gap-2 flex flex-col">
					<div className="w-full relative my-1">
						<input
							id="email"
							type="text"
							disabled={isLoading}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							placeholder=" "
							className={`peer w-full p-3 pt-6 pl-4 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative`}
						/>
						<label
							className={`absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4`}
						>
							Email
						</label>
					</div>

					<div className="w-full relative my-1">
						<input
							id="password"
							type="password"
							disabled={isLoading}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							placeholder=" "
							className={`peer w-full p-3 pt-6 pl-4 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative`}
						/>
						<label
							className={`absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4`}
						>
							Password
						</label>
					</div>

					<button
						type="submit"
						disabled={isLoading}
						className="w-full p-3 bg-neutral-950 text-white rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed mt-2"
					>
						{isLoading ? "Logging in..." : "Submit"}
					</button>
				</form>
				<div className="mt-4 text-neutral-500 text-sm flex gap-2 text-center items-center justify-center mx-auto">
					Don&apos;t have an account?{" "}
					<a href="/register" className="text-neutral-200">
						Register
					</a>
				</div>
			</div>
		</div>
	);
};

export default Login;
