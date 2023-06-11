import React from "react";

import AddMiniRoomForm from "@/components/forms/AddMiniRoomForm";
import RenameMainRoomForm from "@/components/forms/RenameMainRoomForm";
import CollapseAnimationLayout from "@/components/layouts/animationLayouts/CollapseAnimationLayout";

type Props = {
  showAdd: boolean;
  setShowAdd: Function;
  showRename: boolean;
  setShowRename: Function;
};

const STYLE = {
  top: "0",
  left: "0",
  position: "absolute",
  zIndex: "50",
};

const AddMiniRenameMainRoomPopup = ({
  showAdd,
  showRename,
  setShowAdd,
  setShowRename,
}: Props) => {
  return (
    <>
      <CollapseAnimationLayout
        style={STYLE}
        show={showAdd}
        setShow={setShowAdd}
      >
        <p className="font-bold">Add mini room</p>
        <AddMiniRoomForm show={showAdd} setShow={setShowAdd} />
      </CollapseAnimationLayout>

      <CollapseAnimationLayout
        style={STYLE}
        show={showRename}
        setShow={setShowRename}
      >
        <p className="font-bold">Edit main room</p>
        <RenameMainRoomForm show={showRename} setShow={setShowRename} />
      </CollapseAnimationLayout>
    </>
  );
};

export default AddMiniRenameMainRoomPopup;
