import { FaUserFriends, FaHome, FaFacebookMessenger } from "react-icons/fa";
import { BsDisplay } from "react-icons/bs";

import { IoIosNotificationsOutline } from "react-icons/io";
const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="flex flex-col lg:flex-row lg:justify-between w-full space-y-5  h-20">
        <section className="navbar flex px-5  ">
          <h2 className="text-yellow-500 text-2xl hover:first-letter:to-blue-500">
            Perscogram
          </h2>
          
        </section>
        <section className="flex space-x-10 text-2xl mb-5 justify-center">
          <FaUserFriends className="bg-gray-400 shadow-md hover:bg-blue-500 hover:cursor-pointer" />
          <FaHome className="bg-gray-400 hover:bg-blue-500 hover:cursor-pointer " />
          <FaFacebookMessenger className="bg-gray-400 hover:bg-blue-500 hover:cursor-pointer" />
          <BsDisplay className="bg-gray-400 hover:bg-blue-500 hover:cursor-pointer" />
          <IoIosNotificationsOutline className="bg-gray-400 hover:bg-blue-500 hover:cursor-pointer" />
        </section>
      </nav>
      <hr className="bg-blue-200 w-full" />
    </div>
  );
};

export default Navbar;
