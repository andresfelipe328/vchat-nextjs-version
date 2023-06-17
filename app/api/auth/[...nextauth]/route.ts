import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { cert } from "firebase-admin/app";
import { db } from "@/config/firebase-admin";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/gm, "\n"),
    }),
  }),
  callbacks: {
    async session({ session, token, user }: any) {
      const newSession = {
        ...session,
        user,
      };

      return newSession;
    },
    async signIn({ user, account, profile, email, credentials }: any) {
      const userRef = db.collection("users").doc("sQvVdHuusFDxqXwXkCL7");
      await userRef.update({
        status: "active",
      });
      return true;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
