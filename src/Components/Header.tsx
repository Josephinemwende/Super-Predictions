import '../App.css';
import { useState } from 'react';
import SoccerKickingIcon from '../assets/soccer-kicking-icon.png';
import { Bell, User, Search, X} from 'lucide-react';


{/*interface HeaderProps {
  onMenuToggle: () => void;
  isSidebarOpen: boolean;
} */}

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#010D26] text-gray-400 backdrop-blur-xl border-b border-border z-50">
      <div className="flex items-center justify-between px-4 lg:px-6 h-16">
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
              <img src={SoccerKickingIcon} alt="Soccer Logo" className="w-6 h-6" />
            </div>
            <span className="font-display font-bold text-xl hidden sm:block">
              <span className="text-white">Super</span>
              <span className="text-[#D99E30]">Predictions</span>
            </span>
          </a>
        </div> 
        <nav className="hidden lg:flex items-center gap-8 text-sm">
          <a href="#" className="text-muted hover:text-[#D99E30]">Predictions</a>
          <a href="#" className="text-muted hover:text-[#D99E30]">Live Betting Tips</a>
          <a href="#" className="text-muted hover:text-[#D99E30]">Analysis</a>
          <a href="#" className="text-muted hover:text-[#D99E30]">Pricing & Plans</a>
        </nav>
        <div className="flex items-center gap-5">
          {searchOpen ? (
            <div className="relative animate-fade-in">
              <input
                type="search"
                placeholder="Search team, league..."
                className="w-48 md:w-64 focus:ring-2 focus:ring-[#D99E30] focus:outline-none rounded-xs p-2 text-sm" autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-[#D99E30]"
              >
                <X size={18} />
              </button>
            </div>

          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              className="text-muted hover:text-[#D99E30]"
            >
              <Search size={20} />
            </button>
          )}

          <button className="hidden md:flex text-muted hover:text-[#D99E30]">
            <Bell size={20} />
          </button>

          <button className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-[#D99E30] text-[#D99E30] font-medium transition-all duration-200 hover:bg-[#D99E30] hover:text-[#010D26] hover:shadow-md">
            <User size={18} className="text-[#D99E30] hover:text-[#010D26]" />
              Log in
          </button>

          <button className="inline-flex items-center px-6 py-3 rounded-2xl bg-[#D99E30] text-[#010D26] font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;



