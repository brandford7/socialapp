import { FaUserFriends,FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="w-full space-y-5">
        <section className="navbar flex items-center  ">
          <h2 className="text-yellow-500 text-2xl">Perscogram </h2>
        </section>
        <section className="flex space-x-5 px-mb-5">
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
