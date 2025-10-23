import { useEffect, useRef } from "react";

export default function Donate() {
  const formRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.razorpay.com/static/widget/subscription-button.js";
    script.async = true;
    script.setAttribute("data-subscription_button_id", "pl_RPoOHHTcmD9UXb");
    script.setAttribute("data-button_theme", "brand-color");
    if (formRef.current) {
      formRef.current.appendChild(script);
    }
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fafafa",
      }}
    >
      <form ref={formRef}></form>
    </div>
  );
}
