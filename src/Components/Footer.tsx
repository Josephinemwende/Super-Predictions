import { Mail, Phone, MapPin } from "lucide-react";
import SoccerKickingIcon from '../assets/soccer-kicking-icon.png';

const Footer = () => {
  return (
    <footer className="bg-[#010D26] border-t border-gray-400">
        <div className="container mx-auto px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {/* Company Info */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                        <img src={SoccerKickingIcon} alt="Soccer Logo" className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">SuperPredictions</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                    Professional betting tips and analysis from expert tipsters. 
                    Your trusted partner for successful sports betting.
                    </p>
                    <div className="flex space-x-3">
                    
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h4 className="text-lg font-bold text-[#D99E30]">Quick Links</h4>
                    <ul className="space-y-3">
                    <li><a href="#home" className="text-gray-400 hover:text-[#D99E30] transition-colors">Home</a></li>
                    <li><a href="#tips" className="text-gray-400 hover:text-[#D99E30] transition-colors">Today's Tips</a></li>
                    <li><a href="#analysis" className="text-gray-400 hover:text-[#D99E30] transition-colors">Analysis</a></li>
                    <li><a href="#premium" className="text-gray-400 hover:text-[#D99E30] transition-colors">Premium</a></li>
                    <li><a href="#leaderboard" className="text-gray-400 hover:text-[#D99E30] transition-colors">Tipster Rankings</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div className="space-y-4">
                    <h4 className="text-lg font-bold text-[#D99E30]">Support</h4>
                    <ul className="space-y-3">
                    <li><a href="#" className="text-gray-400 hover:text-[#D99E30] transition-colors">Help Center</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#D99E30] transition-colors">FAQ</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#D99E30] transition-colors">Contact Us</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#D99E30] transition-colors">Terms & Conditions</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#D99E30] transition-colors">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="space-y-4">
                    <h4 className="text-lg font-bold text-[#D99E30]">Stay Updated</h4>
                    <p className="text-gray-400 leading-relaxed">
                    Get the latest tips and exclusive offers delivered to your inbox.
                    </p>
                    <div className="flex space-x-2">
                    <input
                        placeholder="Enter your email" 
                        className="flex-1  border border-gray-400"
                    />
                    <button className="bg-[#D99E30] py-3 px-2 rounded-full">
                        Subscribe
                    </button>
                    </div>
                    
                    <div className="space-y-2 pt-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Mail className="text-[#D99E30]  w-4 h-4" />
                        <span>support@superpredictions.com</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Phone className="text-[#D99E30]  w-4 h-4" />
                        <span>+254 (700) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <MapPin className="text-[#D99E30] w-4 h-4" />
                        <span>Nairobi, Kenya</span>
                    </div>
                    </div>
                </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-400 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-gray-400 text-sm">
                    © 2024 BetTips Pro. All rights reserved.
                    </p>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-400">
                    <span>🔒 SSL Secured</span>
                    <span>📊 Licensed Operator</span>
                    <span>⚡ 24/7 Support</span>
                    </div>
                </div>
                
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-xs text-white text-center">
                    <strong className="text-[#D99E30]">Disclaimer:</strong> Gambling can be addictive. Please bet responsibly. 
                    This website is for entertainment purposes only. Past performance does not guarantee future results. 
                    Only bet what you can afford to lose. If you need help, visit BeGambleAware.org
                    </p>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;