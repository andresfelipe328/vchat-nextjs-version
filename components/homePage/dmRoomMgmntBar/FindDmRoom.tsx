import React from "react";

type Props = {
  dmRoom: string;
  setDmRoom: Function;
};

const FindDmRoom = ({ dmRoom, setDmRoom }: Props) => {
  return (
    <div className="border-b-4 border-b-sub-bg p-2">
      <input
        type="text"
        id="find-dmroom-input"
        placeholder="find a dmRoom"
        className="w-full"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDmRoom(e.target.value)
        }
      />
    </div>
  );
};

export default FindDmRoom;
