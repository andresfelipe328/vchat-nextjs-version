"use client";

import { useState } from "react";

import { BsFillPinAngleFill } from "react-icons/bs";

import CollapseAnimationLayout from "@/components/layouts/animationLayouts/CollapseAnimationLayout";

const STYLE = {
  width: "250px",
  top: "0",
  right: "0",
  position: "absolute",
  zIndex: "50",
};

const MiniRoomPinPopup = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onClick={() => setShow(!show)}
        className="rounded-md hover:bg-sub-bg hover:shadow-small-shadow p-2 transition-all duration-300 ease-in-out"
      >
        <BsFillPinAngleFill className="icon" />
      </button>

      <CollapseAnimationLayout style={STYLE} show={show} setShow={setShow}>
        <h3>Pin</h3>
        <small>some pin</small>
      </CollapseAnimationLayout>
    </>
  );
};

export default MiniRoomPinPopup;
