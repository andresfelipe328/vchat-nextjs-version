"use client";

import React, { useState } from "react";

import FriendRequestsMenu from "./FriendRequestMenu";
import FriendRequestList from "./friendRequestList/FriendRequestList";
import { HomePage } from "@/utils/types";

export const MainHomeContents = () => {
  const [page, setPage] = useState<HomePage>({
    page: "online",
    group: "friends",
  });

  return (
    <div className="flex flex-col gap-6">
      <FriendRequestsMenu page={page} setPage={setPage} />
      <FriendRequestList page={page} />
    </div>
  );
};
