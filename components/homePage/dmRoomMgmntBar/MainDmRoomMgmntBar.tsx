"use client";

import React, { useState } from "react";

import FindDmRoom from "./FindDmRoom";
import DmRoomList from "./DmRoomList";
import CreateDmRoom from "./CreateDmRoom";

const MainMgmntBar = () => {
  const [dmRoom, setDmRoom] = useState<string>("");

  return (
    <>
      <FindDmRoom dmRoom={dmRoom} setDmRoom={setDmRoom} />
      <CreateDmRoom />
      <DmRoomList />
    </>
  );
};

export default MainMgmntBar;
