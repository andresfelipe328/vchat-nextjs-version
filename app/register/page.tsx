import React from "react";

import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
const page = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="bg-main-bg rounded-md flex-1 shadow-static-shadow flex flex-col gap-4 items-center justify-center">
      <h1>Register to Vchat</h1>
    </div>
  );
};

export default page;
