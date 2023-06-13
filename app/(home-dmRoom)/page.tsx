import { loginRequiredServer } from "@/config/auth";

import { MainHomeContents } from "@/components/homePage/friendsRequestsPanel/MainHomeContent";
import BasicAnimationLayout from "@/components/layouts/animationLayouts/BasicAnimationLayout";

export default async function Home() {
  await loginRequiredServer();

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
