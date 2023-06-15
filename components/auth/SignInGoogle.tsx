"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

import { getRedirectResult, signInWithRedirect } from "firebase/auth";
import { auth, provider } from "@/config/firebase-config";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SignInGoogle = () => {
  const router = useRouter();

  useEffect(() => {
    getRedirectResult(auth).then(async (userCred) => {
      if (!userCred) {
        return;
      }

      fetch("/api/login", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${await userCred.user.getIdToken()}`,
        },
      }).then((response) => {
        if (response.status === 200) {
          router.push("/");
        }
      });
    });
  }, []);

  const handleLogin = () => {
    signInWithRedirect(auth, provider);
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
