import { useState } from "react";

export default function FooterTabs({ footerContent }) {
  const [activeTab, setActiveTab] = useState(Object.keys(footerContent)[0]);

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-6 border-b pb-3 mb-6 text-center sm:text-left">
        {Object.keys(footerContent).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-medium pb-1 transition-all ${
              activeTab === tab
                ? "border-b-2 border-black text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-4 gap-x-6 text-sm animate-fadeIn">
        {footerContent[activeTab].map((item, i) => (
          <div key={i}>
            <p className="font-semibold hover:underline cursor-pointer">
              {item.title}
            </p>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
