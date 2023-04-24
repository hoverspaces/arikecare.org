import Image from "next/image";

import { aboutPageData } from "@/data/aboutPageData";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { CrossIcon, PlayIcon, TargetIcon } from "../common/appIcons";

export default function About() {
  const [videoPopup, setVideoPopup] = useState(false);

  return (
    <div className="">
      <div className="h-96 w-full relative overflow-hidden">
        <Image
          className="absolute w-full h-full object-cover"
          src="/activities.png"
          alt=""
          fill
        />
        <div className="px-5 mx-auto text-white absolute inset-0 bg-gray-700 z-20 bg-opacity-10 flex flex-col justify-center gap-5">
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
        <div className="flex flex-col md:flex-row gap-10 items-start justify-around">
          <Image
            className="object-cover object-center mx-auto"
            src="/about-hero.png"
            alt=""
            height="400"
            width="400"
          />
          <div className="flex flex-col gap-5">
            <div className="text-gray-800 text-5xl font-semibold">
              {aboutPageData.content1.label}
            </div>
            <span className="text-gray-500 font-light whitespace-pre-line">
              {aboutPageData.content1.body}
            </span>
          </div>
        </div>
        <Image
          className="mt-10 sm:mt-20 mx-auto"
          src="/services-graph.png"
          alt="Services Graph"
          height={1000}
          width={1000}
        />

        <div className="max-w-2xl mx-auto w-full mt-12 sm:mt-20 relative rounded-lg overflow-hidden">
          <Image src="/mission-bg.png" alt="" fill />
          <div className="p-8 relative z-30 inset-0 bg-gray-800 bg-opacity-5 flex flex-col justify-center gap-4 text-gray-300">
            <span className="font-semibold text-3xl">Mission</span>
            <span className="text-sm">{aboutPageData.mission}</span>
          </div>
        </div>

        <div className="max-w-2xl mx-auto w-full mt-12 sm:mt-20 relative rounded-lg overflow-hidden">
          <Image src="/vision-bg.png" alt="" fill />
          <div className="p-8 relative z-30 inset-0 bg-gray-800 bg-opacity-5 flex flex-col justify-center gap-4 text-gray-300">
            <span className="font-semibold text-3xl">Vision</span>
            <span className="text-sm">{aboutPageData.vision.description}</span>
            {aboutPageData.vision.points.map((point, index) => (
              <div key={index} className="flex flex-row items-start gap-3">
                <div className="h-3.5 w-3.5 flex-shrink-0 mt-1">
                  <TargetIcon className="text-orange-400 h-full w-full" />
                </div>
                <span className="text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 sm:mt-28 rounded-md bg-gray-100 w-full flex flex-col-reverse items-center sm:items-start sm:flex-row sm:justify-between gap-12 p-8">
          <div className="flex flex-col gap-6">
            <span className="font-semibold text-xl">
              {aboutPageData.content2.label}
            </span>
            <span className="text-sm font-light text-gray-600 whitespace-pre-line">
              {aboutPageData.content2.description}
            </span>
          </div>
          <Image
            src={aboutPageData.content2.image}
            alt=""
            width={300}
            height={300}
          />
        </div>

        <div className="mt-6 rounded-md bg-gray-100 w-full flex flex-col items-center sm:items-start sm:flex-row sm:justify-between gap-12 p-8">
          <Image
            src={aboutPageData.content3.image}
            alt=""
            width={300}
            height={300}
          />
          <div className="flex flex-col gap-6">
            <span className="font-semibold text-xl">
              {aboutPageData.content3.label}
            </span>
            <span className="text-sm font-light text-gray-600 whitespace-pre-line">
              {aboutPageData.content3.description}
            </span>
          </div>
        </div>

        <div className="mt-6 rounded-md bg-gray-100 w-full flex flex-col-reverse items-center md:items-start md:flex-row md:justify-between gap-12 p-8">
          <div className="flex flex-col gap-6">
            <span className="font-semibold text-xl">
              {aboutPageData.content4.label}
            </span>
            <span className="text-sm font-light text-gray-600 whitespace-pre-line">
              {aboutPageData.content4.description}
            </span>
          </div>
          <Image
            src={aboutPageData.content4.image}
            alt=""
            width={300}
            height={300}
          />
        </div>

        <div className="mt-16 sm:mt-28 flex flex-col gap-20">
          {aboutPageData.team.map((team, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-xl font-bold text-gray-900">
                {team.label}
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                {team.members.map((member, index) => (
                  <div key={index} className="max-w-xs flex flex-col gap-2">
                    <span className="font-bold text-gray-700">
                      {member.name}
                    </span>
                    <span className="text-xs text-gray-600">
                      {member.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-80 h-48 w-full bg-gray-700 px-10">
        <div className="h-40 sm:h-96 w-full max-w-2xl mx-auto relative bottom-20 sm:bottom-48">
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
            <PlayIcon className="h-10 sm:h-16" />
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
