import SignInGoogle from "@/components/auth/SignInGoogle";
import React from "react";

export const metadata = {
  title: "login",
  description: "login page",
};

const page = () => {
  return (
    <div className="bg-main-bg rounded-md flex-1 shadow-static-shadow flex flex-col gap-4 items-center justify-center">
      <h1>Login</h1>
      <SignInGoogle />
    </div>
  );
};

export default page;
