"use client";
import Input from "@/app/components/Input";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

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

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		axios
			.post("/api/register", data)
			.then(() => {
				signIn("credentials", {
					...data,
					redirect: false,
				}).then((callback) => {
					setIsLoading(false);

					if (callback?.ok) {
						toast.success("Logged in");
						router.push("/");
						router.refresh();
					}

					if (callback?.error) {
						toast.error(callback.error);
					}
				});
			})
			.catch((err: any) => {
				console.log(err);
				toast.error("Something went wrong");
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex flex-col gap-3">
					<div className="flex gap-3">
						<Input
							id="name"
							label="Full Name"
							disabled={isLoading}
							errors={errors}
							required
							register={register}
						/>
						<Input
							id="username"
							label="Username"
							disabled={isLoading}
							errors={errors}
							required
							register={register}
						/>
					</div>
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
					<button type="submit">submit</button>
				</div>
			</form>
		</div>
	);
};

export default Register;
