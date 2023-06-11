import Friend from "./Friend";
import BasicAnimationLayout from "@/components/layouts/animationLayouts/BasicAnimationLayout";

type Props = {
  page: string;
};

const FriendList = ({ page }: Props) => {
  return (
    <BasicAnimationLayout
      Tag="div"
      style="flex flex-col gap-2"
      id="friend-listing"
    >
      <h1 className="border-b-2 border-b-dark/50 uppercase">{page}</h1>

      <ul className="flex flex-col">
        <Friend />
      </ul>
    </BasicAnimationLayout>
  );
};

export default FriendList;
