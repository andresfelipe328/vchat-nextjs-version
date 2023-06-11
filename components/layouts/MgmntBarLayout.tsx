import BasicAnimationLayout from "./animationLayouts/BasicAnimationLayout";

const MgmntBarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <BasicAnimationLayout
      Tag="div"
      style="min-w-[20rem] rounded-md bg-main-bg shadow-static-shadow flex flex-col"
      id="home-dmroom-mgmt"
    >
      {children}
    </BasicAnimationLayout>
  );
};

export default MgmntBarLayout;
