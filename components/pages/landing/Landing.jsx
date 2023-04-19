import Link from "next/link";
import { useState } from "react";
import handleViewport from "react-in-viewport";

import { heroPageData } from "@/data/heroPageData";
import Hero from "./components/Hero";
import { Arrow } from "@/components/common/appIcons";
import Testimonials from "./components/Testimonials";

export default function Landing() {
  const [helpedPeople, setHelpedPeople] = useState(0);

  const animateHelpedPeople = () => {
    const interval = setInterval(() => {
      setHelpedPeople((helpedPeople) => {
        if (helpedPeople + 1 > heroPageData.content2.value) {
          clearInterval(interval);
          return helpedPeople;
        }
        return helpedPeople + 1;
      });
    }, 1);
  };

  const Block = (props) => {
    const { forwardedRef } = props;
    return (
      <span
        ref={forwardedRef}
        className="text-gray-700 text-6xl sm:text-8xl font-black"
      >
        {helpedPeople}
      </span>
    );
  };

  const ViewportBlock = handleViewport(Block /** options: {}, config: {} **/);

  return (
    <div>
      <Hero />
      <div className="bg-gray-700 w-full px-5 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="sm:grid sm:grid-cols-3 flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-5">
              <span className="font-semibold text-teal-200">
                {heroPageData.content1.heading1}
              </span>
              <span className="font-bold text-4xl text-white">
                {heroPageData.content1.heading2}
              </span>
              <Link
                href={heroPageData.content1.buttonLink}
                className="text-white hover:text-gray-600 bg-opacity-0 hover:bg-opacity-100 bg-teal-200 border-2 border-teal-200 rounded-full px-10 py-3.5 font-semibold text-xs transform duration-300 hover:-translate-y-1"
              >
                {heroPageData.content1.buttonLabel}
              </Link>
            </div>
            <div className="col-span-2 flex flex-col gap-5">
              <span className="text-white">{heroPageData.content1.body1}</span>
              <span className="text-white font-semibold">
                {heroPageData.content1.body2}
              </span>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
            {heroPageData.content1.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex flex-col">
                <feature.icon className="text-teal-200 h-24 w-24" />
                <span className="mt-5 font-semibold text-xl text-white">
                  {feature.label}
                </span>
                <span className="mt-2 text-white">{feature.body}</span>
                <div className="mt-5 h-0.5 rounded-full w-20 bg-teal-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl flex flex-col items-center">
        <div className="my-20 flex flex-col items-center">
          <span className="font-bold text-lg">
            {heroPageData.content2.label}
          </span>
          <ViewportBlock
            onEnterViewport={() => {
              animateHelpedPeople();
            }}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-2 flex flex-col p-8">
            <span className="mb-3 font-semibold text-gray-400">
              {heroPageData.content3.heading1}
            </span>
            {heroPageData.content3.heading2}
            <span className="text-gray-500 mt-5">
              {heroPageData.content3.body}
            </span>
          </div>
          {heroPageData.content3.services.map((service, serviceIndex) => (
            <div
              key={serviceIndex}
              className="w-full h-96 relative overflow-hidden"
            >
              <img
                src={service.image}
                className="w-full h-full object-cover transform hover:scale-125 ease-in-out duration-500"
              />
              <div className="pointer-events-none absolute inset-0 bg-opacity-50 bg-black flex flex-col items-center justify-center gap-6">
                <div className="h-3 w-7 rounded-full bg-teal-200" />
                <span className="text-white font-bold text-3xl sm:text-4xl text-center max-w-sm">
                  {service.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-10 bg-teal-200 flex flex-col items-center">
        <div className="max-w-6xl mx-auto px-5 py-10">
          <span className="text-stone-500 font-semibold">
            {heroPageData.content4.heading1}
          </span>

          <Testimonials />
        </div>
      </div>
    </div>
  );
}
