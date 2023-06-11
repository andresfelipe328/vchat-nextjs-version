"use client";

import React, { useState } from "react";

import { BsFillBellFill } from "react-icons/bs";

import CollapseAnimationLayout from "@/components/layouts/animationLayouts/CollapseAnimationLayout";

const STYLE = {
  width: "250px",
  top: "0",
  right: "2.2rem",
  position: "absolute",
  zIndex: "50",
};

const MiniRoomNotifPopup = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onClick={() => setShow(!show)}
        className="rounded-md hover:bg-sub-bg hover:shadow-small-shadow p-2 transition-all duration-300 ease-in-out"
      >
        <BsFillBellFill className="icon" />
      </button>

      <CollapseAnimationLayout style={STYLE} show={show} setShow={setShow}>
        <h3>Notifications</h3>
        <small>some notification</small>
      </CollapseAnimationLayout>
    </>
  );
};

export default MiniRoomNotifPopup;
