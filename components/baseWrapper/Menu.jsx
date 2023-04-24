import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";

import { CrossIcon } from "../common/appIcons";
import { contact } from "@/data/contact";
import { social } from "@/data/social";
import { links } from "./pages";
import { useRouter } from "next/router";

export default function SidebarMenu({ parentShow, parentSetShow, className }) {
  const [show, setShow] = useState(false);
  const [openMenu, setOpenMenu] = useState();
  const router = useRouter();
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenMenu();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  useEffect(() => {
    setTimeout(() => setShow(parentShow), 100);
  }, [parentShow]);

  return (
    <div
      onClick={() => {
        setShow(false);
        setTimeout(() => parentSetShow(), 400);
      }}
      className={
        "fixed lg:hidden inset-0 bg-gray-800 bg-opacity-50 text-gray-700 z-20 " +
        (parentShow ? "" : "hidden ") +
        className
      }
    >
      <Transition
        show={show}
        className="absolute left-0 shadow-md"
        enter="transition-all transform duration-400"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition-all transform duration-400"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-gray-700 h-full w-screen sm:w-auto transition-all duration-300"
        >
          <div className="overflow-y-auto h-screen flex flex-col justify-around">
            <nav className="h-full flex flex-col flex-wrap text-base justify-between mt-10 pl-12 pr-16 sm:pr-28 py-7">
              <button
                onClick={() => {
                  setShow(false);
                  setTimeout(() => parentSetShow(), 400);
                }}
                className="ml-auto sm:ml-0 duration-300 text-white hover:text-gray-300"
              >
                <CrossIcon className="h-5" />
              </button>
              <div className="flex flex-col mt-10 mb-20">
                {links.map((item, index) => {
                  return item.link ? (
                    <Link href={item.link} key={index}>
                      <div
                        onClick={() =>
                          setTimeout(() => parentSetShow(false), 100)
                        }
                        className={
                          "text-left uppercase text-sm cursor-pointer transform delay-100 duration-100 w-full rounded my-1 py-2 px-3 " +
                          (router.pathname === item.link
                            ? "text-gray-400"
                            : "text-white hover:text-gray-300")
                        }
                      >
                        {item.label}
                      </div>
                    </Link>
                  ) : (
                    <div
                      key={index}
                      ref={ref}
                      className="relative h-full flex flex-col gap-3"
                    >
                      <div
                        className={
                          "h-full flex flex-col mr-5 transform duration-100 whitespace-pre cursor-pointer"
                        }
                        onClick={() =>
                          setOpenMenu((openMenu) =>
                            openMenu === item.label ? null : item.label
                          )
                        }
                      >
                        <span
                          className={
                            "text-left uppercase text-sm cursor-pointer transform delay-100 duration-100 w-full rounded my-1 py-2 px-3 " +
                            (router.pathname === item.link
                              ? "text-gray-400"
                              : "text-white hover:text-gray-300")
                          }
                        >
                          {item.label}
                        </span>
                      </div>
                      <Transition
                        show={openMenu === item.label}
                        className=""
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-75"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-75"
                      >
                        <div className="-mt-2 ml-3 flex flex-col gap-3 border-l border-gray-400">
                          {item.pages.map((page, index) => {
                            return (
                              <Link key={index} href={page.link}>
                                <div
                                  onClick={() =>
                                    setTimeout(() => parentSetShow(false), 100)
                                  }
                                  className={
                                    "text-left uppercase text-sm cursor-pointer transform delay-100 duration-100 w-full px-3 " +
                                    (router.pathname === item.link
                                      ? "text-gray-400"
                                      : "text-white hover:text-gray-300")
                                  }
                                >
                                  {page.label}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </Transition>
                    </div>
                  );
                })}
              </div>
              <div className="ml-5 flex flex-col gap-4">
                <div className="flex flex-col items-start gap-1">
                  <span className="text-xs font-semibold text-gray-400">
                    EMAIL
                  </span>
                  <Link
                    href={"mailto:" + contact.email.value}
                    className="text-sm text-white hover:text-gray-200"
                  >
                    {contact.email.label}
                  </Link>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <span className="text-xs font-semibold text-gray-400">
                    Phone numbers
                  </span>
                  <Link
                    href={"tel:" + contact.phone.value}
                    className="text-sm text-white hover:text-gray-200"
                  >
                    {contact.phone.label}
                  </Link>
                </div>
              </div>
            </nav>
            <div className="ml-16 mt-8 flex flex-row items-center flex-wrap gap-6">
              {social.map((item, index) => (
                <Link href={item.href} key={index}>
                  <item.icon
                    className={
                      item.defaultClassName +
                      " text-gray-300 hover:text-gray-400"
                    }
                  />
                </Link>
              ))}
            </div>
            <div className="w-80 sm:w-full mt-10 mb-12 px-8">
              <Link href="/donate">
                <button className="w-full py-9 relative text-indigo-900">
                  <div className="bg-teal-200 hover:scale-75 duration-300 absolute inset-0" />

                  <span className="relative z-10 pointer-events-none text-sm font-semibold">
                    DONATE
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}
