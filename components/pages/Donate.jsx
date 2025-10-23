import { useEffect } from "react";

export default function Donate() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://danamojo.org/dm/js/widget.js";
    script.type = "text/javascript";
    document.body.appendChild(script);

    setTimeout(function () {
      if (
        document.getElementById("ngoContentContainer") &&
        document.getElementById("ngoContentContainer").innerHTML.length < 40
      ) {
        document.getElementById("ngoContentContainer").innerHTML =
          "<center> <p style='color:#a94442;'>we are sorry that our systems are down. we will be up shortly. apologies for the inconvenience.</p></center>";
      }
    }, 20000);

    setTimeout(function () {
      if (window.$) {
        $(".text-gray-700, .ml-auto").click(function () {
          $(".quicksand .fixed").removeClass("hidden");
          $(".quicksand .fixed").toggle();
        });
      }
    }, 3000);
  }, []);

  return (
    <>
      <style jsx global>{`
        :root { color-scheme: light dark; }
        * { box-sizing: border-box; }
        body {
          margin: 0;
          font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans",
            Ubuntu, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji";
          background: #ffffff;
          color: #111111;
        }
        @media (prefers-color-scheme: dark) {
          body { background: #0b0b0b; color: #f5f5f5; }
        }

        .container {
          min-height: 100svh;
          padding: 24px;
          padding-top: calc(24px + env(safe-area-inset-top));
          padding-bottom: calc(24px + env(safe-area-inset-bottom));
          display: grid;
          align-content: center;
          justify-items: center;
        }

        .card {
          width: 100%;
          max-width: 480px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 12px;
          padding: 20px;
          background: #fafafa;
        }
        @media (prefers-color-scheme: dark) {
          .card {
            background: #121212;
            border-color: rgba(255, 255, 255, 0.1);
          }
        }

        h1 {
          font-size: 1.25rem;
          line-height: 1.4;
          margin: 0 0 8px;
          text-align: center;
        }
        p {
          font-size: 0.95rem;
          line-height: 1.55;
          margin: 0 0 16px;
          text-align: center;
          color: #555;
        }
        @media (prefers-color-scheme: dark) {
          p { color: #b7b7b7; }
        }

        .form-wrapper {
          display: flex;
          justify-content: center;
        }

        .hint {
          display: block;
          text-align: center;
          color: #777;
          margin-top: 12px;
          font-size: 0.85rem;
        }
        @media (prefers-color-scheme: dark) {
          .hint { color: #a8a8a8; }
        }
      `}</style>
      <main className="container">
        <section className="card" aria-labelledby="subscribe-title">
          <h1 id="subscribe-title">Subscribe</h1>
          <p>
            Tap the button below to start your subscription securely via Razorpay.
          </p>
          <div className="form-wrapper">
            <form aria-label="Razorpay subscription">
              <script
                src="https://cdn.razorpay.com/static/widget/subscription-button.js"
                data-subscription_button_id="pl_RPoOHHTcmD9UXb"
                data-button_theme="brand-color"
                async
              ></script>
            </form>
          </div>
          <noscript>
            <p>
              JavaScript is required to load the payment button. Please enable JavaScript and reload this page.
            </p>
          </noscript>
          <small className="hint">Protected and powered by Razorpay.</small>
        </section>
      </main>
    </>
  );
}
