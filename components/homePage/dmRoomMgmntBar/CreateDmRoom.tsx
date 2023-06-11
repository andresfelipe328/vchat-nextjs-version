import CreateDmRoomPopup from "@/components/popups/CreateDmRoomPopup";

type Props = {
  createDmRoom?: Function;
};

const CreateDmRoom = ({ createDmRoom }: Props) => {
  return (
    <div className="p-2 flex items-center justify-between z-20">
      <h3>DM Room</h3>

      <CreateDmRoomPopup createDmRoom={createDmRoom} />
    </div>
  );
};

export default CreateDmRoom;
