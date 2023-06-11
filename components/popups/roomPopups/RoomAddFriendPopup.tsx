"use client";

import React, { useState } from "react";

import { RiUserAddFill } from "react-icons/ri";

import CollapseAnimationLayout from "@/components/layouts/animationLayouts/CollapseAnimationLayout";
import AddFriendToRoomForm from "@/components/forms/AddFriendToRoomForm";

type Props = {
  addRoomFriend?: Function;
};

const STYLE = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "250px",
  zIndex: "50",
};

const RoomAddFriendPopup = ({ addRoomFriend }: Props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onClick={() => setShow(!show)}
        className="rounded-md hover:bg-sub-bg hover:shadow-small-shadow p-2 transition-all duration-300 ease-in-out"
      >
        <RiUserAddFill className="icon" />
      </button>

      <CollapseAnimationLayout show={show} setShow={setShow} style={STYLE}>
        <h3>Add a Friend</h3>

        <AddFriendToRoomForm show={show} setShow={setShow} />
      </CollapseAnimationLayout>
    </>
  );
};

export default RoomAddFriendPopup;
