import React, { useState, useEffect } from "react";
import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";

import { menuHeader } from "../constants";
import HomeSearch from "./HomeSearch";
import Logo from "../assets/images/logo.png";
import IconMenuButton from "./IconMenuButton";

const Header = () => {
  const path = useLocation();
  const [openMenuMobile, setOpenMenuMobile] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`   ${
        scrolled
          ? "fixed top-0 w-full z-50 py-4 lg:py-1 duration-500 bg-black/50 h-20 lg:h-24"
          : "py-4 lg:py-2 relative  duration-500 mainBackground h-24 lg:h-32"
      }`}
    >
      <div className="flex items-center justify-between px-3 lg:w-[90%] lg:mx-auto">
        <div>
          <img
            src={Logo}
            className={` ${
              scrolled
                ? "h-14 mx-auto lg:h-24 lg:scale-50 duration-500"
                : "h-14 lg:h-24 lg:scale-100 duration-500"
            }`}
            alt="Logo"
          />
        </div>

        {/* PC && Laptop */}
        <div className="hidden lg:flex flex-col gap-3 mr-0 items-end">
          <div
            className={`${
              scrolled ? "hidden duration-500" : "w-[30%] duration-500"
            }`}
          >
            <HomeSearch />
          </div>
          <div className="flex gap-4">
            <div className="relative h-14 w-14 group overflow-hidden">
              <div className="flex rounded-full bg-mainColor absolute top-1.5 bottom-1.5 left-1.5 right-1.5 group-hover:-top-14 group-hover:bottom-14 duration-300 cursor-pointer">
                <HomeIcon className="h-6 w-6 text-white m-auto" />
              </div>
              <div className="flex rounded-full bg-secondColor absolute group-hover:top-1.5 group-hover:bottom-1.5 left-1.5 right-1.5 top-14 -bottom-14 duration-300 cursor-pointer">
                <HomeIcon className="h-6 w-6 text-white m-auto" />
              </div>
            </div>

            <div className="flex items-center border border-mainColor rounded-full">
              {menuHeader.map((item, index) => (
                <Link
                  className={`text-lg text-stone-50 uppercase px-4 py-2 ${
                    path.pathname === item.path
                      ? "bg-secondColor"
                      : "bg-mainColor"
                  } ${index === 0 && "rounded-l-full pl-6 ml-1"} ${
                    index === menuHeader.length - 1 &&
                    "rounded-r-full pr-6 mr-1"
                  } hover:bg-secondColor duration-200 font-semibold my-1`}
                  to={item?.path as string}
                  key={index}
                >
                  {item?.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div
          className="lg:hidden"
          onClick={() => setOpenMenuMobile(!openMenuMobile)}
        >
          <IconMenuButton openMenu={openMenuMobile} />
        </div>
      </div>

      {/* Menu Mobile */}
      {openMenuMobile ? (
        <div
          onClick={() => setOpenMenuMobile(false)}
          className="fixed inset-0 duration-700 opacity-100 h-full z-40"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div></div>
        </div>
      ) : (
        <div className="fixed inset-0 duration-700 opacity-0 h-0 overflow-hidden"></div>
      )}

      {/* Menu Mobile */}
      {openMenuMobile ? (
        <div className="absolute duration-700 opacity-100 w-[80%] right-0 h-[500px] z-50 rounded-md top-[88px] bg-white flex flex-col">
          <div
            className="px-4 py-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          >
            <form className="flex w-full bg-black rounded-full items-center py-1.5">
              <div className="px-2">
                <MagnifyingGlassIcon className="h-5 w-5 text-stone-100" />
              </div>
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="focus:outline-none flex-grow bg-transparent text-stone-100 w-52 duration-0"
              />
            </form>
          </div>
          <div className="bg-[#44003a] flex-1 rounded-bl-md">
            <HomeIcon className="h-8 w-8 text-white m-auto bg-secondColor p-1 rounded-full my-3" />
            <div className="flex flex-col justify-center bg-stone-100 text-mainColor font-semibold uppercase">
              {menuHeader.map((item, index) => (
                <Link
                  className={`py-2 border-y border-[#44003a]/30 w-full text-center`}
                  to={item.path}
                  key={index}
                  onClick={() => setOpenMenuMobile(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute duration-700 opacity-0 w-0 h-[500px]  right-0 top-[88px] bg-white"></div>
      )}
    </div>
  );
};

export default Header;
