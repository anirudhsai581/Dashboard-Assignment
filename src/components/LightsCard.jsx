import ReactECharts from "echarts-for-react";
import lightIcon from "../assets/light.png";

import "./LightsCard.css";

const LightsCard = () => {
  const option = {
    series: [
      {
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        min: 2700,
        max: 5000,
        radius: "70%",
        center: ["50%", "55%"],

        axisLine: {
          show: true,
          lineStyle: {
            width: 10,
            color: [[1, "rgba(255, 255, 255, 0.1)"]],
          },
        },

        progress: {
          show: true,
          width: 10,
          itemStyle: {
            color: "#3FFDE0",
          },
        },

        pointer: {
          icon: "circle",
          length: "12%",
          width: 20,
          offsetCenter: [0, "-88%"],
          itemStyle: {
            color: "#3FFDE0",
            borderColor: "#fff",
            borderWidth: 2,
            shadowColor: "rgba(63, 253, 224, 0.5)",
            shadowBlur: 10,
          },
        },

        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        title: { show: false },
        detail: { show: false },
        data: [{ value: 4300 }],
      },

      {
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        min: 2700,
        max: 5000,
        splitNumber: 36,
        radius: "70%",
        center: ["50%", "55%"],

        axisLine: {
          show: false,
          lineStyle: {
            width: 0,
            color: [
              [0.6956, "#3FFDE0"],
              [1, "rgba(255, 255, 255, 0.3)"],
            ],
          },
        },

        axisTick: {
          show: true,
          splitNumber: 1,
          length: 12,
          distance: -35,
          lineStyle: {
            color: "auto",
            width: 3,
          },
        },
        splitLine: { show: false },
        axisLabel: { show: false },
        pointer: { show: false },
        title: { show: false },
        detail: { show: false },
      },
    ],
  };

  return (
    <div className="card lights-card">
      <div className="card-header">
        <div className="card-title">
          <div className="icon-wrapper">
            <img src={lightIcon} alt="Light" className="card-icon" />
          </div>
          <span>Lights</span>
        </div>
        <div className="card-controls">
          <div className="toggle-switch"></div>
        </div>
      </div>
      <div className="lights-content">
        <div className="gauge-wrapper">
          <ReactECharts
            option={option}
            style={{ height: "280px", width: "100%" }}
          />
          <div className="gauge-value">4300k</div>
          <div className="gauge-labels">
            <span className="gauge-label-left">2700k</span>
            <span className="gauge-label-right">5000k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightsCard;
