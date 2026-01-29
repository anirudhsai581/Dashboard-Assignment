
import ReactECharts from 'echarts-for-react';
import flashIcon from '../assets/flash.png';
import dotsIcon from '../assets/dots.png';
import './EnergyConsumptionCard.css';

const EnergyConsumptionCard = () => {
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
      show: false
    },
    series: [
      {
        data: [250, 380, 150, 500, 440, 200, 300],
        type: 'bar',
        barWidth: '42%',
        itemStyle: {
          color: '#3FFDE0',
          borderRadius: [8, 8, 0, 0]
        },
        emphasis: {
          itemStyle: {
            color: '#3FFDE0'
          }
        }
      }
    ]
  };

  return (
    <div className="card energy-card">
      <div className="card-header">
        <div className="card-title">
          <div className="icon-wrapper">
            <img src={flashIcon} alt="Energy" className="card-icon" />
          </div>
          <span>Energy Consumption</span>
        </div>
        <div className="card-controls">
          <div className="time-badge">Last 7 Day</div>
          <img src={dotsIcon} alt="Menu" className="dots-menu" />
        </div>
      </div>
      <div className="energy-content">
        <ReactECharts option={option} style={{ height: '280px', width: '100%' }} />
      </div>
    </div>
  );
};

export default EnergyConsumptionCard;
