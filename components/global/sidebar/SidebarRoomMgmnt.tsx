import Link from "next/link";

const SidebarRoomMgmnt = () => {
  return (
    <div
      className="p-2 flex-1 overflow-auto sidebar-overflow"
      id="sidebar-room-list"
    >
      <ul className="flex flex-col gap-2 items-center">
        <Link href="/room/1/1">
          <div className="rounded-3xl bg-dark w-[3.2rem] h-[3.2rem] border-4 border-sub-bg sidebar-icon"></div>
        </Link>
      </ul>
    </div>
  );
};

export default SidebarRoomMgmnt;
