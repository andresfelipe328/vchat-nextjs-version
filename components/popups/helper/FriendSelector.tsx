"use client";

import React, { useEffect, useRef } from "react";

import { BsCheckLg } from "react-icons/bs";

type Props = {
  setFriendList: Function;
  show: boolean;
};

const FriendSelector = ({ setFriendList, show }: Props) => {
  const listRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    if (show)
      document
        .querySelectorAll("#participant-check")
        .forEach((elem: any) => (elem.checked = false));
  }, [show]);

  return (
    <div className="my-4 rounded-md shadow-inner p-2 h-[168px] overflow-auto">
      <ul className="flex flex-col gap-2">
        <li className="flex items-center">
          <div className="rounded-3xl bg-dark w-[2.85rem] h-[2.85rem] border-4 border-sub-bg"></div>
          <small className="flex-1 ml-2">username</small>

          <label>
            <input
              id="participant-check"
              type="checkbox"
              className="hidden peer"
            />
            <div className="w-5 h-5 flex items-center justify-center rounded-md bg-dark peer-checked:bg-sub-bg peer-checked:shadow-small-shadow hover:shadow-small-shadow hover:bg-sub-bg transition-all duration-200 ease-in-out cursor-pointer">
              <BsCheckLg className="text-xs text-dark" />
            </div>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default FriendSelector;
