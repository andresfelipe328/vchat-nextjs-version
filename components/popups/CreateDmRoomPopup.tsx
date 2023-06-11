"use client";

import React, { useState } from "react";

import { FaPlus } from "react-icons/fa";

import CreateDmRoomForm from "../forms/CreateDmRoomForm";
import CollapseAnimationLayout from "../layouts/animationLayouts/CollapseAnimationLayout";

const STYLE = {
  width: "100%",
  top: "0",
  left: "0",
  position: "absolute",
  zIndex: "50",
};

const CreateDmRoomPopup = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onClick={() => setShow(!show)}
        className="rounded-md hover:bg-sub-bg hover:shadow-small-shadow p-1 transition-all duration-300 ease-in-out"
      >
        <FaPlus className="icon" />
      </button>

      <CollapseAnimationLayout show={show} setShow={setShow} style={STYLE}>
        <h3>Select Friends</h3>
        <small>You can add x more friends</small>

        <CreateDmRoomForm show={show} setShow={setShow} />
      </CollapseAnimationLayout>
    </>
  );
};

export default CreateDmRoomPopup;
