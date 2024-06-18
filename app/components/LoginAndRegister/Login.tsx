"use client";
import Input from "@/app/components/Input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

const Login = () => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);
		console.log(data);

		signIn("credentials", {
			...data,
			redirect: false,
		})
			.then((callback) => {
				setIsLoading(false);

				if (callback?.ok) {
					toast.success("Logged in");
					router.push("/");
					router.refresh();
				}

				if (callback?.error) {
					toast.error(callback.error);
				}
			})
			.catch((error) => {
				setIsLoading(false);
				toast.error("An error occurred during sign-in");
				console.error(error); // Log the error for debugging
			});
	};

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					id="email"
					label="Email"
					disabled={isLoading}
					errors={errors}
					required
					register={register}
				/>
				<Input
					id="password"
					label="Password"
					type="password"
					disabled={isLoading}
					errors={errors}
					required
					register={register}
				/>
				<button type="submit" disabled={isLoading}>
					{isLoading ? "Logging in..." : "Submit"}
				</button>
			</form>
		</div>
	);
};

export default Login;
