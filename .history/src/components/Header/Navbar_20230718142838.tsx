
import {FaUserFriends} from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
      <nav className="w-full">
        <section className="navbar flex items-center  ">
          <h2 className="text-yellow-500 text-2xl">
            Perscogram <FaUserFriends />
          </h2>
        </section>
        <section>
          <FaUserFriends />
        </section>
        <hr className="bg-blue-200 w-full" />
      </nav>
    </>
  );
};

export default Navbar;
