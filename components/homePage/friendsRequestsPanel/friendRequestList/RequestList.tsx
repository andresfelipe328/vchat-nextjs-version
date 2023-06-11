import BasicAnimationLayout from "@/components/layouts/animationLayouts/BasicAnimationLayout";

const RequestList = () => {
  return (
    <BasicAnimationLayout
      Tag="div"
      style="flex flex-col gap-2"
      id="request-listing"
    >
      <h1 className="border-b-2 border-b-dark/50 uppercase">requests</h1>
    </BasicAnimationLayout>
  );
};

export default RequestList;
