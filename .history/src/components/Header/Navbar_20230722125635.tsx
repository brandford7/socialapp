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
import photo from "../../assets/images/react.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full px-5 ">
      <nav className="flex items-center justify-between space-y-5  h-20">
        <section className="flex items-center space-x-2   ">
          <h2 className="text-yellow-300  text-xl hover:first-letter:to-blue-500 cursor-pointer">
            Perscogram
          </h2>
          <FaSearch className="bg-gray-200  text-4xl text-black border-2 rounded-full lg:hidden " />
          
        </section>
        <section className="flex space-x-2  ">
          {/* <FaUserFriends className="bg-gray-400 shadow-md hover:bg-blue-500 hover:cursor-pointer" />
          <FaHome className="bg-gray-400 hover:bg-blue-500 hover:cursor-pointer " />
            <BsDisplay className="bg-gray-400 hover:bg-blue-500 hover:cursor-pointer" />
          */}
          <FaPlus className="bg-gray-200 text-4xl text-black font-light border-2 rounded-full  hover:bg-blue-500 hover:cursor-pointer" />
          <FaFacebookMessenger className="bg-gray-200 text-4xl text-yellow-500 border-2 rounded-full  hover:bg-blue-500 hover:cursor-pointer" />

          <IoIosNotificationsOutline className="bg-gray-200 border-2 text-4xl text-black rounded-full  hover:bg-blue-500 hover:cursor-pointer" />
          <Link to="/profile">
            <UserAvatar image={photo} name="" />
          </Link>
        </section>
      </nav>
      <hr className="bg-blue-200 w-full" />
    </div>
  );
};

export default Navbar;
