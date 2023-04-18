import Image from "next/image";

import { volunteerPageData } from "@/data/volunteerPageData";

export default function Volunteer() {
  return (
    <div className="mb-20">
      <div
        style={{ height: "30rem" }}
        className="w-full relative overflow-hidden"
      >
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/home-cover-1.jpg"
          alt=""
        />
        <div className="px-5 mx-auto text-white absolute inset-0 bg-gray-900 z-20 bg-opacity-40 flex flex-col justify-center gap-5">
          <div className="mt-20 flex-grow w-full max-w-6xl mx-auto flex flex-col justify-center">
            <span className="text-3xl"> arike</span>
            <div className="mt-5 text-5xl md:text-7xl">
              <span className="font-semibold">Become </span>
              <span className="font-light">a Volunteer</span>
            </div>
            <div className="mt-9 flex flex-row gap-2">
              <div className="rounded h-0.5 w-20 bg-teal-200" />
              <div className="rounded h-0.5 w-8 bg-gray-300" />
            </div>
          </div>
          <div className="ml-auto transform translate-y-2 md:translate-y-5 text-teal-100 text-5xl sm:text-6xl md:text-9xl">
            Compassion
          </div>
        </div>
      </div>
      <div className="max-w-6xl px-5 mx-auto flex flex-col">
        <div className="pt-20 flex flex-col md:grid md:grid-cols-2 gap-10 lg:gap-20 items-center sm:items-start justify-around">
          <Image
            className="object-cover object-center mx-auto"
            src="/home-cover-2.jpg"
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
            src="/home-cover-2.jpg"
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
        <div className="mt-20">
          <span className="font-semibold text-gray-400">
            Fill Form and Become Volonteer
          </span>
          <div className="mt-3 font-extralight text-gray-800 text-5xl">
            <span className="font-semibold">Complete</span> the Form
          </div>
          <div className="mt-20 flex flex-col md:grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              {[
                {
                  label: "First Name",
                },

                {
                  label: "Email",
                },
                {
                  label: "Phone Number",
                },
                {
                  label: "Date of Birth",
                },
                {
                  label: "Address",
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
              placeholder={"About Occupation"}
              className="w-full px-7 py-3 rounded-3xl bg-gray-200 border-2 border-gray-200 focus:bg-white focus:outline-none focus:ring-none"
              rows={5}
            />
          </div>
          <div>
            <button className="mt-10 border-2 border-gray-700 px-16 py-4 text-xs font-semibold rounded-full hover:text-white hover:bg-gray-700 transform-all duration-300 hover:-translate-y-1">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
