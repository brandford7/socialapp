import { FaUserFriends, FaHome, FaFacebookMessenger } from "react-icons/fa";
import {IoIosNotificationsOutline} fro
const Navbar = () => {
  return (
    <>
      <nav className="flex flex-col w-full space-y-5  h-20">
        <section className="navbar flex px-5  ">
          <h2 className="text-yellow-500 text-2xl">Perscogram </h2>
        </section>
        <section className="flex space-x-10 text-2xl mb-5 px-10">
          <FaUserFriends className="bg-red-500" />
          <FaHome className="bg-red-500" />
          <FaFacebookMessenger className="bg-red-500" />
          <IoIosNotificationsOutline className="bg-red-500" />
          <FaUserFriends className="bg-red-500" />
        </section>
        <hr className="bg-blue-200 w-full" />
      </nav>
    </>
  );
};

export default Navbar;
