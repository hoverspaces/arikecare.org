import Image from "next/image";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";

import { donatePageData } from "@/data/donatePageData";

export default function Donate() {
  const [showUPI, setShowUPI] = useState(false);

  return (
    <div className="w-full min-h-full sm:py-10 bg-gray-200 flex items-center justify-center">
      <div className="max-w-3xl shadow px-20 py-10 flex flex-col items-center bg-white">
        <span className="font-semibold text-xl">Donate for Arike</span>
        <span className="mt-3 px-4 py-2 rounded-full bg-teal-200">
          {donatePageData.supporters} supporters
        </span>
        <span className="mt-10 text-gray-400">Donate using QR code</span>
        <div className="mt-3 border p-5">
          <div className="relative h-40 sm:h-60 w-40 sm:w-60 flex items-center justify-center">
            <Image
              className="absolute inset-0 object-cover"
              src="/QR code.png"
              alt=""
              fill
            />
            <button
              onClick={() => setShowUPI(true)}
              className="absolute z-10 bg-white hover:bg-gray-100 rounded-full px-6 py-1 border border-gray-500 hover:border-gray-600"
            >
              Show QR
            </button>
          </div>
        </div>
        <span className="mt-10 text-gray-400">
          Scan and donate with any payments app
        </span>
        <div className="mt-5 flex flex-row items-center flex-wrap gap-4">
          {donatePageData.donateOptions.map((option, index) => (
            <Link key={index} href={option.link}>
              <Image
                src={option.image}
                alt={option.label}
                className="hover:opacity-60"
                width={40}
                height={40}
              />
            </Link>
          ))}
        </div>
      </div>
      <Transition
        show={showUPI}
        as="div"
        className="fixed inset-0 bg-black bg-opacity-50 z-10"
        onClick={() => setShowUPI(false)}
      >
        <div className="mt-20 absolute inset-0 flex items-center justify-center">
          <Image
            onClick={(e) => e.stopPropagation()}
            src="/UPI.png"
            alt="UPI"
            width={400}
            height={400}
          />
        </div>
      </Transition>
    </div>
  );
}
