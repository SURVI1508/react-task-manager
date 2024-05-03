import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const NavBar = () => {
  const { user, handleSignOut } = useAuth();
  const { email, displayName } = user || {};

  return (
    <div className="bg-white px-5 sm:px-10 py-5 w-full fixed z-[999] left-0 top-0 flex flex-row items-center justify-between">
      <Link to="/">
        <h1>LOGO</h1>
      </Link>

      <div className="flex flex-row gap-3">
        <button
          onClick={handleSignOut}
          className="text-[16px] font-[500] text-red-500 bg-red-50 px-5 py-2 rounded-md"
        >
          Log out
        </button>
      </div>
      <div className="flex flex-row items-center gap-2 bg-primary-300 px-4 py-2 rounded-xl text-white">
        <h3 className="capitalize font-[500] text-[18px] ">{displayName}</h3>
        <img
          src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?t=st=1714752950~exp=1714756550~hmac=28ac6df847c64c506e02fbdc2088069e0f286f024570d33a18d08510eeb74de6&w=740"
          alt="profile-avatar-image"
          className="h-10 w-10 rounded-full object-cover border-2 border-purple-100"
        />
      </div>
    </div>
  );
};

export default NavBar;
