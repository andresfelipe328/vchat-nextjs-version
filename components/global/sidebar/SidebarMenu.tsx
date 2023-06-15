import { FaPlus } from "react-icons/fa";

import { getServerSession } from "next-auth";
import { authConfig } from "@/config/auth";

import UserMenuPopup from "@/components/popups/UserMenuPopup";
import { cookies } from "next/headers";

type IsSession = {
  isLogged: boolean;
};

const SidebarMenu = async () => {
  const session = cookies().get("session");
  const res = await fetch("https://vchat-nextjs-version.vercel.app/api/login", {
    method: "GET",
    headers: {
      Cookie: `session=${session?.value || ""}`,
    },
  });
  const isSession: IsSession = await res.json();

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

  return (
    <div
      className="mt-auto p-2 flex flex-col items-center gap-4 border-t-4 border-t-sub-bg z-20"
      id="sidebar-user-menu"
    >
      {isSession.isLogged && (
        <button>
          <FaPlus className="text-dark text-5xl bg-sub-bg p-2 shadow-animation border-4 border-dark sidebar-icon" />
        </button>
      )}

      <UserMenuPopup session={isSession} />
    </div>
  );
};

export default SidebarMenu;
