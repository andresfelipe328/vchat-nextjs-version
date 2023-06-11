import MiniRoomNotifPopup from "@/components/popups/roomPopups/MiniRoomNotifPopup";
import MiniRoomPinPopup from "@/components/popups/roomPopups/MiniRoomPinPopup";
import RoomAddFriendPopup from "@/components/popups/roomPopups/RoomAddFriendPopup";

const ExtraRoomMenu = () => {
  const addRoomFriend = async (username: string) => {
    // "use server";

    console.log("adding friend to room...");
  };

  return (
    <div className="flex items-center">
      <div className="flex-1">
        <RoomAddFriendPopup />
      </div>

      <div className="flex items-center">
        <MiniRoomNotifPopup />
        <MiniRoomPinPopup />
      </div>
    </div>
  );
};

export default ExtraRoomMenu;
