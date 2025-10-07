import { Crown, Star, Users, ShieldCheck, CircleCheckBig, Clock, TrendingUp, Eye, Target, CircleDot, Flame, UserPlus,ChartSpline, Check, Zap, Calendar } from "lucide-react";
import '../App.css';
import Navigation from '../Components/Navigation';
import SideBarNavigation from '../Components/SideBarNavigation';
import Footer from '../Components/Footer';
import Blog from '../Components/Blog';

function HomePage() {
  const bettingTip = {
    title: "THE SUPERPREDICTIONS DAILY PICK",
    confidence: "High Confidence",
    competition: "Premier League",
    kickoff: "18:30 EAT",
    teamA: {
      name: "Man Utd",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
    },
    teamB: {
      name: "Liverpool",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    },
    bet: "Match Result - Liverpool Win (1X2)",
    odds: "3.20",
    confidencePercent: 88,
    performance: "+1.45 Units",
  };
  const bettingInsights = [
    {
      id: 1,
      title: "Over 2.5 Goals Has Landed in 7 of Man City's Last 8 Games",
      link: "/insights/man-city-goals-trend"
    },
    {
      id: 2,
      title: "Sharp Money Coming in on Brentford to Cover +1.5 vs Arsenal",
      link: "/insights/brentford-sharp-money"
    },
    {
      id: 3,
      title: "Public Heavily Backing Real Madrid, But Line Hasn't Moved — Trap Game?",
      link: "/insights/real-madrid-trap-game"
    }
  ];
  const trendingBets = [
    {
      id: 1,
      text: '✅ 72% of bets backing Over 2.5 Goals in Manchester City vs Fulham match.',
      link: '/bets/man-city-vs-fulham',
    },
    {
      id: 2,
      text: '🔥 Sharp money moving on Brentford +1.5 vs Arsenal, odds dropping from 2.10 to 1.85.',
      link: '/bets/brentford-vs-arsenal',
    },
    {
      id: 3,
      text: '📉 Line drop: Real Madrid to win vs Sevilla now at 1.60, down from 1.85 due to heavy public backing.',
      link: '/bets/real-madrid-vs-sevilla',
    },
  ];
  const tips = [
    {
      id: 1,
      league: 'Premier League',
      teamA: {
        name: "Arsenal FC",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
      },
      teamB: {
        name: "Liverpool FC",
        logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
      },
      time: '17:30',
      date: 'Today',
      tip: 'Both Teams to Score',
      odds: '1.75',
      confidence: 92,
      stake: '4/10',
      tipster: 'ProAnalyst',
      status: 'live',
      views: 2340,
      category: 'Premium'
    },
    {
      id: 2,
      league: 'La Liga',
      teamA: {
        name: "Real Madrid",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
      },
      teamB: {
        name: "FC Barcelona",
        logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
      },
      time: '20:00',
      date: 'Tomorrow',
      tip: 'Over 2.5 Goals',
      odds: '1.92',
      confidence: 88,
      stake: '3/10',
      tipster: 'FootyExpert',
      status: 'upcoming',
      views: 1890,
      category: 'Free'
    },
    {
      id: 3,
      league: 'Bundesliga',
      teamA: {
        name: "Bayern Munich",
        logo: "https://upload.wikimedia.org/wikipedia/en/1/1f/FC_Bayern_München_logo_%282017%29.svg",
      },
      teamB: {
        name: "Dortmund",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg",
      },
      time: '18:30',
      date: 'Today',
      tip: 'Bayern Munich Win',
      odds: '2.10',
      confidence: 85,
      stake: '2/10',
      tipster: 'BundesligaPro',
      status: 'live',
      views: 3120,
      category: 'Premium'
    },
    {
      id: 4,
      league: 'Serie A',
      teamA: {
        name: "Juventus",
        logo: "https://upload.wikimedia.org/wikipedia/en/3/3e/Juventus_Logo_2017.svg",
      },
      teamB: {
        name: "AC Milan",
        logo: "https://upload.wikimedia.org/wikipedia/en/d/d0/AC_Milan_logo.svg",
      },
      time: '14:00',
      date: 'Sunday',
      tip: 'Under 3.5 Goals',
      odds: '1.68',
      confidence: 79,
      stake: '2/10',
      tipster: 'ItalyBets',
      status: 'upcoming',
      views: 1560,
      category: 'Free'
    },
    {
      id: 5,
      league: 'Kenya Premier League',
      teamA: {
        name: "Gor Mahia",
        logo: "https://i0.wp.com/footballkenya.org/wp-content/uploads/2022/11/Gor-Mahia.png?resize=400%2C409&ssl=1",
      },
      teamB: {
        name: "Bidco United",
        logo: "https://static.flashscore.com/res/image/data/WtVky9GG-traGRhJJ.png",
      },
      time: '18:00',
      date: 'Sunday',
      tip: 'Under 3.5 Goals',
      odds: '1.68',
      confidence: 79,
      stake: '2/10',
      tipster: 'KenyaBets',
      status: 'upcoming',
      views: 1560,
      category: 'Free'
    },
    {
      id: 6,
      league: 'Kenya Premier League',
      teamA: {
        name: "Tusker FC",
        logo: "https://upload.wikimedia.org/wikipedia/en/3/3e/Juventus_Logo_2017.svg",
      },
      teamB: {
        name: "Ulinzi Stars FC",
        logo: "https://upload.wikimedia.org/wikipedia/en/d/d0/AC_Milan_logo.svg",
      },
      time: '14:00',
      date: 'Sunday',
      tip: 'Under 3.5 Goals',
      odds: '1.68',
      confidence: 79,
      stake: '2/10',
      tipster: 'ItalyBets',
      status: 'upcoming',
      views: 1560,
      category: 'Free'
    },
  ];
  const teamForms = {
    manUtd: ["W", "W", "L", "D", "W"],
    liverpool: ["W", "D", "W", "W", "L"],
  };
  const renderForm = (form) => (
    <div className="flex space-x-1">
      {form.map((result, idx) => (
        <span
          key={idx}
          className={`px-2 py-1 rounded text-xs font-bold ${
            result === "W"
              ? "bg-green-600"
              : result === "D"
              ? "bg-yellow-500"
              : "bg-red-600"
          }`}
        >
          {result}
        </span>
      ))}
    </div>
  );
  const tipsters = [
    { name: "ProAnalyst", winRate: 94.2, profit: "+24.8u", streak: 5, badge: "🥇" },
    { name: "FootyExpert", winRate: 91.7, profit: "+21.3u", streak: 3, badge: "🥈" },
    { name: "BundesligaPro", winRate: 89.4, profit: "+19.2u", streak: 2, badge: "🥉" },
    { name: "ItalyBets", winRate: 87.8, profit: "+17.6u", streak: 4 },
    { name: "LaLigaLegend", winRate: 86.1, profit: "+16.4u", streak: 1 },
  ];
  const plans = [
    {
      name: 'Basic',
      price: 19,
      period: 'month',
      description: 'Perfect for casual bettors',
      features: [
        'Daily betting tips',
        'Basic analysis',
        'Email notifications',
        'Mobile access',
        'Community chat'
      ],
      popular: false,
      icon: Target
    },
    {
      name: 'Pro',
      price: 39,
      period: 'month',
      description: 'Most popular for serious bettors',
      features: [
        'Everything in Basic',
        'Premium tips from top analysts',
        'In-depth match analysis',
        'Live odds comparison',
        'Priority customer support',
        'Advanced statistics',
        'Custom bet tracking'
      ],
      popular: true,
      icon: Star
    },
    {
      name: 'Elite',
      price: 79,
      period: 'month',
      description: 'For professional bettors',
      features: [
        'Everything in Pro',
        'VIP tipster access',
        'One-on-one consultations',
        'Custom betting strategies',
        'Early access to tips',
        'Exclusive telegram group',
        'Monthly performance review'
      ],
      popular: false,
      icon: Crown
    }
  ];

  const stats = [
    { label: 'Average ROI', value: '28.7%', icon: TrendingUp },
    { label: 'Win Rate', value: '87.3%', icon: Target },
    { label: 'Monthly Profit', value: '+24.5u', icon: Zap },
    { label: 'Active Members', value: '12,847', icon: Star }
  ];

  return (
    <>
      <Navigation />
      <div className="flex min-h-screen bg-gray-100">
        <SideBarNavigation />
        <main className="flex-1 ml-5 mt-2 me-8">
          <section className="relative flex flex-col md:flex-row mb-8 rounded-lg shadow-lg overflow-hidden min-h-[600px]">
            
            {/* Background Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0"
            >
              <source src="/Fans-cheering.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#010D26] opacity-70 z-10"></div>

            {/* Left Hero Content (Bottom-Left) */}
            <div className="relative z-10 flex-1 flex flex-col justify-end p-6 md:p-10">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-snug">
                Picks. Odds. <span className="text-[#D99E30]">Profits.</span>
              </h1>
              <p className="text-sm md:text-base text-gray-400 mb-8 leading-relaxed max-w-lg">
                Expert insights, real stats, and bold predictions to help you bet smarter and win bigger.
              </p>
              <p>Join 5000+ bettors who trust our AI powered predictions</p>
              <div className="flex items-center space-x-4">
                <a href="#" className="p-3 text-gray-400 border border-solid border-[#D99E30] hover:bg-[#D99E30] rounded-xl hover:text-white transition">View Today Top Tip</a>
                <a href="#" className="flex items-center space-x-2 p-3  bg-[#D99E30] text-white rounded-xl hover:opacity-90 transition"><Crown className="text-white w-4 h-4" /><span>Premium</span></a>
              </div>
            </div>

            {/* Right Sidebar Content */}
            <div className="relative z-10 flex-1 grid grid-cols-2 gap-4 p-6 text-white">

              {/* Latest Betting Insights */}

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow">
                <h2 className="text-lg font-semibold mb-4 text-[#D99E30]">Latest Betting Insights</h2>

                {bettingInsights.map((item, index) => (
                  <div
                    key={item.id}
                    className={`pb-4 ${index !== bettingInsights.length - 1 ? "mb-4 border-b border-gray-300/30" : ""}`}
                  >
                    <p className="text-sm mb-2">{item.title}</p>
                    <a
                      href={item.link}
                      className="flex items-center text-xs font-semibold text-white hover:underline"
                    >
                      read more <span className="ml-1">➔</span>
                    </a>
                  </div>
                ))}
              </div>

              {/* Trending Bets */}
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow">
                <h2 className="text-lg font-semibold mb-4 text-[#D99E30]">Trending Bets Today</h2>

                {trendingBets.map(({ id, text, link }, index) => (
                  <div
                    key={id}
                    className={`mb-4 pb-4 border-b border-gray-300/30 ${index === trendingBets.length - 1 ? 'border-0' : ''}`}
                  >
                    <p className="text-sm mb-2">{text}</p>
                    <a href={link} className="flex items-center text-xs font-semibold hover:underline">
                      read more <span className="ml-1">➔</span>
                    </a>
                  </div>
                ))}
              </div>


              {/* Betting Tip of Today */}
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow col-span-2">
                <h2 className="text-lg font-semibold mb-4 text-[#D99E30]">Betting Tip of Today</h2>

                {/* Betting Tip Card */}
                <div className="bg-white shadow-md rounded-xl p-4">

                  {/* Title */}
                  <div className="text-xs font-semibold text-gray-600 mb-1">
                    {bettingTip.title} - <span className="text-green-600">{bettingTip.confidence}</span>
                  </div>

                  {/* Flex Row: Left (Teams/Info/CTA) + Right (Odds/Performance) */}
                  <div className="flex space-x-5 items-center">

                    {/* LEFT COLUMN */}
                    <div className="flex flex-col items-center justify-between mb-3">

                      {/* Teams */}
                      <div className="flex space-x-2 items-center">
                        {/* Team A */}
                        <div className="flex items-center space-x-2">
                          <img
                            src={bettingTip.teamA.logo}
                            alt={bettingTip.teamA.name}
                            className="w-10 h-10 border border-[#D99E30] rounded-full p-1 shadow-lg"
                          />
                          <span className="text-sm font-semibold text-gray-800">{bettingTip.teamA.name}</span>
                        </div>

                        <span className="text-xs text-gray-500">vs</span>

                        {/* Team B */}
                        <div className="flex items-center space-x-2">
                          <img
                            src={bettingTip.teamB.logo}
                            alt={bettingTip.teamB.name}
                            className="w-10 h-10 border border-[#D99E30] rounded-full p-1 shadow-lg"
                          />
                          <span className="text-sm font-semibold text-gray-800">{bettingTip.teamB.name}</span>
                        </div>
                      </div>

                      {/* Match Info */}
                      <div className="text-xs text-center text-gray-500 mb-2">
                        <p>{bettingTip.competition}</p>
                        <p>Kick-off: {bettingTip.kickoff}</p>
                      </div>

                      {/* CTA Button */}
                      <div className="flex justify-center">
                        <button className="bg-[#00D084] hover:bg-[#00b673] text-white text-xs font-medium px-3 py-1.5 rounded transition duration-200">
                          Get Instant Analysis
                        </button>
                      </div>
                    </div>
                    {/* END LEFT COLUMN */}

                    {/* RIGHT COLUMN */}
                    <div>
                      {/* Odds & Confidence */}
                      <div className="text-center mb-3">
                        <div className="text-xs text-gray-600">{bettingTip.bet}</div>
                        <div className="text-2xl font-bold text-yellow-500">{bettingTip.odds}</div>
                        <div className="mt-2">
                          <div className="text-xs text-green-600 mb-1">
                            {bettingTip.confidencePercent}% Confidence
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                            <div
                              className="bg-green-600 h-2 rounded-full"
                              style={{ width: `${bettingTip.confidencePercent}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      {/* Past Performance */}
                      <div className="text-xs text-center text-gray-500 mb-3">
                        Past 7-Day Performance:{" "}
                        <span className="text-green-600 font-semibold">{bettingTip.performance}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="tips" className="py-5 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-[#010D26] dark:text-white mb-3">
                  Today's Expert Tips
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Bet like a Pro with Today&apos;s Expert Picks
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                <button className="px-6 py-2 rounded-full font-medium bg-[#D99E30] text-white shadow hover:shadow-md transition">
                  All Tips
                </button>
                <button className="px-6 py-2 rounded-full font-medium bg-[#010D26] text-gray-300 hover:bg-[#D99E30] hover:text-[#010D26] transition">
                  Premium
                </button>
                <button className="px-6 py-2 rounded-full font-medium bg-[#010D26] text-gray-300 hover:bg-[#D99E30] hover:text-[#010D26] transition">
                  Free
                </button>
                <button className="px-6 py-2 rounded-full font-medium bg-[#010D26] text-gray-300 hover:bg-[#D99E30] hover:text-[#010D26] transition">
                  Live
                </button>
              </div>

              {/* Tips Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tips.map((tip) => (
                  <div
                    key={tip.id}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-transform duration-300 group hover:-translate-y-1"
                  >
                    {/* Header */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold ${
                              tip.category === "Premium"
                                ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900"
                                : "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200"
                            }`}
                          >
                            {tip.category}
                          </span>
                          <span
                            className={`w-2 h-2 rounded-full ${
                              tip.status === "live"
                                ? "bg-red-500 animate-pulse"
                                : "bg-gray-400"
                            }`}
                          ></span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {tip.status === "live" ? "LIVE" : tip.date}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                          <Eye className="h-4 w-4 text-gray-400" />
                          <span>{tip.views.toLocaleString()}</span>
                        </div>
                      </div>

                      {/* League */}
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        {tip.league}
                      </div>

                      {/* Match */}
                      <div className="flex items-center justify-between mb-6">
                        {/* Team A */}
                        <div className="flex flex-col items-center">
                          <img
                            src={tip.teamA.logo}
                            alt={tip.teamA.name}
                            className="w-12 h-12 border-2 border-[#D99E30] rounded-full p-1 shadow"
                          />
                          <span className="mt-2 text-sm font-semibold text-[#010D26] dark:text-white">
                            {tip.teamA.name}
                          </span>
                        </div>

                        {/* VS */}
                        <div className="text-center">
                          <div className="text-lg font-bold text-[#010D26] dark:text-white">
                            VS
                          </div>
                          <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                            <Clock className="h-3 w-3 mr-1" />
                            {tip.time}
                          </div>
                        </div>

                        {/* Team B */}
                        <div className="flex flex-col items-center">
                          <img
                            src={tip.teamB.logo}
                            alt={tip.teamB.name}
                            className="w-12 h-12 border-2 border-[#D99E30] rounded-full p-1 shadow"
                          />
                          <span className="mt-2 text-sm font-semibold text-[#010D26] dark:text-white">
                            {tip.teamB.name}
                          </span>
                        </div>
                      </div>

                      {/* Recommended Bet */}
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-4 mb-5">
                        <p className="text-sm text-[#D99E30] dark:text-gray-400 mb-1">
                          Recommended Bet
                        </p>
                        <p className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                          {tip.tip}
                        </p>
                        <div className="flex items-center justify-center space-x-6 text-sm">
                          <div className="flex items-center space-x-1">
                            <span className="text-gray-600 dark:text-gray-400">Odds:</span>
                            <span className="font-bold text-[#D99E30] dark:text-green-400">
                              {tip.odds}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Target className="h-4 w-4 text-gray-500" />
                            <span className="font-medium text-[#010D26]">Stake: {tip.stake}</span>
                          </div>
                        </div>
                      </div>

                      {/* Confidence & Tipster */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="h-4 w-4 text-green-500" />
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                              {tip.confidence}%
                            </span>
                          </div>
                          <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${tip.confidence}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>by {tip.tipster}</span>
                        </div>
                      </div>

                      {/* Action Button */}
                      <button className="w-full bg-[#010D26] text-white font-medium py-3 rounded-lg shadow transition-transform duration-300 group-hover:scale-105">
                        View Full Analysis
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="bg-[#D99E30] text-white font-medium py-3 px-8 rounded-lg shadow transition">
                  Load More Tips
                </button>
              </div>
            </div>
          </section>
          <section className="grid grid-cols-12 gap-6 p-6 bg-white text-white mt-5">
            {/* Left Section - In Depth Match Analysis */}
            <div className="col-span-12 lg:col-span-8">
              <div className="px-4 py-2 bg-[#D99E30] text-white font-semibold text-sm tracking-wide w-fit rounded-full shadow-md mb-4">
                Featured Analytic
              </div>
              <div className=" rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-[#D99E30] font-bold">In-Depth Match Analysis</h2>
                <p className="text-gray-600 mb-6">
                  Professional insights backed by comprehensive data analysis and expert commentary
                </p>

                {/* Match Card */}
                <div className="bg-[#010D26] rounded-xl p-6 mb-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold">Manchester United vs Liverpool</h3>
                      <p className="text-sm text-gray-400">Premier League • Old Trafford • 15:00 EAT</p>
                    </div>
                    <span className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
                      Confidence 94%
                    </span>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-4 gap-4 my-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold">2.8</p>
                      <p className="text-gray-200 text-sm">Avg Goals</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">73%</p>
                      <p className="text-gray-200 text-sm">BTTS Rate</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">1.85</p>
                      <p className="text-gray-200 text-sm">Best Odds</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">3-1-1</p>
                      <p className="text-gray-200 text-sm">H2H</p>
                    </div>
                  </div>

                  {/* Expert Commentary */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Expert Commentary</h4>
                    <p className="text-white text-sm">
                      This Manchester Derby presents excellent value for the "Both Teams to Score" market.
                      United's attacking form at home has been exceptional, while Liverpool's recent defensive
                      struggles suggest vulnerabilities.
                    </p>
                    <p className="text-[#D99E30] font-bold text-sm mt-2">
                      Key factors: United's 87% BTTS rate at Old Trafford this season, Liverpool's improved attacking output under new management, 
                      and the historical high-scoring nature of this fixture.
                    </p>
                  </div>
                  {/* Predicted Scoreline */}
                  <div className="bg-gradient-to-r from-green-600 to-blue-600 text-center rounded-lg py-3 my-6">
                    <p className="text-sm text-gray-100">Predicted Scoreline</p>
                    <p className="text-2xl font-bold">2 - 1</p>
                  </div>
                  {/* Form Tracker */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Man Utd Recent Form:</p>
                      {renderForm(teamForms.manUtd)}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Liverpool Recent Form:</p>
                      {renderForm(teamForms.liverpool)}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {/* Primary Button - Place Bet */}
                  <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl shadow-md hover:from-green-600 hover:to-green-700 transition-all">
                    <CircleDot className="w-5 h-5" />
                    Place this bet
                  </button>

                  {/* Secondary Button - Join Discussion */}
                  <button className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-gray-200 font-medium rounded-xl hover:bg-gray-600 transition-all">
                    <Users className="w-5 h-5" />
                    Join Discussion
                  </button>

                  {/* Premium Button - Get Premium Analysis */}
                  <button className="flex items-center gap-2 px-6 py-3 bg-[#D99E30] text-black font-bold rounded-full shadow-lg hover:bg-[#c48b28] hover:shadow-xl transition-all">
                    <Crown className="w-5 h-5" />
                    Get Premium Analysis
                  </button>
                </div>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-[#010D26] text-gray-300 font-bold rounded-full shadow-lg hover:bg-[#c48b28] hover:shadow-xl transition-all mx-auto mt-3">
                <ChartSpline className="w-5 h-5" />
                View More Analytics
              </button>
            </div>

            {/* Right Section - Tipsters Leaderboard */}
            <div className="rounded-2xl p-6 shadow-lg col-span-12 lg:col-span-4">
              <h2 className="text-xl font-bold text-[#D99E30] mb-4">
                Top Performing Tipsters
              </h2>
              <div className="space-y-4">
                {tipsters.map((t, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center bg-gray-900 p-4 rounded-lg"
                  >
                    <div>
                      <p className="font-semibold flex items-center gap-2">
                        {t.badge && <span>{t.badge}</span>} {idx + 1}. {t.name}
                      </p>
                      <p className="text-xs text-gray-400">Win Rate: {t.winRate}%</p>
                      {t.streak > 1 && (
                        <p className="text-xs text-green-400 flex items-center gap-1">
                          <Flame className="h-3 w-3 text-orange-500" /> {t.streak} win streak
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col items-center space-y-3">
                      <span className="text-green-400 font-bold">{t.profit}</span>
                      <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-xs px-2 py-1 rounded-md">
                        <UserPlus className="h-3 w-3 mr-1" /> Follow
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section id="premium" className="py-16 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-[#010D26] dark:text-white mb-3">
                  Unlock Expert Insights
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Smart Plans, Smarter Bets
                </p>
              </div>

              {/* Performance Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-[#010D26] dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl text-center border border-gray-200 dark:border-gray-60 space-y-2">
                    <stat.icon className="h-8 w-8 text-[#D99E30] mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-500 dark:text-white">{stat.value}</p>
                    <p className="text-sm text-white dark:text-gray-300">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Pricing Plans */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {plans.map((plan, index) => (
                  <div key={index} className={`relative bg-white dark:bg-gray-700 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl ${
                    plan.popular 
                      ? 'border-[#D99E30] shadow-lg transform scale-105' 
                      : 'border-gray-300 dark:border-gray-600 hover:border-[#010D26]'
                  }`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-[#D99E30] text-white px-4 py-2 rounded-full text-sm font-bold">
                          MOST POPULAR
                        </div>
                      </div>
                    )}
                    
                    <div className="p-8">
                      <div className="text-center mb-8">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                          plan.popular 
                            ? 'bg-[#D99E30]' 
                            : 'bg-[#010D26]'
                        }`}>
                          <plan.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{plan.description}</p>
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-4xl font-bold text-gray-900 dark:text-white">${plan.price}</span>
                          <span className="text-gray-600 dark:text-gray-300">/{plan.period}</span>
                        </div>
                      </div>
                      
                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <Check className="h-5 w-5 text[#010D26] flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <button className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
                        plan.popular
                          ? 'bg-[#D99E30] text-white transform hover:scale-105'
                          : 'bg-gray-100 dark:bg-gray-600 hover:bg-[#010D26] dark:hover:bg-gray-500 text-gray-900 dark:text-white'
                      }`}>
                        Get Started
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {[
                  "Exclusive VIP tips from top tipsters",
                  "Real-time notifications & alerts",
                  "Advanced statistical analysis",
                  "Money-back guarantee on losses",
                  "Priority customer support",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-[#010D26] p-4 rounded-2xl border border-[#D99E30]"
                  >
                    <CircleCheckBig className="text-[#D99E30] w-6 h-6 shrink-0 mt-1" />
                    <p className="text-zinc-200 font-medium leading-snug">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <Blog/>
          <Footer />
        </main>
      </div>
    </>
  );
}

export default HomePage;
