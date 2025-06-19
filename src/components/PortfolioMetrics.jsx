import React, { useState } from "react";
import { TrendingUp, TrendingDown, Download, ArrowRight } from "lucide-react";

const PortfolioMetrics = () => {
  const [hoveredMetric, setHoveredMetric] = useState(null);

  const metrics = [
    {
      id: "carbon",
      title: "Managed portfolio carbon footprint",
      unit: "tCO₂e",
      currentValue: "45,048",
      changePercent: "16",
      changeDirection: "up",
      changeColor: "text-red-500",
      fromYear: "2019",
      data: [
        { year: "2022", value: "45,048", progress: 100 },
        { year: "2021", value: "14,111", progress: 35 },
        { year: "2020", value: "32,813", progress: 70 },
        { year: "2019", value: "38,673", progress: 85 },
      ],
      actionText: "See full breakdown of carbon footprint",
      actionIcon: ArrowRight,
    },
    {
      id: "intensity",
      title: "Managed portfolio energy intensity",
      unit: "kWh/m²",
      currentValue: "123",
      changePercent: "22",
      changeDirection: "down",
      changeColor: "text-green-500",
      fromYear: "2019",
      data: [
        { year: "2022", value: "123", progress: 70 },
        { year: "2021", value: "128", progress: 75 },
        { year: "2020", value: "135", progress: 80 },
        { year: "2019", value: "157", progress: 100 },
      ],
      actionText: "Download the data",
      actionIcon: Download,
    },
    {
      id: "consumption",
      title: "Managed portfolio energy consumption",
      unit: "kWh",
      currentValue: "47,790,662",
      changePercent: "27",
      changeDirection: "down",
      changeColor: "text-green-500",
      fromYear: "2019",
      data: [
        { year: "2022", value: "47,790,662", progress: 75 },
        { year: "2021", value: "49,324,077", progress: 80 },
        { year: "2020", value: "48,784,205", progress: 78 },
        { year: "2019", value: "65,198,706", progress: 100 },
      ],
      actionText: "Download the data",
      actionIcon: Download,
    },
  ];

  return (
    <div className="w-full bg-slate-300 p-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {metrics.map((metric) => {
            const Icon = metric.actionIcon;
            const isHovered = hoveredMetric === metric.id;

            return (
              <div
                key={metric.id}
                className={`
                  bg-slate-200/50 rounded-3xl p-8 shadow-xl transition-all duration-500 ease-out
                  ${isHovered ? "scale-105 shadow-2xl" : "scale-100"}
                `}
                onMouseEnter={() => setHoveredMetric(metric.id)}
                onMouseLeave={() => setHoveredMetric(null)}
              >
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-slate-700 text-lg font-medium mb-6 leading-tight">
                    {metric.title}
                  </h3>

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-4xl font-bold text-slate-800">
                      {metric.currentValue}
                    </span>
                    <span className="text-slate-600 text-sm font-medium">
                      {metric.unit}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-slate-500">
                      from {metric.fromYear}
                    </span>
                    <div className="flex items-center space-x-1">
                      {metric.changeDirection === "up" ? (
                        <TrendingUp
                          className={`w-4 h-4 ${metric.changeColor}`}
                        />
                      ) : (
                        <TrendingDown
                          className={`w-4 h-4 ${metric.changeColor}`}
                        />
                      )}
                      <span className={`font-semibold ${metric.changeColor}`}>
                        {metric.changePercent}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Data Visualization */}
                <div className="space-y-4 mb-8">
                  {metric.data.map((item, index) => (
                    <div
                      key={item.year}
                      className="flex items-center justify-between group"
                    >
                      <div className="flex items-center space-x-4 flex-1">
                        <span className="text-slate-600 font-medium w-12">
                          {item.year}
                        </span>

                        <div className="flex-1 relative">
                          <div className="h-3 bg-slate-400/30 rounded-full overflow-hidden">
                            <div
                              className={`
                                h-full rounded-full transition-all duration-1000 ease-out
                                ${isHovered ? "bg-slate-600" : "bg-slate-500"}
                              `}
                              style={{
                                width: `${item.progress}%`,
                                animationDelay: `${index * 0.1}s`,
                              }}
                            />
                          </div>

                          {/* Animated shine effect */}
                          {isHovered && (
                            <div className="absolute inset-0 h-3 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shine_2s_ease-in-out_infinite]"
                                style={{ animationDelay: `${index * 0.2}s` }}
                              />
                            </div>
                          )}
                        </div>

                        <span className="text-slate-700 font-medium text-right w-24">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button
                  className={`
                    w-full flex items-center justify-between p-4 rounded-2xl
                    transition-all duration-300 ease-out group
                    ${
                      isHovered
                        ? "bg-slate-600 text-white shadow-lg"
                        : "bg-slate-400/30 text-slate-700 hover:bg-slate-400/50"
                    }
                  `}
                >
                  <span className="text-sm font-medium tracking-wide">
                    {metric.actionText}
                  </span>
                  <div
                    className={`
                    w-8 h-8 rounded-full flex items-center justify-center
                    transition-all duration-300 ease-out
                    ${
                      isHovered
                        ? "bg-white/20 scale-110"
                        : "bg-slate-500/20 group-hover:scale-105"
                    }
                  `}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </div>
  );
};

export default PortfolioMetrics;
