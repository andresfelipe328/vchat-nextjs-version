"use client";

import React, { useState } from "react";

import { MdMoreHoriz } from "react-icons/md";
import { FaTrash, FaPhone } from "react-icons/fa";
import CollapseAnimationLayout from "../layouts/animationLayouts/CollapseAnimationLayout";

const STYLE = {
  top: "0",
  right: "0",
  position: "absolute",
  zIndex: "50",
};

const FriendMoreMenuPopup = () => {
  const [show, setShow] = useState(false);

  const handleCallFriend = async () => {
    // const res = await fetch("http://localhost:3000/api/create-voice-call", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username: "friend",
    //   }),
    // });
    // const result = await res.json();
    console.log("Maing a voice call...");
  };

  const handleDeleteFriend = async () => {
    // const res = await fetch("http://localhost:3000/api/delete-friend", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username: "friend",
    //   }),
    // });
    // const result = await res.json();
    console.log("Deleting friend...");
  };

  return (
    <>
      <button
        onClick={() => setShow(!show)}
        className="rounded-md hover:bg-main-bg hover:shadow-small-shadow p-2 transition-all duration-300 ease-in-out"
      >
        <MdMoreHoriz className="icon" />
      </button>

      <CollapseAnimationLayout style={STYLE} show={show} setShow={setShow}>
        <button
          onClick={handleDeleteFriend}
          className="w-full group p-2 rounded-md flex items-center gap-2 hover:bg-red-700 hover:shadow-small-shadow transition-all duration-300 ease-in-out"
        >
          <FaTrash className="icon text-red-700 group-hover:text-main-bg transition-all duration-300 ease-in-out" />
          <small className="group-hover:text-main-bg transition-all duration-300 ease-in-out">
            delete friend
          </small>
        </button>
        <button
          onClick={handleCallFriend}
          className="p-2 rounded-md flex items-center gap-2 hover:bg-sub-bg hover:shadow-small-shadow transition-all duration-300 ease-in-out"
        >
          <FaPhone className="icon" />
          <small>start voice call</small>
        </button>
      </CollapseAnimationLayout>
    </>
  );
};

export default FriendMoreMenuPopup;
