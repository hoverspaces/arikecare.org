import Image from "next/image";
import Link from "next/link";

import {
  EnvolopIcon,
  GoogleIcon,
  LocationIcon,
  PhoneIcon,
  ShareIcon,
} from "@/components/common/appIcons";
import { contact } from "@/data/contact";
import { social } from "@/data/social";

export default function Contact() {
  return (
    <div className="mb-20">
      <div className="-mt-24 min-h-screen w-full relative overflow-hidden">
        <Image
          className="absolute inset-0 w-full object-cover"
          src="/contacts.jpg"
          alt=""
          fill
        />
        <div className="px-5 mx-auto max-w-6xl text-white absolute inset-0 bg-gray-600 z-20 bg-opacity-10 flex flex-col justify-center gap-5">
          <span className="text-3xl"> arike</span>
          <span className="text-7xl font-bold">Contact</span>
          <div className="mt-9 flex flex-row gap-2">
            <div className="rounded h-0.5 w-20 bg-teal-200" />
            <div className="rounded h-0.5 w-8 bg-gray-300" />
          </div>
        </div>
      </div>
      <div className="px-5 mt-20 mx-auto max-w-6xl">
        <div className="text-gray-700 font-semibold grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4">
          <div className="flex flex-col items-center">
            <LocationIcon className="mb-6 h-16 w-12" />
            <span className="-mt-3 max-w-xs mx-auto text-center">
              Adress: Arike, 65/2265, BRRA 65, Bank Rd, Kaloor, Ernakulam,
              Kerala 682017
            </span>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <PhoneIcon className="h-12" />
            <div className="flex flex-row gap-x-1 flex-wrap">
              Phone:
              <Link href={contact.phone.value}>
                <span className="whitespace-nowrap hover:opacity-70">
                  {contact.phone.label}
                </span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5 gap-x-1 items-center">
            <EnvolopIcon className="h-12" />
            <div className="flex flex-row flex-wrap">
              Email:{" "}
              <Link href={contact.email.value}>
                <span className="hover:opacity-70">{contact.email.label}</span>{" "}
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <ShareIcon className="h-12" />
            <div className="flex flex-row items-center gap-7">
              {social
                .filter((val) => val.label !== "Twitter")
                .map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="hover:text-gray-400"
                  >
                    <span className="sr-only">{item.label}</span>
                    <item.icon className={item.defaultClassName} />
                  </Link>
                ))}
            </div>
          </div>
        </div>
        <div className="px-10 mt-20 flex flex-col gap-2">
          <span className="text-xl font-semibold">Send Message</span>
          <span className="text-sm text-gray-500">
            * The following info is required
          </span>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-5">
            {[
              {
                label: "First Name *",
              },
              {
                label: "Last Name *",
              },
              {
                label: "Email *",
              },
              {
                label: "Phone",
              },
            ].map((input, inputIndex) => (
              <input
                key={inputIndex}
                placeholder={input.label}
                className="w-full px-7 py-3 rounded-3xl bg-gray-200 border-2 border-gray-200 focus:bg-white focus:outline-none focus:ring-none"
              />
            ))}
          </div>
          <textarea
            placeholder={"Message"}
            className="mt-4 w-full px-7 py-3 rounded-3xl bg-gray-200 border-2 border-gray-200 focus:bg-white focus:outline-none focus:ring-none"
            rows={5}
          />
          <div>
            <button className="mt-3 border-2 border-gray-700 px-10 py-4 text-sm rounded-full hover:text-white hover:bg-gray-700 transform-all duration-300 hover:-translate-y-1">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
