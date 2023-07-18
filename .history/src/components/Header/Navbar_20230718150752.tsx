import {
  FaUserFriends,
  FaHome,
  FaFacebookMessenger,
  
} from "react-icons/fa";
import { BsDisplay } from 'react-icons/bs';

import { IoIosNotificationsOutline } from "react-icons/io";
const Navbar = () => {
  return (
    <>
      <nav className="flex flex-col w-full space-y-5  h-20">
        <section className="navbar flex px-5  ">
          <h2 className="text-yellow-500 text-2xl">Perscogram </h2>
        </section>
        <section className="flex space-x-10 text-2xl mb-5 justify-items-center">
          <FaUserFriends className="bg-red-500" />
          <FaHome className="bg-red-500" />
          <FaFacebookMessenger className=" ring-2 shadow-lg-sm shadow-indigo-300/50 ring-purple-40" />
          <BsDisplay className="border-2  border-black" />
          <IoIosNotificationsOutline className="bg-red-500" />
        </section>
        <hr className="bg-blue-200 w-full" />
      </nav>
    </>
  );
};

export default Navbar;
