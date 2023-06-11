"use client";
import React, { useState, useEffect } from "react";

type Props = {
  show: boolean;
  setShow: Function;
};

const AddFriendForm = ({ show, setShow }: Props) => {
  const [friend, setFriend] = useState<string | null>();

  useEffect(() => {
    if (show) {
      setFriend(null);
    }
  }, [show]);

  const handleAddFriend = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/add-new-friend", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: friend,
      }),
    });
    const result = await res.json();

    setShow(false);
    setFriend(null);
  };

  return (
    <form onSubmit={handleAddFriend} autoComplete="off">
      <input
        type="text"
        id="add-friend-input"
        value={friend || ""}
        placeholder="find a new friend"
        className="w-full"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFriend(e.target.value)
        }
      />

      <button
        onClick={handleAddFriend}
        disabled={friend ? false : true}
        className="mt-4 button"
      >
        <p className="font-semibold">send request</p>
      </button>
    </form>
  );
};

export default AddFriendForm;
