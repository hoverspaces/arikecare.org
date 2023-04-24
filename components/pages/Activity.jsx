import Image from "next/image";

export default function Activity({ data }) {
  return (
    <div className="max-w-6xl px-5 mx-auto my-10 sm:my-20 flex flex-col items-start">
      <span className="text-2xl font-semibold">{data.label}</span>
      <span className="mt-3 font-light whitespace-pre-wrap">
        {data.contant}
      </span>
      <span className="mt-5 text-sm font-semibold text-gray-500">
        Sponsors;
      </span>
      <div className="mt-2 bg-gray-100 flex flex-row items-center divide-x rounded-md overflow-hidden">
        {data.sponsors.map((sponsor, sponsorIndex) => (
          <div key={sponsorIndex} className="px-6 py-1">
            <Image
              src={sponsor.image}
              alt={sponsor.image}
              height={50}
              width={sponsor.width}
            />
          </div>
        ))}
      </div>

      <div className="hidden md:grid mt-10 md:h-96 w-full grid-rows-2 grid-flow-col gap-4">
        {data.images.map((image, imageIndex) => (
          <div key={imageIndex} className={"bg-gray-300 " + image.className}>
            <div className="relative h-full w-full">
              <Image src={image.image} alt="" fill />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 w-full flex flex-col gap-5">
        {data.images.map((image, imageIndex) => (
          <div
            className={
              "max-w-sm w-full mx-auto md:hidden relative " +
              (image.className === "row-span-2" ? "h-96" : "h-40")
            }
            key={imageIndex}
          >
            <Image src={image.image} alt="" fill />
          </div>
        ))}
      </div>
    </div>
  );
}
