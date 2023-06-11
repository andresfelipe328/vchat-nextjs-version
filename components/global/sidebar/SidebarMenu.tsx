"use client";

import { FaPlus } from "react-icons/fa";

import UserMenuPopup from "@/components/popups/UserMenuPopup";

const SidebarMenu = () => {
  const handleCreateRoom = async () => {
    const res = await fetch("http://localhost:3000/api/create-room", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: "roomname",
      }),
    });
    const result = await res.json();
  };

  return (
    <div
      className="relative p-2 flex flex-col items-center gap-4 border-t-4 border-t-sub-bg z-20"
      id="sidebar-user-menu"
    >
      <button onClick={handleCreateRoom}>
        <FaPlus className="text-dark text-5xl bg-sub-bg p-2 rounded-3xl shadow-animation border-4 border-dark sidebar-icon" />
      </button>

      <UserMenuPopup />
    </div>
  );
};

export default SidebarMenu;
