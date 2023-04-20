import Image from "next/image";

export default function Activity({ data }) {
  return (
    <div className="max-w-6xl px-5 mx-auto my-10 sm:my-20 flex flex-col items-start">
      <span className="text-xl font-semibold">{data.label}</span>
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
              alt={sponsor.name}
              height={50}
              width={sponsor.width}
            />
          </div>
        ))}
      </div>

      <div className="mt-10 sm:h-96 w-full grid sm:grid-rows-2 sm:grid-flow-col gap-4">
        {data.images.map((image, imageIndex) => (
          <div key={imageIndex} className={"bg-gray-300 " + image.className}>
            <div className="relative h-full w-full">
              <Image src={image.image} alt="" fill />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
