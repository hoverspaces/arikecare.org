import Image from "next/image";
import { useState } from "react";
import { Transition } from "@headlessui/react";

import { Arrow, CrossIcon, PlayIcon } from "@/components/common/appIcons";
import { contact } from "@/data/contact";
import Link from "next/link";
import { social } from "@/data/social";

export default function Hero() {
  const [content, setContent] = useState(1);
  const [contentNumber, setContentNumber] = useState(1);
  const [videoPopup, setVideoPopup] = useState(false);

  return (
    <div className="-mt-24 w-full relative overflow-hidden">
      {[
        { show: content === 1, img: "/home-cover-1.jpg" },
        { show: content === 2, img: "/home-cover-2.jpg" },
        { show: content === 3, img: "/activities.png" },
      ].map((ele, index) => (
        <Transition
          key={index}
          show={ele.show}
          enter="transition-all duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500 delay-700"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src={ele.img}
            alt=""
            fill
          />
        </Transition>
      ))}

      <div className="pt-24 mx-auto text-white relative inset-0 bg-black z-20 bg-opacity-30 flex flex-col justify-center gap-5">
        <div className="px-5 h-screen mx-auto max-w-7xl flex-grow w-full flex flex-col justify-center">
          <div className="w-full flex flex-col sm:flex-row gap-x-10 gap-y-24">
            <div className="flex-grow">
              <Transition
                show={content === 1}
                className="flex flex-col items-start gap-8 max-w-3xl"
              >
                <Transition.Child
                  enter="transition ease-in-out duration-300 transform delay-200"
                  enterFrom="translate-y-5 opacity-0"
                  enterTo="translate-y-0 opacity-100"
                  leave="transition ease-in-out duration-100 transform delay-150"
                  leaveFrom="translate-y-0 opacity-100"
                  leaveTo="translate-y-5 opacity-0"
                  className="text-4xl md:text-7xl font-bold"
                >
                  Some people need help and we give it!
                </Transition.Child>
                <Transition.Child
                  enter="transition ease-in-out duration-300 transform delay-300"
                  enterFrom="translate-y-5 opacity-0"
                  enterTo="translate-y-0 opacity-100"
                  leave="transition ease-in-out duration-100 transform delay-100"
                  leaveFrom="translate-y-0 opacity-100"
                  leaveTo="translate-y-5 opacity-0"
                  className=""
                >
                  Everyone has the fundamental right to receive good quality
                  health care within the comfort of one&apos;s own home amidst
                  loved ones in addition to securing their privacy, familiarity
                  with their environment, autonomy, and a greater degree of
                  independence. This is the promise made by ARIKE.
                </Transition.Child>
               
              </Transition>
              <Transition
                show={content === 2}
                className="flex flex-col items-start gap-8 max-w-3xl"
              >
                <Transition.Child
                  enter="transition ease-in-out duration-300 transform delay-300"
                  enterFrom="translate-y-5 opacity-0"
                  enterTo="translate-y-0 opacity-100"
                  leave="transition ease-in-out duration-300 transform delay-150"
                  leaveFrom="translate-y-0 opacity-100"
                  leaveTo="translate-y-5 opacity-0"
                  className="text-4xl md:text-7xl font-bold"
                >
                  24 HOURS
                </Transition.Child>
                <Transition.Child
                  enter="transition ease-in-out duration-300 transform delay-500"
                  enterFrom="translate-y-5 opacity-0"
                  enterTo="translate-y-0 opacity-100"
                  leave="transition ease-in-out duration-300 transform delay-100"
                  leaveFrom="translate-y-0 opacity-100"
                  leaveTo="translate-y-5 opacity-0"
                  className="text-4xl md:text-7xl -mt-5"
                >
                  EMERGENCY CARE
                </Transition.Child>

               
              </Transition>
              <Transition
                show={content === 3}
                className="flex flex-col items-start gap-8 max-w-3xl"
              >
                <Transition.Child
                  enter="transition ease-in-out duration-300 transform delay-300"
                  enterFrom="translate-y-5 opacity-0"
                  enterTo="translate-y-0 opacity-100"
                  leave="transition ease-in-out duration-300 transform delay-150"
                  leaveFrom="translate-y-0 opacity-100"
                  leaveTo="translate-y-5 opacity-0"
                  className="text-4xl md:text-5xl"
                >
                  CURRENT ACTIVITY
                </Transition.Child>
                <Transition.Child
                  enter="transition ease-in-out duration-300 transform delay-500"
                  enterFrom="translate-y-5 opacity-0"
                  enterTo="translate-y-0 opacity-100"
                  leave="transition ease-in-out duration-300 transform delay-100"
                  leaveFrom="translate-y-0 opacity-100"
                  leaveTo="translate-y-5 opacity-0"
                  className="text-4xl md:text-7xl -mt-5 font-semibold"
                >
                  NEOMOTION
                </Transition.Child>
                <Transition.Child
                  enter="transition ease-in-out duration-300 transform delay-700"
                  enterFrom="translate-y-5 opacity-0"
                  enterTo="translate-y-0 opacity-100"
                  leave="transition ease-in-out duration-300 transform delay-75"
                  leaveFrom="translate-y-0 opacity-100"
                  leaveTo="translate-y-5 opacity-0"
                  className=""
                >
                  As part of our community outreach program, we facilitated the
                  delivery of NEOMOTION wheelchairs to 80 differently abled
                  people, thereby giving them independence.
                </Transition.Child>
              </Transition>
            </div>

            <div className="mx-auto sm:mx-0 flex flex-row sm:flex-col items-center gap-4">
              <span className="font-semibold">{contentNumber}/3</span>
              <div className="w-32 sm:w-px h-px sm:h-32 bg-white bg-opacity-30 rounded" />
              <button
                onClick={() => {
                  let tempContent;
                  setContent((content) => {
                    tempContent = content === 1 ? 3 : content - 1;
                    return 0;
                  });
                  setTimeout(() => {
                    setContent(tempContent);
                  }, 500);
                  setContentNumber(tempContent);
                }}
                className="text-white hover:text-gray-600 bg-opacity-0 hover:bg-opacity-100 bg-teal-200 border-2 border-teal-200 rounded-full p-2.5 h-10 w-10 flex items-center justify-center"
              >
                <Arrow className="transform rotate-180" />
              </button>
              <button
                onClick={() => {
                  let tempContent;
                  setContent((content) => {
                    tempContent = content === 3 ? 1 : content + 1;
                    return 0;
                  });
                  setTimeout(() => {
                    setContent(tempContent);
                  }, 500);
                  setContentNumber(tempContent);
                }}
                className="text-white hover:text-gray-600 bg-opacity-0 hover:bg-opacity-100 bg-teal-200 border-2 border-teal-200 rounded-full p-2.5 h-10 w-10 flex items-center justify-center"
              >
                <Arrow className="" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex max-w-7xl mx-auto w-full flex-row items-center justify-between">
          <div className="pl-5 hidden md:flex flex-row items-center font-semibold gap-10 sm:gap-20">
            <div className="flex flex-col gap-2 text-sm">
              <span className="text-teal-200 text-xs">PHONE </span>
              <Link href={contact.phone.value}>
                <span className="hover:opacity-70">{contact.phone.label}</span>
              </Link>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <span className="text-teal-200 text-xs">EMAIL </span>
              <Link href={contact.email.value}>
                <span className="hover:opacity-70">{contact.email.label}</span>
              </Link>
            </div>
            
          </div>
          <div className="mx-auto md:mx-0 h-60 w-96 relative">
            <Image
              src="/thumbnail.jpeg"
              onClick={() => setVideoPopup(true)}
              alt="video"
              fill
            />
            <div
              onClick={() => setVideoPopup(true)}
              className="text-white hover:text-gray-300 cursor-pointer absolute z-20 inset-0 bg-opacity-0 flex flex-row items-center justify-center gap-6"
            >
              <span className="">Watch our video</span>
              <PlayIcon className="h-10" />
            </div>
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
