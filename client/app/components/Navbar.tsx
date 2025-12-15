import { NavLink } from 'react-router';
import { MdAllInclusive, MdMenu, MdClose } from 'react-icons/md';
import { useState } from 'react';

const Navbar = () => {
  const base = 'transition hover:text-blue-400';
  const active = 'transition text-blue-400 font-semibold';

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 border-b border-gray-700 shadow-xs sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2 text-base font-bold text-blue-400"
        >
          <MdAllInclusive className="text-xl" /> Projects App
        </NavLink>
        {/* Desktp Nav */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? active : base)}
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? active : base)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? active : base)}
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? active : base)}
          >
            Contacts
          </NavLink>
        </div>
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl cursor-pointer"
            title="Menu"
          >
            {menuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>
      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 px-6 py-4 space-x-4 space-y-2 text-center flex flex-col gap-4">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(!menuOpen)}
            className={({ isActive }) => (isActive ? active : base)}
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            onClick={() => setMenuOpen(!menuOpen)}
            className={({ isActive }) => (isActive ? active : base)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/blog"
            onClick={() => setMenuOpen(!menuOpen)}
            className={({ isActive }) => (isActive ? active : base)}
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(!menuOpen)}
            className={({ isActive }) => (isActive ? active : base)}
          >
            Contacts
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
