import React from "react";

import ExtraRoomMenu from "@/components/roomPage/roomChat/ExtraRoomMenu";
import BasicAnimationLayout from "@/components/layouts/animationLayouts/BasicAnimationLayout";

const page = () => {
  return (
    <>
      <BasicAnimationLayout
        Tag="div"
        style="flex-1 rounded-md bg-main-bg shadow-static-shadow p-2"
        id="home-friends-requests-mgmt"
      >
        <ExtraRoomMenu />
      </BasicAnimationLayout>
    </>
  );
};

export default page;
