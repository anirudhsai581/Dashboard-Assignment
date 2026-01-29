import React from 'react';
import ReactECharts from 'echarts-for-react';
import airIcon from '../assets/air.png';
import './CarbonIntensityCard.css';

const CarbonIntensityCard = () => {
  const option = {
    series: [
      {
        type: 'pie',
        radius: ['55%', '85%'],
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: 'outside',
          formatter: function(params) {
            return `{value|${params.value}%}\n{name|${params.name}}`;
          },
          rich: {
            value: {
              fontSize: 14,
              fontWeight: 600,
              color: '#fff',
              lineHeight: 20
            },
            name: {
              fontSize: 11,
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.6)',
              lineHeight: 18
            }
          }
        },
        labelLine: {
          show: true,
          length: 15,
          length2: 8,
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
          }
        },
        data: [
          { value: 20, name: 'Hydro', itemStyle: { color: '#e8a558' } },
          { value: 20, name: 'Nuclear', itemStyle: { color: '#b565d8' } },
          { value: 15, name: 'Wind', itemStyle: { color: '#3FFDE0' } },
          { value: 15, name: 'Solar', itemStyle: { color: '#ff6b6b' } },
          { value: 30, name: 'Coal', itemStyle: { color: '#a05050' } },
           
        ]
      }
    ]
  };

  return (
    <div className="card carbon-card">
      <div className="card-header">
        <div className="card-title">
          <div className="icon-wrapper">
            <img src={airIcon} alt="Air" className="card-icon" />
          </div>
          <span>Carbon Intensity</span>
        </div>
        <div className="card-controls">
          <div className="time-badge">Current</div>
        </div>
      </div>
      <div className="carbon-content">
        <div className="chart-wrapper">
          <ReactECharts option={option} style={{ height: '300px', width: '100%' }} />
          <div className="carbon-center-value">
            <div className="carbon-value">95gm</div>
            <div className="carbon-unit">CO2/kWh</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonIntensityCard;
