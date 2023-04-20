import { activities } from "@/data/activities";
import Image from "next/image";
import { Arrow } from "../common/appIcons";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="bg-gray-100">
      <div className="h-96 w-full relative overflow-hidden">
        <Image
          className="absolute inset-0 w-full object-cover"
          src="/activities.png"
          alt=""
          fill
        />
        <div className="px-5 mx-auto max-w-6xl text-white absolute inset-0 bg-gray-600 z-20 bg-opacity-10 flex flex-col justify-center gap-5">
          <span className="text-2xl sm:text-3xl"> arike</span>
          <span className="text-5xl sm:text-7xl font-bold">Activities</span>
          <div className="mt-5 sm:mt-9 flex flex-row gap-2">
            <div className="rounded h-0.5 w-20 bg-teal-200" />
            <div className="rounded h-0.5 w-8 bg-gray-300" />
          </div>
        </div>
      </div>
      <div className="py-10 sm:py-20 mx-auto max-w-7xl flex flex-row items-center justify-center flex-wrap gap-x-5 gap-y-10">
        {activities.map((activity, activityIndex) => (
          <div
            key={activityIndex}
            className="max-w-xl w-full rounded-md overflow-hidden"
          >
            <div className="px-10 py-5 text-xl font-semibold text-indigo-800 bg-teal-200">
              {activity.label}
            </div>
            <div className="bg-white px-8 py-6 flex flex-col items-start">
              <span className="font-light text-gray-500">
                {activity.description}
              </span>
              <span className="mt-4 font-semibold text-gray-500">
                Sponsors;
              </span>
              <div className="mt-2 bg-gray-100 flex flex-row items-center divide-x rounded-md overflow-hidden">
                {activity.sponsors.map((sponsor, sponsorIndex) => (
                  <div key={sponsorIndex} className="px-6 py-1">
                    <Image
                      src={sponsor.image}
                      alt={sponsor.name}
                      height={50}
                      width={sponsor.width}
                    />
                  </div>
                ))}
              </div>

              <Link href={"/activities/" + activity.link}>
                <button className="mt-5 text-sm px-3 py-1.5 rounded-full border border-gray-600 hover:border-gray-400 flex flex-row text-gray-700 hover:text-gray-500 duration-300 gap-1 items-center">
                  Know more <Arrow className="h-2.5" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
