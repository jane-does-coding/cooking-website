"use client";
import { signOut } from "next-auth/react";
import React from "react";

const SignOutButton = () => {
	return (
		<div>
			<button onClick={() => signOut()}>sign out</button>
		</div>
	);
};

export default SignOutButton;
