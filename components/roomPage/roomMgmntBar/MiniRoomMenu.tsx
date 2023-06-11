"use client";

import React, { useState } from "react";

import { FaTrash } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";

import RenameMiniRoomPopup from "@/components/popups/roomPopups/RenameMiniRoomPopup";

const MiniRoomMenu = () => {
  const [show, setShow] = useState(false);

  const handleDeleteMiniroom = async () => {
    const res = await fetch("http://localhost:3000/api/delete-mini-room", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: "miniRoomname",
      }),
    });
    const result = await res.json();
  };

  return (
    <>
      <RenameMiniRoomPopup show={show} setShow={setShow} />
      <div className="flex items-center opacity-0 group-hover/parent:opacity-100">
        <button
          onClick={() => setShow(!show)}
          className="p-2 rounded-md hover:bg-main-bg hover:shadow-small-shadow transition-all duration-300 ease-in-out"
        >
          <RiEdit2Fill className="icon text-sm" />
        </button>
        <button
          onClick={handleDeleteMiniroom}
          className="group/delete p-2 rounded-md flex items-center gap-2 hover:bg-red-700 hover:shadow-small-shadow transition-all duration-300 ease-in-out"
        >
          <FaTrash className="icon icon text-sm text-red-700 group-hover/delete:text-main-bg transition-all duration-300 ease-in-out" />
        </button>
      </div>
    </>
  );
};

export default MiniRoomMenu;
