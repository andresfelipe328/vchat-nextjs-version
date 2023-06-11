"use client";

import { FaUsers } from "react-icons/fa";

import AddFriendPopup from "@/components/popups/AddFriendPopup";
import { HomePage } from "@/utils/types";

const MENU = [
  {
    page: "online",
    group: "friends",
  },
  {
    page: "all",
    group: "friends",
  },
  {
    page: "requests",
    group: "request",
  },
];

type Props = {
  page: HomePage;
  setPage: Function;
};

const FriendRequestsMenu = ({ page, setPage }: Props) => {
  return (
    <div className="flex items-center">
      <div className="flex flex-1 items-center gap-2">
        <FaUsers className="icon" />

        <ul className="flex items-center gap-2 px-2 border-l-2 border-l-dark">
          {MENU.map((item, index) => (
            <button
              key={index}
              onClick={() => setPage(item)}
              className={`p-1 rounded-md ${
                page.page === item.page ? "bg-sub-bg shadow-small-shadow" : ""
              } hover:bg-sub-bg hover:shadow-small-shadow transition-all duration-300 ease-in-out`}
            >
              <p className="font-semibold">{item.page}</p>
            </button>
          ))}
        </ul>
      </div>

      <AddFriendPopup />
    </div>
  );
};

export default FriendRequestsMenu;
