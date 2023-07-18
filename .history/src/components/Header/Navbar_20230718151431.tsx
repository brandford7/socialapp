import { FaUserFriends, FaHome, FaFacebookMessenger } from "react-icons/fa";
import { BsDisplay } from "react-icons/bs";

import { IoIosNotificationsOutline } from "react-icons/io";
const Navbar = () => {
  return (
    <>
      <nav className="flex flex-col w-full space-y-5  h-20">
        <section className="navbar flex px-5  ">
          <h2 className="text-yellow-500 text-2xl">Perscogram </h2>
        </section>
        <section className="flex space-x-10 text-2xl mb-5 justify-center">
          <FaUserFriends className="bg-gray-400 shadow-md" />
          <FaHome className="bg-black" />
          <FaFacebookMessenger className="bg-gray-400 " />
          <BsDisplay className="bg-gray-400 " />
          <IoIosNotificationsOutline className="bg-gray-400 " />
        </section>
        <hr className="bg-blue-200 w-full" />
      </nav>
    </>
  );
};

export default Navbar;
