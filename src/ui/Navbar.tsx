import { LogOut } from "lucide-react";
import { NavLink, useParams } from "react-router";

const Navbar = () => {
  const params = useParams();
  const currentDeckId = params.id; // Use a descriptive name

  const linkStyles = ({ isActive }: { isActive: boolean }) =>
    `h-[80%] px-3 md:px-5 flex items-center justify-center rounded-full text-xs md:text-sm font-semibold transition-all duration-200 whitespace-nowrap
    ${
      isActive
        ? "bg-[#F8CB46] text-[#2E1401] border-2 border-[#2E1401]"
        : "text-[#2E1401] hover:bg-gray-100 border-2 border-transparent"
    }`;

  return (
    <nav className="max-w-7xl mx-auto flex items-center px-4 md:px-10 h-20 md:h-24 bg-transparent">
      <div className="w-full flex items-center justify-center md:justify-between">
        <div className="absolute left-4 md:static shrink-0 lg:block hidden">
          <img src="/Logo.svg" alt="Logo" className="h-8 md:h-10 w-auto" />
        </div>

        <div className="h-12 md:h-14 px-2 flex items-center gap-1 md:gap-2 rounded-full border-2 border-[#2E1401] shadow-[3px_3px_0_0px_#000] md:shadow-[4px_4px_0_0px_#000] bg-white md:max-w-[60vw] overflow-hidden z-10">
          <NavLink to="/decks" className={linkStyles}>
            All Decks
          </NavLink>

          <NavLink to={`/study/${currentDeckId}`} className={linkStyles}>
            Study Mode
          </NavLink>

          <NavLink to="/profile" className={linkStyles}>
            Profile
          </NavLink>
        </div>

        {/* LOGOUT: Hidden on mobile (Assuming you put a logout button inside the Profile page for mobile) */}
        <div className="absolute right-4 md:static shrink-0 hidden md:block">
          <button
            className="text-[#2E1401] font-bold hover:translate-x-[1px] hover:translate-y-[1px] transition-transform"
            aria-label="Logout"
          >
            <LogOut size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
