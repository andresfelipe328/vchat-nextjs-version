import FriendTypes from "./FriendTypes";
import RequestList from "./RequestList";
import { HomePage } from "@/utils/types";

type Props = {
  page: HomePage;
};

const FriendRequestList = ({ page }: Props) => {
  return page.group === "friends" ? (
    <FriendTypes page={page} />
  ) : (
    <RequestList />
  );
};

export default FriendRequestList;
