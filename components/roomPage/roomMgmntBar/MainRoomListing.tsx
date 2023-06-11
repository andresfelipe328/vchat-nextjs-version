import MainRoom from "./MainRoom";

const MainRoomListing = () => {
  return (
    <div className="p-2 h-full overflow-auto">
      <ul className="flex flex-1 flex-col gap-2">
        <MainRoom />
        <MainRoom />
      </ul>
    </div>
  );
};

export default MainRoomListing;
