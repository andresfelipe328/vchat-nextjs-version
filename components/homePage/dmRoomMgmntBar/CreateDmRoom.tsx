import CreateDmRoomPopup from "@/components/popups/CreateDmRoomPopup";

const CreateDmRoom = () => {
  return (
    <div className="p-2 flex items-center justify-between z-20">
      <h3>DM Room</h3>

      <CreateDmRoomPopup />
    </div>
  );
};

export default CreateDmRoom;
