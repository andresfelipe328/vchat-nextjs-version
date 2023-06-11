"use client";

import React, { useState } from "react";

import FindDmRoom from "./FindDmRoom";
import DmRoomList from "./DmRoomList";
import CreateDmRoom from "./CreateDmRoom";

type Props = {
  createDmRoom?: Function;
};

const MainMgmntBar = ({ createDmRoom }: Props) => {
  const [dmRoom, setDmRoom] = useState<string>("");

  return (
    <>
      <FindDmRoom dmRoom={dmRoom} setDmRoom={setDmRoom} />
      <CreateDmRoom createDmRoom={createDmRoom} />
      <DmRoomList />
    </>
  );
};

export default MainMgmntBar;
