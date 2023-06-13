import BasicAnimationLayout from "@/components/layouts/animationLayouts/BasicAnimationLayout";
import MainRoomMgmntBar from "@/components/roomPage/roomMgmntBar/MainRoomMgnmtBar";

export const metadata = {
  title: "room",
  description: "room information",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BasicAnimationLayout
        Tag="div"
        style="min-w-[20rem] rounded-md bg-main-bg shadow-static-shadow flex flex-col"
        id="home-dmroom-mgmt"
      >
        <MainRoomMgmntBar />
      </BasicAnimationLayout>

      {children}
    </>
  );
};

export default Layout;
