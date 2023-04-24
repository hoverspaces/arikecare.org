import Image from "next/image";
import { clinicalServicesPageData } from "../../data/clinicalServicesPageData";

export default function ClinicalServices() {
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
            Clinical Services
          </span>
          <span>
            Arike is committed to providing a wide spectrum of 24/7 clinical
            services
          </span>
          <div className="mt-5 flex flex-row gap-2">
            <div className="rounded h-0.5 w-20 bg-teal-200" />
            <div className="rounded h-0.5 w-8 bg-gray-300" />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto w-full px-5 py-10 sm:py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {clinicalServicesPageData.map((item, index) => {
          return (
            <div
              key={index}
              className="max-w-xs mx-auto p-3 rounded border border-gray-100 flex flex-col gap-2"
            >
              <div className="relative w-full h-28">
                <Image src={item.image} alt="" fill className="rounded" />
              </div>
              <span className="font-semibold">{item.label}</span>
              <span className="font-light text-sm text-gray-500">
                {item.description}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
