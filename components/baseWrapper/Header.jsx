import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import SidebarMenu from "./Menu";
import { MenuIcon } from "../common/appIcons";
import { links } from "./pages";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [hover, setHover] = useState();
  const router = useRouter();

  return (
    <div className="w-full sticky top-0 z-40">
      <SidebarMenu
        parentShow={menu}
        parentSetShow={() => {
          setMenu(false);
        }}
      />
      <header className="text-gray-600 bg-white body-font shadow-lg">
        <div className="mx-auto flex flex-row justify-between max-w-7xl">
          <div className="ml-6 sm:ml-16 h-full flex flex-row gap-4 items-center label-font cursor-pointer font-medium text-gray-900">
            <button
              onClick={() => setMenu(true)}
              className="sm:flex hidden text-gray-700 hover:text-gray-500"
            >
              <MenuIcon className="h-4" />
            </button>

            <Link href="/">
              <Image src="/arike-logo.png" alt="Logo" width="100" height="23" />
            </Link>
          </div>

          <nav className="hidden lg:flex flex-wrap gap-3 md:gap-5 text-center text-sm md:text-base justify-center">
            {links.map((item, index) => {
              return (
                <Link href={item.link} key={index}>
                  <div
                    className={
                      "h-full flex flex-col mr-5 transform duration-100 whitespace-pre cursor-pointer"
                    }
                    onMouseEnter={() => setHover(item.link)}
                    onMouseLeave={() => setHover(null)}
                  >
                    <div
                      className={
                        "rounded-full transition-all ease-in-out h-0.5 mt-px bg-gray-700 duration-500 " +
                        (hover === item.link || router.pathname === item.link
                          ? "w-full"
                          : "w-0")
                      }
                    />

                    <span className="mb-4 flex-grow flex items-center justify-center font-normal uppercase text-sm">
                      {item.label}
                    </span>
                  </div>
                </Link>
              );
            })}
          </nav>
          <button className="hidden sm:flex px-16 lg:px-24 py-9 relative text-indigo-900 hover:text-teal-200">
            <Link href="/donate">
              <div className="bg-teal-200 hover:bg-gray-800 hover:scale-90 duration-300 absolute inset-0" />
              <span className="relative z-10 pointer-events-none text-sm font-semibold">
                DONATE
              </span>
            </Link>
          </button>
          <div className="sm:hidden pr-8 flex justify-center items-center">
            <button
              onClick={() => setMenu(true)}
              className="text-gray-700 hover:text-gray-500"
            >
              <MenuIcon className="h-4" />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
