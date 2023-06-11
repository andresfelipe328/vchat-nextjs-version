"use client";

import React, { useState } from "react";

import { HomePage } from "@/utils/types";
import FriendList from "./FriendList";
import BasicAnimationLayout from "@/components/layouts/animationLayouts/BasicAnimationLayout";

type Props = {
  page: HomePage;
};

const FriendTypes = ({ page }: Props) => {
  const [friend, setFriend] = useState<string>("");

  return (
    <BasicAnimationLayout
      Tag="div"
      style="flex flex-col gap-6"
      id="friends-overview-panel"
    >
      <div className="flex items-center">
        <input
          type="text"
          id="find-home-friend-input"
          placeholder="find a friend"
          className="w-full lg:w-[28rem] mx-auto"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFriend(e.target.value)
          }
        />
      </div>

      <FriendList key={page.page} page={page.page} />
    </BasicAnimationLayout>
  );
};

export default FriendTypes;
