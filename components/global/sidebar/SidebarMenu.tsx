import { FaPlus } from "react-icons/fa";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

import UserMenuPopup from "@/components/popups/UserMenuPopup";
import { db } from "@/config/firebase-admin";

const SidebarMenu = async () => {
  const session = await getServerSession(authOptions);

  const handleCreateRoom = async () => {
    // const res = await fetch("http://localhost:3000/api/create-room", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: "roomname",
    //   }),
    // });
    // const result = await res.json();
    console.log("Creating new room...");
  };

  const userStatus =
    session && (await db.collection("users").doc(session.user.id).get()).data();

  return (
    <div
      className="mt-auto p-2 flex flex-col items-center gap-4 border-t-4 border-t-sub-bg z-20"
      id="sidebar-user-menu"
    >
      {session && (
        <button>
          <FaPlus className="text-dark text-5xl bg-sub-bg p-2 shadow-animation border-4 border-dark sidebar-icon" />
        </button>
      )}

      <UserMenuPopup session={session} userStatus={userStatus?.status} />
    </div>
  );
};

export default SidebarMenu;
