import React, { useState } from "react";

const pages = {
  terms: {
    title: "Terms and Conditions",
    content: (
      <div>
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
        <p className="mb-4">
          By using the Arike Care website and services, you agree to comply with and be bound by the following terms and conditions. If you do not agree with these terms, please refrain from using our services.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Services are provided on an as-is basis and may be subject to changes without prior notice.</li>
          <li>Users are responsible for ensuring the accuracy of the personal and medical information they provide.</li>
          <li>Unauthorized use of our services, including misuse of data, may result in termination of access.</li>
          <li>All intellectual property on this site, including text, graphics, and logos, is owned by Arike Care and cannot be reused without permission.</li>
        </ul>
      </div>
    ),
  },
  privacy: {
    title: "Privacy Policy",
    content: (
      <div>
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          Arike Care values your privacy and is committed to protecting your personal information. This policy describes how we collect, use, and safeguard your data.
        </p>
        <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
        <p className="mb-4">We may collect personal details such as your name, contact information, health-related data, and interactions with our website or services.</p>
        <h2 className="text-xl font-semibold mb-2">How We Use Information</h2>
        <p className="mb-4">Your data is used to provide and improve our services, ensure quality care, process transactions, and communicate updates or offers.</p>
        <h2 className="text-xl font-semibold mb-2">Data Security</h2>
        <p className="mb-4">We employ industry-standard practices to secure your data, but no method of transmission over the internet is 100% secure.</p>
      </div>
    ),
  },
  cancellation: {
    title: "Cancellation and Refund",
    content: (
      <div>
        <h1 className="text-3xl font-bold mb-4">Cancellation and Refund</h1>
        <p className="mb-4">
          We strive to offer flexible services to our users. Please read our cancellation and refund policy carefully before making a booking or purchase.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Cancellations must be requested at least 24 hours prior to the scheduled service.</li>
          <li>Refunds will be processed within 7-10 business days after approval of cancellation.</li>
          <li>Certain services or products may be non-refundable. These will be clearly indicated at the time of booking or purchase.</li>
          <li>Partial refunds may be granted in cases of unavoidable circumstances, at the discretion of Arike Care.</li>
        </ul>
      </div>
    ),
  },
  shipping: {
    title: "Shipping and Exchange",
    content: (
      <div>
        <h1 className="text-3xl font-bold mb-4">Shipping and Exchange</h1>
        <p className="mb-4">
          While Arike primarily provides care services and support, this section ensures that obligations related to delivery, receipt, and exchange of any material items adhere to local regulations.
        </p>
        <h2 className="text-xl font-semibold mb-2">Shipping</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>  Any goods or services offered by Arike Care comply with applicable legal requirements. </li>
          <li>Orders are processed within 2-3 business days of purchase.</li>
          <li>Shipping charges, if applicable, will be displayed during checkout.</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">Exchange</h2>
        <ul className="list-disc pl-6 space-y-2">
           <li>All items provided, if any, will follow the laws and regulations governing delivery or exchange.</li>
          <li>Arike Care does not guarantee delivery timelines for any material items, as these may be subject to third-party service providers and legal requirements.</li>
          <li>Exchanges or returns, if applicable, will comply with statutory obligations and the specific terms communicated at the time of provision.</li>
        </ul>
      </div>
    ),
  },
};

export default function LegalPages() {
  const [activePage, setActivePage] = useState("terms");

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <nav className="mb-6 flex flex-wrap gap-2">
        {Object.keys(pages).map((key) => (
          <button
            key={key}
            onClick={() => setActivePage(key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activePage === key
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {pages[key].title}
          </button>
        ))}
      </nav>
      <div className="bg-white shadow rounded-2xl p-6">
        {pages[activePage].content}
      </div>
    </div>
  );
}
