"use client";

import React, { useState } from "react";

import { AiTwotoneSetting } from "react-icons/ai";
import { RiEdit2Fill } from "react-icons/ri";
import { FaPlus, FaTrash } from "react-icons/fa";

import CollapseAnimationLayout from "@/components/layouts/animationLayouts/CollapseAnimationLayout";
import AddMiniRenameMainRoomPopup from "./AddMiniRenameMainRoomPopup";

const STYLE = {
  top: "0",
  right: "0",
  position: "absolute",
  zIndex: "50",
};

const MainRoomSettingsPopup = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showRename, setShowRename] = useState(false);

  const handleDeleteMainRoom = async () => {
    // const res = await fetch("http://localhost:3000/api/delete-main-room", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: "mainRoomname",
    //   }),
    // });
    // const result = await res.json();
    console.log("Deleing main room");
  };

  return (
    <>
      <AddMiniRenameMainRoomPopup
        showAdd={showAdd}
        setShowAdd={setShowAdd}
        showRename={showRename}
        setShowRename={setShowRename}
      />
      <button
        onClick={() => setShowAdd(!showAdd)}
        className="rounded-md hover:bg-sub-bg hover:shadow-small-shadow p-2 transition-all duration-300 ease-in-out"
      >
        <FaPlus className="icon text-sm" />
      </button>

      <button
        onClick={() => setShowMenu(!showMenu)}
        className="rounded-md hover:bg-sub-bg hover:shadow-small-shadow p-2 transition-all duration-300 ease-in-out"
      >
        <AiTwotoneSetting className="icon text-sm" />
      </button>

      <CollapseAnimationLayout
        style={STYLE}
        show={showMenu}
        setShow={setShowMenu}
      >
        <button
          onClick={() => {
            setShowMenu(!showMenu);
            setShowRename(!showRename);
          }}
          className="p-2 rounded-md flex items-center gap-2 hover:bg-sub-bg hover:shadow-small-shadow transition-all duration-300 ease-in-out"
        >
          <RiEdit2Fill className="icon" />
          <small>edit name</small>
        </button>
        <button
          onClick={handleDeleteMainRoom}
          className="w-full group p-2 rounded-md flex items-center gap-2 hover:bg-red-700 hover:shadow-small-shadow transition-all duration-300 ease-in-out"
        >
          <FaTrash className="icon text-red-700 group-hover:text-main-bg transition-all duration-300 ease-in-out" />
          <small className="group-hover:text-main-bg transition-all duration-300 ease-in-out">
            delete
          </small>
        </button>
      </CollapseAnimationLayout>
    </>
  );
};

export default MainRoomSettingsPopup;
