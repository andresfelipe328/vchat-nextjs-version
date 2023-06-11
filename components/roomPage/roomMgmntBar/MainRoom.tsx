import MainRoomSettingsPopup from "@/components/popups/roomPopups/MainRoomSettingsPopup";
import MiniRoom from "./MiniRoom";

const MainRoom = () => {
  return (
    <li className="relative flex flex-col">
      <div className="flex items-center justify-between">
        <h3>Main Room</h3>

        <div className="flex items-center">
          <MainRoomSettingsPopup />
        </div>
      </div>

      <ul className="flex flex-col ml-2">
        <MiniRoom />
      </ul>
    </li>
  );
};

export default MainRoom;
