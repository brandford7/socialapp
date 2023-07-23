import {
  FaUserFriends,
  FaHome,
  FaFacebookMessenger,
  FaSearch,
  FaPlus,
} from "react-icons/fa";
import { BsDisplay } from "react-icons/bs";

import { IoIosNotificationsOutline } from "react-icons/io";
import UserAvatar from "../UserAvatar";
import photo from'../../assets/images/react.svg'
const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="flex  items-center justify-between w-full space-y-5  h-20">
        <section className="flex items-center space-x-2 px-5  ">
          <h2 className="text-yellow-500 text-2xl hover:first-letter:to-blue-500">
            Perscogram
          </h2>
          <FaSearch className="bg-gray-400 text-2xl " />
        </section>
        <section className="flex space-x-10 text-2xl mb-5 justify-center">
          {/* <FaUserFriends className="bg-gray-400 shadow-md hover:bg-blue-500 hover:cursor-pointer" />
          <FaHome className="bg-gray-400 hover:bg-blue-500 hover:cursor-pointer " />
            <BsDisplay className="bg-gray-400 hover:bg-blue-500 hover:cursor-pointer" />
          */}
          <FaPlus className="bg-gray-400 text-2xl hover:bg-blue-500 hover:cursor-pointer" />
          <FaFacebookMessenger className="bg-gray-400 text-2xl hover:bg-blue-500 hover:cursor-pointer" />

          <IoIosNotificationsOutline className="bg-gray-400 hover:bg-blue-500 hover:cursor-pointer" />
          <UserAvatar image={ photo} name="" />
        </section>
      </nav>
      <hr className="bg-blue-200 w-full" />
    </div>
  );
};

export default Navbar;
