"use client";

import Link from "next/link";
import React from "react";

import { FaTimes } from "react-icons/fa";

const DmRoomList = () => {
  const deleteDmRoom = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="p-2 flex-1 overflow-auto">
      <ul className="flex flex-col gap-2">
        <Link
          href="/dm-room/1"
          className="group flex items-center p-1 rounded-md hover:bg-sub-bg hover:shadow-small-shadow transition-all duration-300 ease-in-out"
        >
          <div className="rounded-3xl bg-dark w-[3.2rem] h-[3.2rem] border-4 border-sub-bg"></div>
          <p className="flex-1 ml-2 font-semibold">dmRoom Name</p>
          <button onClick={deleteDmRoom}>
            <FaTimes className="icon opacity-0 group-hover:opacity-100 hover:text-red-700 transition-all duration-300 ease-in-out" />
          </button>
        </Link>
      </ul>
    </div>
  );
};

export default DmRoomList;
