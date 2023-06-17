"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";

import { IconType } from "react-icons/lib";
import { FaUser } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { AiFillEyeInvisible } from "react-icons/ai";
import { GiNightSleep, GiCancel } from "react-icons/gi";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";

import CollapseAnimationLayout from "../layouts/animationLayouts/CollapseAnimationLayout";

const USERSTATUS = [
  {
    name: "active",
    color: "#22c55e",
    icon: GoPrimitiveDot,
  },
  {
    name: "invisible",
    color: "#606A6D",
    icon: AiFillEyeInvisible,
  },
  {
    name: "sleep",
    color: "#FFAD27",
    icon: GiNightSleep,
  },
  {
    name: "busy",
    color: "#B30F0F",
    icon: GiCancel,
  },
];

const STYLE = {
  width: "165px",
  bottom: "0",
  left: "5.15rem",
  position: "absolute",
  zIndex: "50",
};

const UserMenuPopup = ({
  session,
  userStatus,
}: {
  session: any;
  userStatus?: string;
}) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(
    USERSTATUS.find((status) => status.name === userStatus) || USERSTATUS[0]
  );

  const handleLogout = async () => {
    signOut();
  };

  const handleStatus = (status: {
    name: string;
    color: string;
    icon: IconType;
  }) => {
    setStatus(status);
  };

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {session ? (
          <div className="relative bg-cover rounded-3xl border-4 bg-dark border-dark shadow-animation sidebar-icon">
            <Image
              src={session!.user!.image}
              alt="user's icon"
              width={48}
              height={48}
              className="rounded-3xl"
            />
            <div
              className="absolute bottom-0 -right-2 w-4 h-4 rounded-3xl border-2 border-dark"
              style={{ backgroundColor: status!.color }}
            ></div>
          </div>
        ) : (
          <FaUser className="text-dark text-5xl bg-sub-bg p-2 shadow-animation border-4 border-dark sidebar-icon" />
        )}
      </button>

      <CollapseAnimationLayout show={show} setShow={setShow} style={STYLE}>
        <ul className="flex flex-col gap-1">
          <li className="group border-b-2 border-dark mb-1">
            {!session ? (
              <Link
                href="/login"
                className="flex items-center justify-between w-full pb-2 group-hover:translate-x-2 transition-transform duration-150 ease-out"
              >
                <small>login</small>
                <BiLogInCircle className=" icon" />
              </Link>
            ) : (
              <button
                className="flex items-center justify-between w-full pb-2 group-hover:translate-x-1 transition-transform duration-150 ease-out"
                onClick={handleLogout}
              >
                <small>logout</small>
                <BiLogOutCircle className=" icon" />
              </button>
            )}
          </li>
          {session &&
            USERSTATUS.map((status, i) => (
              <li className="group" key={i}>
                <button
                  onClick={() => handleStatus(status)}
                  className="flex items-center gap-1 w-full group-hover:translate-x-1 group-hover:bg-sub-bg/[.65] rounded-md p-1 transition-all duration-150 ease-out remove-blur"
                >
                  <status.icon style={{ color: status.color }} />
                  <small>{status.name}</small>
                </button>
              </li>
            ))}
        </ul>
      </CollapseAnimationLayout>
    </>
  );
};

export default UserMenuPopup;
