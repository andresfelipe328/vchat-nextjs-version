import BasicAnimationLayout from "@/components/layouts/animationLayouts/BasicAnimationLayout";

export const metadata = {
  title: "dmroom",
  description: "dmroom information",
};

const page = () => {
  return (
    <BasicAnimationLayout
      Tag="div"
      style="flex-1 rounded-md bg-main-bg shadow-static-shadow p-2"
      id="home-friends-requests-mgmt"
    >
      <h2>dmRoom Chat</h2>
    </BasicAnimationLayout>
  );
};

export default page;
