import BasicAnimationLayout from "./BasicAnimationLayout";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <BasicAnimationLayout
      Tag="main"
      style="p-2 h-screen flex gap-1"
      id="main-conent-container"
    >
      {children}
    </BasicAnimationLayout>
  );
};

export default MainLayout;
