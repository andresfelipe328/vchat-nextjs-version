"use client";

import React, { useEffect, useState } from "react";

type Props = {
  show: boolean;
  setShow: Function;
};

const AddMainRoomForm = ({ show, setShow }: Props) => {
  const [name, setName] = useState<string | null>();

  useEffect(() => {
    if (show) {
      setName(null);
    }
  }, [show]);

  const handleAddFriend = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/create-main-room", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
      }),
    });
    const result = await res.json();

    setShow(false);
    setName(null);
  };

  return (
    <form onSubmit={handleAddFriend} autoComplete="off">
      <input
        type="text"
        id="main-room-name-input"
        value={name || ""}
        placeholder="main room name"
        className="w-full"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />

      <button
        onClick={handleAddFriend}
        disabled={name ? false : true}
        className="mt-4 button"
      >
        <p className="font-semibold">create main room</p>
      </button>
    </form>
  );
};

export default AddMainRoomForm;
