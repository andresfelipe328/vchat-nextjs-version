"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { FaUser } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { AiFillEyeInvisible } from "react-icons/ai";
import { GiNightSleep, GiCancel } from "react-icons/gi";

import CollapseAnimationLayout from "../layouts/animationLayouts/CollapseAnimationLayout";

const USERSTATUS = [
  {
    name: "active",
    color: "#378139",
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
  top: "-.45rem",
  left: "5.3rem",
  position: "absolute",
  zIndex: "50",
};
const UserMenuPopup = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        <FaUser className="text-dark text-5xl bg-sub-bg p-2 rounded-3xl shadow-animation border-4 border-dark sidebar-icon" />
      </button>

      <CollapseAnimationLayout show={show} setShow={setShow} style={STYLE}>
        <ul className="flex flex-col gap-1">
          {/* <li className='group border-b-2 border-mainBg mb-1'>
                  { userAuth ?
                        <button className='flex items-center justify-between w-full pb-2 group-hover:translate-x-2 transition-transform duration-150 ease-out' onClick={handleLogout}>
                           <small>logout</small>
                           <BiLogOutCircle className='text-lg'/>
                        </button>
                     :
                        <Link to='/' className='flex items-center justify-between w-full pb-2 group-hover:translate-x-2 transition-transform duration-150 ease-out'>
                           <small>login</small>
                           <BiLogInCircle className='text-lg'/>
                        </Link>
                  }
               </li> */}
          {USERSTATUS.map((status, i) => (
            <li className="group" key={i}>
              <button className="flex items-center gap-1 w-full group-hover:translate-x-1 group-hover:bg-sub-bg/[.65] rounded-md p-1 transition-all duration-150 ease-out remove-blur">
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
