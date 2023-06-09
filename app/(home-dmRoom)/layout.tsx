const Layout = ({ children }: { children: React.ReactNode }) => {
  // Server Action: Add Friend ========================================================================================
  const createDmRoom = async (username: string) => {
    "use server";

    console.log("Creating dm room...");
  };
  // ==================================================================================================================

  return (
    <>
      <p>mngmt dmRoom bar</p>

      {children}
    </>
  );
};

export default Layout;
