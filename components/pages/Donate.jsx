import { useEffect } from "react";

export default function Donate() {
  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
        }
        .container {
          min-height: 100vh;
          display: grid;
          place-items: center;
          background: #fafafa;
        }
        .card {
          width: 100%;
          max-width: 480px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 12px;
          padding: 20px;
          background: #fff;
          box-shadow: 0 2px 8px rgba(0,0,0,0.03);
        }
        .form-wrapper {
          display: flex;
          justify-content: center;
        }
        h1, p {
          text-align: center;
        }
        .hint {
          display: block;
          text-align: center;
          color: #777;
          margin-top: 12px;
          font-size: 0.85rem;
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
