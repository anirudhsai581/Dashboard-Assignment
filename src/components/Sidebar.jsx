import homeIcon from '../assets/home.svg';
import pieIcon from '../assets/pie.svg';
import tilesIcon from '../assets/tiles.svg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="nav-item active">
        <img src={homeIcon} alt="Home" className="nav-icon" />
        <span className="nav-label">Home</span>
      </div>
      <div className="nav-item">
        <img src={pieIcon} alt="Analyse" className="nav-icon" />
        <span className="nav-label">Analyse</span>
      </div>
      <div className="nav-item">
        <img src={tilesIcon} alt="Control" className="nav-icon" />
        <span className="nav-label">Control</span>
      </div>
    </div>
  );
};

export default Sidebar;
