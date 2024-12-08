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

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-5 mx-auto bg-gray-900 border-b border-gray-800">
      <nav className="container flex items-center justify-between px-10 mx-auto">
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
        <ul className="flex items-center gap-3">
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
        <div className="flex items-center gap-3">
          <button className="nav-btn">Login</button>
          <button className="nav-btn primary">Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
