import RoomMenuPopup from "@/components/popups/roomPopups/RoomMenuPopup";
import React from "react";

const RoomMenu = () => {
  return (
    <div className="flex items-center justify-between p-2 z-10">
      <h2>Roomname</h2>

      <RoomMenuPopup />
    </div>
  );
};

export default RoomMenu;
