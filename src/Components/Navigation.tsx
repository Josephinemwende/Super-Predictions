import '../App.css';
import SoccerKickingIcon from '../assets/soccer-kicking-icon.png';
{/*import HomeIcon from '../assets/home-icon.png';*/}
import SearchIcon from '../assets/Search-Icon.png';
import SettingsIcon from '../assets/Settings-Icon.png';
{/*import MoreIcon from '../assets/More-Icon.png';*/}

const mainLinks = [
  { label: 'Home', href: '/', showLabel: true },
  { label: 'Predictions', href: '#' },
  { label: 'Value Picks', href: '#' },
  { label: 'Standings', href: '#' },
  { label: 'Stats', href: '#' },
  { label: 'News', href: '#' },
];

const utilityIcons = [
  { icon: SearchIcon, label: 'Search' },
  { icon: SettingsIcon, label: 'Settings' },
];

function Navigation() {
  return (
    <nav className="bg-[#010D26] text-gray-400 border-b-2 border-[#D99E30] px-10 shadow-sm">
      <ul className="flex items-center gap-6 pt-5 pb-2 whitespace-nowrap text-sm font-medium">
        {/* Logo */}
        <li className="flex items-center gap-2 pr-6">
          <span className="text-white text-lg font-bold">SuperPredictions</span>
          <img src={SoccerKickingIcon} alt="Soccer Logo" className="w-6 h-6" />
        </li>

        {/* Navigation Links */}
        {mainLinks.map((item, idx) => (
          <li key={idx}>
            <a href={item.href} className="hover:text-white transition-colors duration-200">
              {item.label}
            </a>
          </li>
        ))}

        <div className="flex items-center gap-5 ml-auto">
          {/* Utility Icons */}
          {utilityIcons.map((item, idx) => (
            <li key={idx} className="flex items-center gap-1 hover:text-white cursor-pointer transition">
              <img src={item.icon} alt={item.label} className="w-5 h-5" />
              <span className="text-xs hidden sm:inline">{item.label}</span>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
}

export default Navigation;
