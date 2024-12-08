import { useState } from "react";
import { RiCloseLine, RiMenuFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/courses",
    label: "Courses",
  },
  {
    to: "/free-api",
    label: "Free API",
  },
  {
    to: "/docs",
    label: "Docs",
  },
];
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <header className="fixed top-0 left-0 z-50 w-full py-5 mx-auto bg-gray-900 border-b border-gray-800">
      <nav className="container flex items-center justify-between px-4 mx-auto md:px-10">
        {/* Logo */}
        <div className="flex items-center cursor-pointer gap-2.5">
          <div className="h-10 w-10 group bg-[#ff7700] rounded grid place-items-center text-white">
            <span className="text-[24px] font-bold font-Sync">C</span>
          </div>
          <div className="flex flex-col items-start h-full text-white translate-y-1">
            <p className="text-xl font-medium group-hover:opacity-90 font-Sync">
              Coding
            </p>
            <p className="text-gray-200/80 -translate-y-[7px] font-Sync text-lg">
              Hero
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="items-center hidden gap-3 md:flex">
          {navLinks.map((link, index) => (
            <div key={index}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "bg-gradient-to-tr from-gray-400/10  px-2 py-1 rounded text-gray-300 to-transparent "
                    : "text-base hover:text-gray-200 transition duration-300 px-2 py-1 font-medium text-gray-400"
                }
              >
                {link.label}
              </NavLink>
            </div>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="items-center hidden gap-3 md:flex">
          <button className="nav-btn">Login</button>
          <button className="nav-btn primary">Sign Up</button>
        </div>

        <button
          onClick={toggleNav}
          className="flex items-center justify-center w-12 h-12 text-lg text-white rounded-lg ring-inset ring ring-gray-800/10 active:ring-0 active:bg-gray-800/70 active:scale-95 bg-gray-800/50 md:hidden"
        >
          {isNavOpen ? <RiCloseLine size={24} /> : <RiMenuFill size={20} />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isNavOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 z-50 bg-gray-800 shadow-lg w-80 md:hidden"
            >
              <div className="flex flex-col h-full px-6 py-16 pt-20">
                {/* Navigation Links */}
                <ul className="flex flex-col items-start gap-3">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="w-full"
                    >
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          isActive
                            ? "bg-gradient-to-tr from-gray-400/10 to-transparent px-2 py-1 rounded text-gray-300 block w-full"
                            : "text-base hover:text-gray-200 transition duration-300 px-2 py-1 font-medium text-gray-400 block w-full"
                        }
                        onClick={toggleNav}
                      >
                        {link.label}
                      </NavLink>
                    </motion.div>
                  ))}
                </ul>
                <hr className="h-px my-8 bg-gray-600 border-none" />
                {/* CTA Buttons */}
                <div className="flex flex-col items-start gap-3">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="w-full border shadow-none border-gray-700/50 nav-btn hover:bg-gray-700/20"
                  >
                    Login
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="w-full shadow-none nav-btn primary "
                  >
                    Sign Up
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
