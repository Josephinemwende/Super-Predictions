import { 
  Home, TrendingUp, BarChart3, Trophy, Calendar, 
  Star, Settings, ChevronLeft, ChevronRight, Flame 
} from "lucide-react";
import { cn } from "@/lib/utils";
interface SidebarProps {
  isOpen: boolean;
  isCollapsed: boolean;
  onCollapse: () => void;
  onClose: () => void;
}

const menuItems = [
  { icon: Home, label: "Home", href: "#", active: true },
  { icon: TrendingUp, label: "Betting Tips", href: "#tips", badge: "5" },
  { icon: Flame, label: "Hot Tips", href: "#hot", badge: "NEW" },
  { icon: BarChart3, label: "Analysis", href: "#analysis" },
  { icon: Trophy, label: "Leaderboard", href: "#leaderboard" },
  { icon: Calendar, label: "Schedule", href: "#schedule" },
  { icon: Star, label: "Favorites", href: "#favorites" },
];

const premiumLeagues = [
  { name: "UEFA Champions League", flag: "🇪🇺" },
  { name: "UEFA Europa League", flag: "🇪🇺" },
  { name: "Premier League", flag:"🇬🇧" },
  { name: "La Liga", flag: "🇪🇸" },
  { name: "Bundesliga", flag: "🇩🇪" },
  { name: "Serie A", flag:"🇮🇹" },
  { name: "Ligue 1", flag: "🇫🇷" },
];

const SideBarNavigation = ({ isOpen, isCollapsed, onCollapse, onClose }: SidebarProps) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed left-0 top-16 h-[calc(100vh-4rem)] bg-[#010D26] text-gray-400 z-40 duration-300 mt-5 ms-10 rounded-sm",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          isCollapsed ? "w-20" : "w-64", "lg:z-40"
        )}
      >
        {/* Collapse button - desktop only */}
        <button
          onClick={onCollapse}
          className="absolute -right-3 top-5 hidden lg:flex h-6 w-6 rounded-full bg-[#D99E30] items-center justify-center"
        >
          {isCollapsed ? <ChevronRight size={14} className="text-[#010D26]"/> : <ChevronLeft size={14} className="text-[#010D26]"/>}
        </button>

        <div className="flex flex-col h-full overflow-y-auto py-4">
          {/* Main Menu */}
          <nav className="px-3 space-y-1 text-sm">
            <h3 className="px-3 mb-3 text-sm font-semibold text-[#D99E30] uppercase tracking-wider">
              Quick Links
            </h3>
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                  item.active 
                    ? "bg-primary/10 text-primary" 
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <item.icon size={20} className={cn(item.active && "text-primary")} />
                {!isCollapsed && (
                  <>
                    <span className="font-medium">{item.label}</span>
                    {item.badge && (
                      <span className={cn(
                        "ml-auto text-xs px-2 py-0.5 bg-white rounded-full font-semibold",
                        item.badge === "NEW" 
                          ? "bg-[#D99E30] text-[#010D26]" 
                          : "bg-gray-400 text-white"
                      )}>
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </a>
            ))}
          </nav>

          {/* Premium Leagues */}
          {!isCollapsed && (
            <div className="mt-4 px-3 text-sm">
              <h3 className="px-3 mb-3 text-sm font-semibold text-[#D99E30] uppercase tracking-wider">
                Premium Leagues
              </h3>
              <div className="space-y-1">
                {premiumLeagues.map((league) => (
                  <a
                    key={league.name}
                    href="#"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
                  >
                    <span className="text-lg">{league.flag}</span>
                    <span className="text-sm">{league.name}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Settings */}
          <div className="mt-4 px-3 text-sm">
            <h3 className="px-3 mb-3 text-sm font-semibold text-[#D99E30] uppercase tracking-wider">
                Account
              </h3>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
            >
              <Settings size={20} />
              {!isCollapsed && <span className="font-medium">Settings</span>}
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBarNavigation;
