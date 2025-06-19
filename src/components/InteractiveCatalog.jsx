import React, { useState, useEffect } from "react";
import { CreditCard, Car, Layers, Calendar } from "lucide-react";

const InteractiveCatalog = () => {
  const [activeTab, setActiveTab] = useState("catalog");
  const [fadeKey, setFadeKey] = useState(0);

  const tabs = [
    {
      id: "billing",
      label: "BILLING",
      icon: CreditCard,
      bgColor: "bg-pink-200",
      iconColor: "text-pink-600",
    },
    {
      id: "charging",
      label: "CHARGING",
      icon: Car,
      bgColor: "bg-yellow-200",
      iconColor: "text-yellow-600",
    },
    {
      id: "catalog",
      label: "CATALOG",
      icon: Layers,
      bgColor: "bg-green-200",
      iconColor: "text-green-600",
    },
    {
      id: "events",
      label: "EVENTS",
      icon: Calendar,
      bgColor: "bg-cyan-200",
      iconColor: "text-cyan-600",
    },
  ];

  const content = {
    billing: {
      title: "Billing Management",
      description:
        "Streamlined billing solutions that automate invoicing, payment processing, and financial reporting for your business operations.",
      cards: [
        { icon: "💳", label: "Payment Processing" },
        { icon: "📊", label: "Financial Reports" },
        { icon: "🔄", label: "Auto Billing" },
      ],
    },
    charging: {
      title: "Charging Solutions",
      description:
        "Advanced charging infrastructure management tools that optimize energy distribution and monitor usage across your network.",
      cards: [
        { icon: "⚡", label: "Fast Charging" },
        { icon: "🔋", label: "Battery Monitor" },
        { icon: "📍", label: "Station Locator" },
      ],
    },
    catalog: {
      title: "Product Catalog",
      description:
        "Intuitive tools that empower customers to manage their accounts with ease, freeing up your team.",
      cards: [
        { icon: "N", label: "Netflix", bg: "bg-red-600 text-white" },
        { icon: "🍎", label: "Apple" },
        { icon: "🎵", label: "Spotify", bg: "bg-green-600 text-white" },
      ],
      pricing: {
        title: "TOTAL UNLIMITED",
        subtitle: "Unlimited minutes",
        highlight: "MOBILAPP ONLY",
      },
    },
    events: {
      title: "Event Management",
      description:
        "Comprehensive event planning and management tools that handle scheduling, attendee tracking, and real-time analytics.",
      cards: [
        { icon: "📅", label: "Event Scheduler" },
        { icon: "👥", label: "Attendee Manager" },
        { icon: "📈", label: "Analytics" },
      ],
    },
  };

  const handleTabClick = (tabId) => {
    if (tabId !== activeTab) {
      setActiveTab(tabId);
      setFadeKey((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-300 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Tab Buttons */}
        <div className="flex justify-center items-center gap-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`
                  relative overflow-hidden rounded-2xl transition-all duration-500 ease-out
                  ${
                    isActive
                      ? "w-40 h-16 scale-110"
                      : "w-16 h-16 scale-100 hover:scale-105"
                  }
                  ${tab.bgColor} shadow-lg hover:shadow-xl
                `}
              >
                {/* Animated background for active button */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_ease-in-out_infinite]"></div>
                  </div>
                )}

                <div className="relative z-10 flex items-center justify-center h-full px-3">
                  <Icon className={`${tab.iconColor} w-6 h-6 flex-shrink-0`} />
                  {isActive && (
                    <span
                      className={`ml-3 text-sm font-semibold ${tab.iconColor} opacity-0 animate-[fadeIn_0.5s_ease-out_0.3s_forwards]`}
                    >
                      {tab.label}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div
          key={fadeKey}
          className="bg-slate-200/50 rounded-3xl p-8 shadow-xl animate-[fadeInUp_0.6s_ease-out]"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-slate-800">
                {content[activeTab].title}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {content[activeTab].description}
              </p>
            </div>

            {/* Right Content - Cards */}
            <div className="space-y-4">
              {activeTab === "catalog" ? (
                <>
                  {/* Add-ons Section */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-sm text-slate-500 mb-4 tracking-wider">
                      + ADD-ONS
                    </h3>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {content[activeTab].cards.map((card, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center space-y-2 animate-[slideIn_0.6s_ease-out]"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div
                            className={`w-12 h-12 rounded-lg flex items-center justify-center text-lg font-bold ${
                              card.bg || "bg-slate-100"
                            }`}
                          >
                            {card.icon}
                          </div>
                          <span className="text-xs text-slate-600">
                            {card.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-full">
                        {content[activeTab].pricing.highlight}
                      </span>
                      <span className="text-green-600">●</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-1">
                      {content[activeTab].pricing.title}
                    </h3>
                    <p className="text-sm text-slate-500">
                      ✓ {content[activeTab].pricing.subtitle}
                    </p>
                  </div>
                </>
              ) : (
                /* Other tabs content */
                <div className="grid gap-4">
                  {content[activeTab].cards.map((card, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-lg flex items-center space-x-4 animate-[slideIn_0.6s_ease-out]"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-2xl">{card.icon}</div>
                      <span className="text-lg font-medium text-slate-700">
                        {card.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-12 flex justify-center">
            <div className="bg-slate-700 rounded-full px-6 py-3 flex items-center space-x-8">
              <div className="flex items-center space-x-6 text-slate-300">
                <span className="text-sm tracking-wider">PRODUCTS +</span>
                <span className="text-sm tracking-wider">SOLUTIONS +</span>
                <span className="text-sm tracking-wider">RESOURCES +</span>
                <span className="text-sm tracking-wider">SERVICES</span>
              </div>
              <button className="bg-cyan-400 hover:bg-cyan-500 text-slate-800 px-6 py-2 rounded-full text-sm font-semibold tracking-wider transition-colors">
                BOOK A MEETING
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default InteractiveCatalog;
