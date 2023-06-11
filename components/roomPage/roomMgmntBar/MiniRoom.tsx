import { BsFillChatSquareTextFill } from "react-icons/bs";
import MiniRoomMenu from "./MiniRoomMenu";
import Link from "next/link";

const MiniRoom = () => {
  return (
    <>
      <Link
        href="/room/1/1"
        className="group/parent px-2 py-1 flex rounded-md items-center justify-between hover:bg-sub-bg hover:shadow-small-shadow transition-all duration-300 ease-in-out"
      >
        <div className="flex items-center gap-2">
          <BsFillChatSquareTextFill className="icon" />
          <small>mini room</small>
        </div>

        <MiniRoomMenu />
      </Link>
    </>
  );
};

export default MiniRoom;
