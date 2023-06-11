"use client";

import React, { useState } from "react";

import { RiUserAddFill } from "react-icons/ri";
import AddFriendForm from "../forms/AddFriendForm";
import CollapseAnimationLayout from "../layouts/animationLayouts/CollapseAnimationLayout";

const STYLE = {
  position: "absolute",
  top: "0",
  right: "0",
  width: "200px",
  zIndex: "50",
};

const AddFriendPopup = () => {
  const [friend, setFriend] = useState<string | null>(null);
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onClick={() => setShow(!show)}
        className="rounded-md hover:bg-sub-bg hover:shadow-small-shadow p-1 transition-all duration-300 ease-in-out"
      >
        <RiUserAddFill className="icon" />
      </button>

      <CollapseAnimationLayout show={show} setShow={setShow} style={STYLE}>
        <h3>Add a Friend</h3>

        <AddFriendForm show={show} setShow={setShow} />
      </CollapseAnimationLayout>
    </>
  );
};

export default AddFriendPopup;
