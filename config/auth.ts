import { redirect } from "next/navigation";
import { NextAuthOptions, getServerSession } from "next-auth";

import GoogleProvider from "next-auth/providers/google";

export const authConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
};

export async function loginRequiredServer() {
  const session = await getServerSession(authConfig);
  if (!session) return redirect("/login");
}
