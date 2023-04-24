import Image from "next/image";

import { volunteerPageData } from "@/data/volunteerPageData";

export default function Koode() {
  return (
    <div className="mb-20">
      <div className="-mt-24 min-h-screen w-full relative overflow-hidden">
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          src="/home-cover-1.jpg"
          alt=""
          fill
        />
        <div className="px-5 mx-auto text-white absolute inset-0 bg-gray-900 z-20 bg-opacity-40 flex flex-col justify-center gap-5">
          <div className="mt-20 mx-auto max-w-7xl flex-grow w-full flex flex-col justify-center">
            <span className="text-3xl"> arike</span>
            <div className="mt-5 text-5xl md:text-7xl">
              <span className="font-semibold">Koode </span>
              <span className="font-light">Community</span>
            </div>
            <div className="mt-9 flex flex-row gap-2">
              <div className="rounded h-0.5 w-20 bg-teal-200" />
              <div className="rounded h-0.5 w-8 bg-gray-300" />
            </div>
          </div>
          <div className="mx-auto max-w-7xl w-full flex flex-row justify-end transform translate-y-2 md:translate-y-5 text-teal-100 text-5xl sm:text-6xl md:text-9xl">
            Compassion
          </div>
        </div>
      </div>
      <div className="max-w-6xl px-5 mx-auto flex flex-col">
        <div className="pt-20 flex flex-col md:grid md:grid-cols-2 gap-10 lg:gap-20 items-center sm:items-start justify-around">
          <Image
            className="object-cover object-center mx-auto"
            src="/volunteer.jpg"
            alt=""
            height="1000"
            width="500"
          />
          <div className="flex flex-col gap-5">
            <div className="text-gray-800 text-5xl">
              {volunteerPageData.text1.heading}
            </div>
            <span className="text-gray-500 font-light">
              {volunteerPageData.text1.body}
            </span>

            <div className="mt-4 text-gray-800 text-5xl">
              {volunteerPageData.text2.heading}
            </div>
            <span className="text-gray-500 font-light">
              {volunteerPageData.text2.body}
            </span>
          </div>
        </div>
        <div className="pt-32 flex flex-col md:grid md:grid-cols-2 gap-10 lg:gap-20 items-center sm:items-start justify-around">
          <Image
            className="object-cover object-center mx-auto"
            src="/volunteer.jpg"
            alt=""
            height="1000"
            width="500"
          />
          <div className="flex flex-col gap-5">
            <div className="text-gray-800 text-5xl">
              {volunteerPageData.text3.heading}
            </div>
            <span className="text-gray-500 font-light">
              {volunteerPageData.text3.body}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
