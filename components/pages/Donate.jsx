import Image from "next/image";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { donatePageData } from "@/data/donatePageData";

export default function Donate() {
  const [showUPI, setShowUPI] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://danamojo.org/dm/js/widget.js";
    script.type = "text/javascript";
    document.body.appendChild(script);

    setTimeout(function () {
      if (
        document.getElementById("ngoContentContainer").innerHTML.length < 40
      ) {
        document.getElementById("ngoContentContainer").innerHTML =
          "<center> <p style='color:#a94442;'>we are sorry that our systems are down. we will be up shortly. apologies for the inconvenience.</p></center>";
      }
    }, 20000);

    setTimeout(function () {
      $(".text-gray-700, .ml-auto").click(function () {
        $(".quicksand .fixed").removeClass("hidden");
        $(".quicksand .fixed").toggle();
      });
    }, 3000);
  }, []);
  return (
    <div className="w-full min-h-full sm:py-10 bg-gray-200 flex items-center justify-center">
      <div className="w-full shadow py-10 flex flex-col items-center bg-white">
        <span className="font-semibold text-xl">Donate for Arike</span>
        <span className="mt-3 px-4 py-2 rounded-full bg-teal-200">
          {donatePageData.supporters} supporters
        </span>
        <div>
          <div id="dmScriptContainer" style={{ display: "none" }}>
            <a href="#">Donate Now</a>
          </div>
          <div
            id="ngoContentContainer"
            iNGOId="1262"
            oDisplay="product"
            oDisplayTab="once,monthly"
            oQRCode="YES"
          >
            <center>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="please wait..."
                src="https://danamojo.org/dm/css/images/loading.gif"
              />
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}
