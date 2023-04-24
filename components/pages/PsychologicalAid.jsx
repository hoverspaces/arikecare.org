import Image from "next/image";

import { psychologicalAidPageData } from "@/data/psychologicalAidPageData";
import { Arrow, HeartIcon } from "../common/appIcons";
import Link from "next/link";

export default function PsychologicalAid() {
  return (
    <div className="">
      <div className="h-96 w-full relative overflow-hidden">
        <Image
          className="absolute inset-0 w-full object-cover"
          src="/services-hero-image.png"
          alt=""
          fill
        />
        <div className="px-5 mx-auto max-w-6xl text-white absolute inset-0 bg-gray-600 z-20 bg-opacity-10 flex flex-col justify-center gap-2">
          <span className="text-3xl"> arike</span>
          <span className="text-5xl sm:text-6xl font-bold">
            Psychological Aid
          </span>
          <span className="max-w-2xl">
            Arike’s department of Community welfare and Patient well being is
            devoted to providing psychological support through daily home visits
            for both the patient and the caregiver.
          </span>
          <div className="mt-5 flex flex-row gap-2">
            <div className="rounded h-0.5 w-20 bg-teal-200" />
            <div className="rounded h-0.5 w-8 bg-gray-300" />
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-5 py-16 sm:py-28">
        <div className="flex flex-col md:flex-row items-start gap-10">
          <Image
            src={psychologicalAidPageData.content1.image}
            alt=""
            width={400}
            height={400}
          />
          <div className="flex flex-col gap-5">
            <span className="font-semibold text-xl">
              {psychologicalAidPageData.content1.label}
            </span>
            {psychologicalAidPageData.content1.points.map((item, index) => (
              <div key={index} className="flex flex-row items-start gap-4">
                <HeartIcon className="flex-shrink-0 h-4 w-4 text-teal-300" />
                <span className="text-sm font-light text-gray-500">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-28 flex flex-col-reverse md:flex-row items-start gap-10">
          <div className="flex flex-col gap-8">
            <span className="font-semibold text-xl">
              {psychologicalAidPageData.content2.label}
            </span>
            {psychologicalAidPageData.content2.points.map((item, index) => (
              <div key={index} className="flex flex-row items-start gap-4">
                <HeartIcon className="flex-shrink-0 h-4 w-4 text-teal-300" />
                <span className="text-sm font-light text-gray-500">{item}</span>
              </div>
            ))}
            <div className="mt-10 flex flex-row items-center gap-y-3 gap-x-7 flex-wrap">
              <Link href={"/activities"}>
                <button className="font-light text-sm px-3 py-1.5 rounded-full border border-gray-600 hover:border-gray-400 flex flex-row text-gray-700 hover:text-gray-500 duration-300 gap-1 items-center">
                  Visit Activities{" "}
                  <div className="h-3 w-3">
                    <Arrow className="h-full w-full" />
                  </div>
                </button>
              </Link>
              <Link href={"/koode"}>
                <button className="font-light text-sm px-3 py-1.5 rounded-full border border-gray-600 hover:border-gray-400 flex flex-row text-gray-700 hover:text-gray-500 duration-300 gap-1 items-center">
                  Know more about Koode{" "}
                  <div className="h-3 w-3">
                    <Arrow className="h-full w-full" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0 flex flex-row sm:flex-col flex-wrap gap-1">
            {psychologicalAidPageData.content2.images.map((item, index) => (
              <Image src={item} key={index} alt="" width={400} height={400} />
            ))}
          </div>
        </div>
        <div className="mt-28 rounded-md bg-gray-100 w-full flex flex-col-reverse sm:flex-row sm:justify-between gap-12 p-8">
          <div className="flex flex-col gap-6">
            <span className="font-semibold text-xl">
              {psychologicalAidPageData.content3.label}
            </span>
            <span className="text-sm font-light text-gray-500 whitespace-pre-line">
              {psychologicalAidPageData.content3.details}
            </span>
          </div>
          <Image
            src={psychologicalAidPageData.content3.image}
            alt=""
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
