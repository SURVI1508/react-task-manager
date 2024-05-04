import NavBar from "../Header/NavBar";
const Applayout = ({ children }) => {
  return (
    <div className="w-full p-5 sm:p-10 sm:max-h-screen overflow-hidden">
      <NavBar />
      {children}
    </div>
  );
};

export default Applayout;
