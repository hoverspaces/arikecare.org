import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { contact } from "@/data/contact";
import { social } from "@/data/social";
import Link from "next/link";
import { links } from "./pages";

const HoverspacesLink = (className) => (
  <a
    href="https://hoverspaces.com"
    target="_blank"
    rel="noopener noreferrer"
    className={className}
  >
    Hoverspaces
  </a>
);

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="text-gray-100 bg-gray-700">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-6xl mx-auto pt-9 px-5 lg:pt-16 pb-3">
        <div className="flex flex-row justify-between flex-wrap items-start gap-12 md:gap-28">
          <div className="space-y-4 flex flex-col items-center text-center lg:text-justify">
            <Image
              className="opacity-90"
              src="/arike-logo.png"
              alt="Logo"
              width="120"
              height="60"
            />
            <div className="flex flex-row items-center gap-7">
              {social
                .filter((val) => val.label !== "Twitter")
                .map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="hover:text-green-200"
                  >
                    <span className="sr-only">{item.label}</span>
                    <item.icon className={item.defaultClassName} />
                  </Link>
                ))}
            </div>
          </div>
          <div className="mt-1">
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-semibold">Contacts</h3>
            </div>

            <ul className="mt-4 flex flex-col items-start space-y-3">
              <li>Arike</li>

              <li className="flex flex-row gap-1 items-center flex-wrap">
                Phone:
                <Link
                  href={contact.phone.value}
                  className={
                    "text-sm transform delay-100 flex flex-row items-start justify-center gap-2 hover:text-green-200"
                  }
                >
                  {contact.phone.label}
                </Link>
              </li>
              <li className="flex flex-row gap-1 items-center flex-wrap">
                Email:
                <Link
                  href={contact.email.value}
                  className={
                    "text-sm transform delay-100 flex flex-row items-start justify-center gap-2 hover:text-green-200"
                  }
                >
                  {contact.email.label}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold">Menu & Links</h3>
            </div>
            <div className="mt-4 flex flex-col gap-3">
              {links
                .filter((val) => val.label !== "Volunteer")
                .map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.link}
                      className={
                        "text-sm transform delay-100 " +
                        (router.pathname === item.link
                          ? "text-green-200"
                          : "hover:text-green-200")
                      }
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold">Donate</h3>
            </div>
            <span>Help us to dignify healthcare.</span>
            <Link href="/donate">
              <button className="mt-2 font-semibold px-10 sm:px-28 py-4 rounded-full bg-teal-200 hover:bg-green-200 transform hover:-translate-y-1 duration-500 text-gray-700 text-xs">
                DONATE
              </button>
            </Link>
          </div>
        </div>
        <p className="mt-20 mb-16 w-full flex gap-1 justify-center sm:justify-start text-sm text-gray-400">
          <span>© {new Date().getFullYear()} - Arike | Maintained by</span>
          <HoverspacesLink />
        </p>
      </div>
    </footer>
  );
}
