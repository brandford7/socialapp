import { FaUserFriends, FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-col w-full space-y-5 placeI h-20">
        <section className="navbar flex   ">
          <h2 className="text-yellow-500 text-2xl">Perscogram </h2>
        </section>
        <section className="flex space-x-5 px-5mb-5">
          <FaUserFriends className="bg-red-500" />
          <FaHome className="bg-red-500" />
          <FaUserFriends className="bg-red-500" />
          <FaUserFriends className="bg-red-500" />
          <FaUserFriends className="bg-red-500" />
        </section>
        <hr className="bg-blue-200 w-full" />
      </nav>
    </>
  );
};

export default Navbar;
