import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

import { MainHomeContents } from "@/components/homePage/friendsRequestsPanel/MainHomeContent";
import BasicAnimationLayout from "@/components/layouts/animationLayouts/BasicAnimationLayout";
import { db } from "@/config/firebase-admin";

export default async function Home() {
  const session: any = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <BasicAnimationLayout
      Tag="div"
      style="flex-1 rounded-md bg-main-bg shadow-static-shadow p-2"
      id="home-friends-requests-mgmt"
    >
      <MainHomeContents />
    </BasicAnimationLayout>
  );
}
