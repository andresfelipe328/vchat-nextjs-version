import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";

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
// export function loginRequiredClient() {
//   if (typeof window !== "undefined") {
//     const session = useSession()
//     const router = useRouter()
//     if (!session) router.push('/')
//   }
// }
