"use client";
import React, { useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import Input from "@/app/components/Input";

const Register = () => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		setIsLoading(true);

		try {
			await axios.post("/api/register", data);
			const callback = await signIn("credentials", {
				...data,
				redirect: false,
			});

			setIsLoading(false);

			if (callback?.ok) {
				toast.success("Logged in");
				router.push("/recipes");
				router.refresh();
			} else if (callback?.error) {
				toast.error(callback.error);
			}
		} catch (error) {
			console.log(error);
			toast.error("Something went wrong");
			setIsLoading(false);
		}
	};

	return (
		<div className="w-[100vw] h-[100vh] flex items-center justify-center">
			<div className="w-[40vw] h-fit rounded-xl bg-neutral-900 px-8 py-8">
				<h1 className="text-[2rem] mx-auto mb-8 w-fit slovensko">Register</h1>
				<form onSubmit={handleSubmit(onSubmit)} className="gap-2 flex flex-col">
					<div className="w-full flex gap-2">
						<div className="relative w-1/2">
							<Input
								id="name"
								label="Full Name"
								disabled={isLoading}
								errors={errors}
								required
								register={register}
							/>
						</div>
						<div className="relative w-1/2">
							<Input
								id="username"
								label="Username"
								disabled={isLoading}
								errors={errors}
								required
								register={register}
							/>
						</div>
					</div>
					<div className="relative w-full">
						<Input
							id="email"
							label="Email"
							disabled={isLoading}
							errors={errors}
							required
							register={register}
						/>
					</div>
					<div className="relative w-full">
						<Input
							id="password"
							label="Password"
							type="password"
							disabled={isLoading}
							errors={errors}
							required
							register={register}
						/>
					</div>
					<button
						type="submit"
						disabled={isLoading}
						className="w-full p-3 bg-neutral-950 text-white rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed mt-2"
					>
						{isLoading ? "Registering..." : "Submit"}
					</button>
				</form>
				<div className="mt-4 text-neutral-500 text-sm flex gap-2 text-center items-center justify-center mx-auto">
					Already have an account?{" "}
					<a href="/login" className="text-neutral-200">
						Login
					</a>
				</div>
			</div>
		</div>
	);
};

export default Register;
