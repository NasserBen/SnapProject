import React, { useState } from "react";
import { logo } from "../Assets";
import { navLinks } from "../Constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import OrderButton from "./OrderButton";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="shadow-md w-full sticky">
      <div className="md:flex items-center justify-between bg-white py-2 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-[82px] h-[69px]" />
            <p className="hidden lg:flex text-2xl font-bold text-custom-red-dark ml-3">
              Diddy Riese
            </p>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="flex items-center cursor-pointer md:hidden"
          >
            {open ? (
              <AiOutlineClose size={28} style={{ color: "#802629" }} />
            ) : (
              <AiOutlineMenu size={28} style={{ color: "#802629" }} />
            )}
          </div>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-11 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl- transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-480px]"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.id} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={`#${link.id}`}
                className="text-gray-800 hover:text-gray-400 duration-500 ml-9 md:ml-0"
              >
                {link.title}
              </a>
            </li>
          ))}
          <OrderButton />
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
