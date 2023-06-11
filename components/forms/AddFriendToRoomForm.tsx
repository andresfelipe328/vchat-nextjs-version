"use client";

import React, { useEffect, useState } from "react";

import FriendSelector from "@/components/popups/helper/FriendSelector";

type Props = {
  show: boolean;
  setShow: Function;
};

const AddFriendToRoomForm = ({ show, setShow }: Props) => {
  const [friend, setFriend] = useState<string | null>(null);
  const [friendList, setFriendList] = useState<string[] | null>(null);

  useEffect(() => {
    if (show) {
      setFriend(null);
      setFriendList(null);
    }
  }, [show]);

  const handleCreateDmRoom = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    // const res = await fetch("http://localhost:3000/api/add-friend-to-room", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username: friend,
    //   }),
    // });
    // const result = await res.json();
    console.log("Adding friend to room...");

    setFriend(null);
    setFriendList(null);
    setShow(!show);
  };

  return (
    <form onSubmit={handleCreateDmRoom} autoComplete="off">
      <input
        type="text"
        id="find-room-friend-input"
        value={friend || ""}
        placeholder="find a friend"
        className="w-full"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFriend(e.target.value)
        }
      />

      <FriendSelector setFriendList={setFriendList} show={show} />

      <button disabled={friendList ? false : true} className="button">
        <p className="font-semibold">Create dm room</p>
      </button>
    </form>
  );
};

export default AddFriendToRoomForm;
