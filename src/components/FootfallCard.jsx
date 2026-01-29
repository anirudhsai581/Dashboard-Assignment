import React from 'react';
import ReactECharts from 'echarts-for-react';
import usersIcon from '../assets/users.png';
import './FootfallCard.css';

const FootfallCard = () => {
  const option = {
    grid: {
      left: '8%',
      right: '4%',
      bottom: '12%',
      top: '8%',
      containLabel: false
    },
    xAxis: {
      type: 'category',
      data: ['M', 'T', 'W', 'T', 'F', 'S', 'Today'],
      boundaryGap: false,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 12,
        fontWeight: 400,
        margin: 16
      }
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 150,
      interval: 25,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      }
    },
    series: [
      {
        data: [110, 90, 120, 100, 130, 115, 125],
        type: 'line',
        smooth: true,
        lineStyle: {
          color: '#3FFDE0',
          width: 2
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(63, 253, 224, 0.3)'
              },
              {
                offset: 1,
                color: 'rgba(63, 253, 224, 0.02)'
              }
            ]
          }
        },
        symbol: 'circle',
        symbolSize: 6,
        itemStyle: {
          color: '#3FFDE0',
          borderColor: '#fff',
          borderWidth: 2
        },
        emphasis: {
          itemStyle: {
            color: '#3FFDE0',
            borderColor: '#fff',
            borderWidth: 3,
            shadowBlur: 10,
            shadowColor: 'rgba(63, 253, 224, 0.5)'
          }
        }
      }
    ]
  };

  return (
    <div className="card footfall-card">
      <div className="card-header">
        <div className="card-title">
          <div className="icon-wrapper">
            <img src={usersIcon} alt="Footfall" className="card-icon" />
          </div>
          <span>Footfall</span>
        </div>
        <div className="card-controls">
          <div className="time-badge">Last 7 Day</div>
        </div>
      </div>
      <div className="footfall-content">
        <ReactECharts option={option} style={{ height: '280px', width: '100%' }} />
      </div>
    </div>
  );
};

export default FootfallCard;
