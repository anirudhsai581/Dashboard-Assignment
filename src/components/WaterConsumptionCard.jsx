
import dropIcon from '../assets/drop.png';
import './WaterConsumptionCard.css';
import humid from '../assets/Humid.png';
const WaterConsumptionCard = () => {
  return (
    <div className="card water-card">
      <div className="card-header">
        <div className="card-title">
          <div className="icon-wrapper">
            <img src={dropIcon} alt="Water" className="card-icon" />
          </div>
          <span>Water Consumption</span>
        </div>
        <div className="card-controls">
          <div className="time-badge">Yesterday</div>
        </div>
      </div>
      <div className="water-content">
        <div className="water-icon-display">
          <img src={humid} alt="Humid" className="water-drop-icon" />
        </div>
        <div className="water-value-container">
          <div className="water-value">
            8.42m<sup>3</sup>
          </div>
        </div>
        <div className="water-comparison">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="arrow-down">
            <path d="M8 12L8 4M8 12L4 8M8 12L12 8" stroke="#3FFDE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="comparison-text">1.2m<sup>3</sup> less water used compare to last tuesday</span>
        </div>
      </div>
    </div>
  );
};

export default WaterConsumptionCard;
