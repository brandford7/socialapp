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
          <label class="relative block">
  <span class="sr-only">Search</span>
  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"><!-- ... --></svg>
  </span>
  <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
</label>
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
