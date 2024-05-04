import { useAuth } from "../../context/authContext";
const NavBar = () => {
  const { user, handleSignOut, isLoading } = useAuth();
  const { email, displayName } = user || {};

  return (
    <div className=" sm:w-[90%] lg:w-[60%] xl:w-[50%] mx-auto p-5 rounded-xl  bg-primary-50 px-5 sm:px-10 py-5 flex flex-row items-center justify-between">
      {/* Avatar and user name / email  */}
      <div className="flex flex-row items-center gap-2 text-primary-500">
        <img
          src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?t=st=1714752950~exp=1714756550~hmac=28ac6df847c64c506e02fbdc2088069e0f286f024570d33a18d08510eeb74de6&w=740"
          alt="profile-avatar-image"
          className="h-12 w-12 rounded-full object-cover border-2 border-primary-500"
        />

        <div className="flex flex-col">
          <h3 className="capitalize font-[600] text-[14px] sm:text-[18px] ">
            {displayName}
          </h3>
          <span className="text-[12px] sm:text-[14px] text-black ">
            {email}
          </span>
        </div>
      </div>

      {/* Log out button  */}
      {isLoading ? (
        <div className="bg-gray-200 animate-pulse px-12 py-4 rounded-md" />
      ) : (
        <button
          onClick={handleSignOut}
          className="text-[14px] sm:text-[16px] font-[500] text-white bg-red-500 px-4 sm:px-5 py-2 rounded-md"
        >
          Log out
        </button>
      )}
    </div>
  );
};

export default NavBar;
