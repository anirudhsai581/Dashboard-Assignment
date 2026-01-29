import './App.css';
import Sidebar from './components/Sidebar';
import LightsCard from './components/LightsCard';
import WaterConsumptionCard from './components/WaterConsumptionCard';
import CarbonIntensityCard from './components/CarbonIntensityCard';
import EnergyConsumptionCard from './components/EnergyConsumptionCard';
import FootfallCard from './components/FootfallCard';
import logoImage from './assets/ds-logo.svg';

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src={logoImage} alt="DigiSpace" className="logo" />
        <img 
          src="https://i.pravatar.cc/150?img=33" 
          alt="User" 
          className="user-avatar" 
        />
      </header>
      <div className="app-body">
        <Sidebar />
        <div className="main-content">
          <div className="dashboard-grid">
            <LightsCard />
            <WaterConsumptionCard />
            <CarbonIntensityCard />
            <EnergyConsumptionCard />
            <FootfallCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
