import React from "react";

import CollapseAnimationLayout from "@/components/layouts/animationLayouts/CollapseAnimationLayout";
import AddMainRoomForm from "@/components/forms/AddMainRoomForm";

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

const AddMainRoomPopup = ({ show, setShow }: Props) => {
  return (
    <CollapseAnimationLayout style={STYLE} show={show} setShow={setShow}>
      <p className="font-bold">Add main room</p>
      <AddMainRoomForm show={show} setShow={setShow} />
    </CollapseAnimationLayout>
  );
};

export default AddMainRoomPopup;
