import Image from "next/image";
import Link from "next/link";

import { getServerSession } from "next-auth";
import { authConfig } from "@/config/auth";

import SidebarRoomMgmnt from "./SidebarRoomMgmnt";
import SidebarMenu from "./SidebarMenu";
import BasicAnimationLayout from "@/components/layouts/animationLayouts/BasicAnimationLayout";

const Sidebar = async () => {
  const session = await getServerSession(authConfig);

  return (
    <BasicAnimationLayout
      Tag="header"
      style="bg-main-bg rounded-md shadow-static-shadow h-full flex flex-col z-20"
      id="sidebar"
    >
      <Link
        href={"/"}
        className="p-2 border-b-4 border-b-sub-bg flex flex-col items-center"
        id="sidebar-homepage-link"
      >
        <h3 className="font-bold">VChat</h3>
        <Image
          src="/app-icon.svg"
          width={48}
          height={48}
          alt="app logo"
          className="w-[3.95rem] hover:scale-105 transition-all duration-300 ease-in-out"
          priority
        />
      </Link>

      {session && <SidebarRoomMgmnt />}

      <SidebarMenu />
    </BasicAnimationLayout>
  );
};

export default Sidebar;
