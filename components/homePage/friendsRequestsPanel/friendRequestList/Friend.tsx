import React from "react";

import { BsFillChatSquareTextFill } from "react-icons/bs";

import FriendMoreMenuPopup from "@/components/popups/FriendMoreMenuPopup";

const Friend = () => {
  const handleCreateDmRoom = async () => {
    const res = await fetch("http://localhost:3000/api/create-dm-room", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: "friend",
      }),
    });
    const result = await res.json();
  };

  return (
    <li className="relative p-2 flex items-center rounded-md hover:bg-sub-bg hover:shadow-small-shadow transition-all duration-300 ease-in-out">
      <div className="flex items-center gap-2 flex-1">
        <div className="rounded-3xl bg-dark w-[3.2rem] h-[3.2rem] border-4 border-sub-bg sidebar-icon"></div>
        <p className="font-semibold">username</p>
      </div>

      <ul className="flex items-center">
        <li>
          <button
            onClick={handleCreateDmRoom}
            className="rounded-md hover:bg-main-bg hover:shadow-small-shadow p-2 transition-all duration-300 ease-in-out"
          >
            <BsFillChatSquareTextFill className="icon" />
          </button>
        </li>
        <li>
          <FriendMoreMenuPopup />
        </li>
      </ul>
    </li>
  );
};

export default Friend;
