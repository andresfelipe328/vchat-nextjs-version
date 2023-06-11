import MainDmRoomMgmntBar from "@/components/homePage/dmRoomMgmntBar/MainDmRoomMgmntBar";
import SettingsBar from "@/components/homePage/dmRoomMgmntBar/SettingsBar";
import BasicAnimationLayout from "@/components/layouts/animationLayouts/BasicAnimationLayout";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BasicAnimationLayout
        Tag="div"
        style="min-w-[20rem] rounded-md bg-main-bg shadow-static-shadow flex flex-col"
        id="home-dmroom-mgmt"
      >
        <MainDmRoomMgmntBar />
        <SettingsBar />
      </BasicAnimationLayout>

      {children}
    </>
  );
};

export default Layout;
