"use client";

import React, { useState, useEffect } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { RiUserAddFill } from "react-icons/ri";
import { AiFillFolderAdd } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";

import CollapseAnimationLayout from "@/components/layouts/animationLayouts/CollapseAnimationLayout";
import AddMainRoomPopup from "./AddMainRoomPopup";

const STYLE = {
  top: ".5rem",
  right: ".5rem",
  position: "absolute",
  zIndex: "50",
};

const RoomMenuPopup = () => {
  const [show, setShow] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const handleDeleteRoom = async () => {
    const res = await fetch("http://localhost:3000/api/delete-room", {
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
    <>
      <AddMainRoomPopup show={showAdd} setShow={setShowAdd} />
      <button
        onClick={() => setShow(!show)}
        className="rounded-md hover:bg-sub-bg hover:shadow-small-shadow p-2 transition-all duration-300 ease-in-out"
      >
        <BsFillCaretDownFill className="icon" />
      </button>

      <CollapseAnimationLayout style={STYLE} show={show} setShow={setShow}>
        <ul>
          <li>
            <button className="w-full p-2 rounded-md flex items-center gap-2 hover:bg-sub-bg hover:shadow-small-shadow transition-all duration-300 ease-in-out">
              <RiUserAddFill className="icon" />
              <small>invite to room</small>
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                setShow(!show);
                setShowAdd(!showAdd);
              }}
              className="w-full p-2 rounded-md flex items-center gap-2 hover:bg-sub-bg hover:shadow-small-shadow transition-all duration-300 ease-in-out"
            >
              <AiFillFolderAdd className="icon" />
              <small>create main room</small>
            </button>
          </li>

          <li>
            <button
              onClick={handleDeleteRoom}
              className="w-full group p-2 rounded-md flex items-center gap-2 hover:bg-red-700 hover:shadow-small-shadow transition-all duration-300 ease-in-out"
            >
              <FaTrash className="icon text-red-700 group-hover:text-main-bg transition-all duration-300 ease-in-out" />
              <small className="group-hover:text-main-bg transition-all duration-300 ease-in-out">
                delete room
              </small>
            </button>
          </li>
        </ul>
      </CollapseAnimationLayout>
    </>
  );
};

export default RoomMenuPopup;
