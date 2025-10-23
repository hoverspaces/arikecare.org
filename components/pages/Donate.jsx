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

        <h1 id="subscribe-title">Subscribe</h1>
        <p>Tap the button below to start your subscription securely via Razorpay.</p>

        <div class="form-wrapper">
          <form aria-label="Razorpay subscription">
            <script
              src="https://cdn.razorpay.com/static/widget/subscription-button.js"
              data-subscription_button_id="pl_RPoOHHTcmD9UXb"
              data-button_theme="brand-color"
              async
            ></script>
          </form>
        </div>

  );
}
