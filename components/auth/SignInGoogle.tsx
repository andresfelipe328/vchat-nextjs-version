"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc";

import { signIn } from "next-auth/react";

const SignInGoogle = () => {
  const handleLogin = () => {
    signIn("google", {
      redirect: true,
      callbackUrl: "/register",
    });
  };

  return (
    <button
      onClick={handleLogin}
      className="button w-fit px-5 py-2 flex items-center gap-4"
    >
      <small>Login with Google</small>
      <FcGoogle className="text-3xl" />
    </button>
  );
};

export default SignInGoogle;
