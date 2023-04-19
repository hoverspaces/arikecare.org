import Image from "next/image";

import { aboutPageData } from "@/data/aboutPageData";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { CrossIcon, PlayIcon } from "../common/appIcons";

export default function About() {
  const [videoPopup, setVideoPopup] = useState(false);

  return (
    <div className="">
      <div className="-mt-24 min-h-screen w-full relative overflow-hidden">
        <Image
          className="absolute w-full h-full object-cover"
          src="/ostosmy.jpg"
          alt=""
          fill
        />
        <div className="px-5 mx-auto text-white absolute inset-0 bg-gray-900 z-20 bg-opacity-40 flex flex-col justify-center gap-5">
          <div className="mt-20 flex-grow w-full max-w-6xl mx-auto flex flex-col justify-center">
            <span className="text-3xl"> arike</span>
            <div className="flex flex-col mt-5 text-3xl sm:text-5xl md:text-7xl">
              <span className="font-semibold">About </span>
              <span className="font-light">Organization</span>
            </div>
            <div className="mt-9 flex flex-row gap-2">
              <div className="rounded h-0.5 w-20 bg-teal-200" />
              <div className="rounded h-0.5 w-8 bg-gray-300" />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-20 max-w-6xl px-5 mx-auto flex flex-col">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 lg:gap-20 items-center justify-around">
          <Image
            className="object-cover object-center mx-auto"
            src="/about.jpg"
            alt=""
            height="1000"
            width="500"
          />
          <div className="flex flex-col gap-5">
            <div className="text-gray-400 font-semibold">
              {aboutPageData.text1.heading1}
            </div>
            <div className="text-gray-800 text-5xl">
              {aboutPageData.text1.heading2}
            </div>
            <span className="text-gray-700">{aboutPageData.text1.body1}</span>
            <span className="text-gray-900 font-semibold">
              {aboutPageData.text1.body2}
            </span>

            <div className="mt-4 text-gray-800 text-5xl font-bold">
              {aboutPageData.text2.heading}
            </div>
            <span className="text-gray-700">{aboutPageData.text2.body}</span>
          </div>
        </div>
        <div className="mt-10">
          <span className="text-3xl font-bold text-gray-900">
            {aboutPageData.team.heading}
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
            {aboutPageData.team.members.map((member, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-lg font-bold text-gray-700">
                  {member.name}
                </span>
                <span className="text-sm text-gray-700">
                  {member.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-80 h-48 w-full bg-gray-700 px-10 sm:px-32 md:px-40 lg:px-60">
        <div className="h-96 w-full relative bottom-48">
          <Image
            src="/thumbnail.jpeg"
            onClick={() => setVideoPopup(true)}
            alt="video"
            fill
          />
          <div
            onClick={() => setVideoPopup(true)}
            className="text-white hover:text-gray-300 cursor-pointer absolute z-20 inset-0 bg-gray-700 bg-opacity-30 flex flex-col items-center justify-center gap-6"
          >
            <PlayIcon className="h-10 sm:h-16 md:h-20" />
            <span className="font-semibold">WATCH OUR VIDEO</span>
          </div>
        </div>
      </div>
      <Transition
        show={videoPopup}
        className="fixed inset-0 z-50 overflow-hidden flex flex-col bg-gray-800 bg-opacity-70"
        enter="transition-all transform duration-400"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-all transform duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="flex flex-row justify-end w-full">
          <button
            onClick={() => setVideoPopup(false)}
            className="text-white p-4 bg-gray-800 bg-opacity-50"
          >
            <CrossIcon className="h-4" />
          </button>
        </div>
        <div className="h-full p-10 sm:p-20">
          <iframe
            className="w-full h-full z-20"
            src="https://www.youtube.com/embed/LrQds-jrRvA?autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>
      </Transition>
    </div>
  );
}
