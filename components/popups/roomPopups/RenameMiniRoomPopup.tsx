import React from "react";

import RenameMiniRoomForm from "@/components/forms/RenameMiniRoomForm";
import CollapseAnimationLayout from "@/components/layouts/animationLayouts/CollapseAnimationLayout";

type Props = {
  show: boolean;
  setShow: Function;
};

const STYLE = {
  top: "0",
  left: "0",
  position: "absolute",
  zIndex: "50",
};

const RenameMiniRoomPopup = ({ show, setShow }: Props) => {
  return (
    <>
      <CollapseAnimationLayout style={STYLE} show={show} setShow={setShow}>
        <p className="font-bold">Edit mini room</p>
        <RenameMiniRoomForm show={show} setShow={setShow} />
      </CollapseAnimationLayout>
    </>
  );
};

export default RenameMiniRoomPopup;
