import '../App.css';
import Navigation from '../Components/Navigation';
import SideBarNavigation from '../Components/SideBarNavigation';

function HomePage() {
    const matches = [
        {
        home: "Wealdstone",
        away: "Southend",
        date: "2/9/2025 21:45",
        odds: { home: 19, draw: 24, away: 57 },
        betimate: 2,
        score: "1 - 2",
        goals: 2.55,
        bo: 1.75,
        },
        {
        home: "Braintree Town",
        away: "Tamworth",
        date: "2/9/2025 21:45",
        odds: { home: 51, draw: 31, away: 18 },
        betimate: 1,
        score: "1 - 0",
        goals: 1.78,
        bo: 1.96,
        },
        {
        home: "Morecambe",
        away: "Forest Green",
        date: "2/9/2025 21:45",
        odds: { home: 15, draw: 24, away: 61 },
        betimate: 2,
        score: "0 - 1",
        goals: 2.36,
        bo: 1.64,
        },
        {
        home: "Solihull Moors",
        away: "Yeovil",
        date: "2/9/2025 21:45",
        odds: { home: 39, draw: 24, away: 37 },
        betimate: 1,
        score: "2 - 1",
        goals: 3.0,
        bo: 2.56,
        },
        {
        home: "Eastleigh",
        away: "Scunthorpe",
        date: "2/9/2025 21:45",
        odds: { home: 20, draw: 20, away: 60 },
        betimate: 2,
        score: "1 - 2",
        goals: 3.57,
        bo: 1.67,
        },
        {
        home: "York",
        away: "Rochdale",
        date: "2/9/2025 21:45",
        odds: { home: 44, draw: 27, away: 29 },
        betimate: 1,
        score: "2 - 1",
        goals: 2.53,
        bo: 2.27,
        },
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
                News. Numbers. <span className="text-[#D99E30]">Next Big Win</span>
              </h1>
              <p className="text-sm md:text-base text-white mb-8 leading-relaxed max-w-lg">
                Get the latest sports stories, live scores, game-changing stats and bold predictions — 
                everything you need to follow the action and spot the next big victory.
              </p>
            </div>

            {/* Right Sidebar Content */}
            <div className="relative z-10 flex-1 grid grid-cols-2 gap-4 p-6 text-white">

              {/* News Highlights */}
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow">
                <h2 className="text-lg font-semibold mb-4 text-[#D99E30]">News Highlights</h2>

                <div className="mb-4 pb-4 border-b border-gray-300/30">
                  <p className="text-sm mb-2">Cricket Kenya Launches T20 League</p>
                  <button className="flex items-center text-xs text-white font-semibold hover:underline">
                    read more <span className="ml-1">➔</span>
                  </button>
                </div>

                <div className="mb-4 pb-4 border-b border-gray-300/30">
                  <p className="text-sm mb-2">
                    It’s an active transfer window: Newcastle are reportedly open to letting striker 
                    Alexander Isak move to Liverpool — even if no replacement is lined up yet.
                  </p>
                  <button className="flex items-center text-xs font-semibold hover:underline">
                    read more <span className="ml-1">➔</span>
                  </button>
                </div>

                <div>
                  <p className="text-sm mb-2">Equity Bank Hawks Lose KBF League Crown</p>
                  <button className="flex items-center text-xs font-semibold hover:underline">
                    read more <span className="ml-1">➔</span>
                  </button>
                </div>
              </div>

              {/* Sport Highlights */}
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow">
                <h2 className="text-lg font-semibold mb-4 text-[#D99E30]">Top Trending</h2>

                <div className="mb-4 pb-4 border-b border-gray-300/30">
                  <p className="text-sm mb-2">
                    Kenya's national football team secured a spot in the CHAN 2024 quarter-finals.
                  </p>
                  <button className="flex items-center text-xs font-semibold hover:underline">
                    read more <span className="ml-1">➔</span>
                  </button>
                </div>

                <div className="mb-4 pb-4 border-b border-gray-300/30">
                  <p className="text-sm mb-2">
                    Liverpool extended their perfect start to the Premier League season with a narrow 1–0 win 
                    over Arsenal at Anfield — sealed by a stunning free kick from Szoboszlai.
                  </p>
                  <button className="flex items-center text-xs font-semibold hover:underline">
                    read more <span className="ml-1">➔</span>
                  </button>
                </div>

                <div>
                  <p className="text-sm mb-2">
                    KCB Women claimed the women's title with a straight-sets win over Kenya Pipeline.
                  </p>
                  <button className="flex items-center text-xs font-semibold hover:underline">
                    read more <span className="ml-1">➔</span>
                  </button>
                </div>
              </div>

              {/* Game of the Week */}
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow col-span-2">
                <h2 className="text-lg font-semibold mb-4 text-[#D99E30]">Game of the Week</h2>
                <p className="text-sm mb-2">Southampton vs Man Utd</p>
                <p className="text-sm">Fulham vs West Ham</p>
              </div>
            </div>
          </section>
          {/*<section className="bg-white rounded-lg shadow p-4">
            <h1 className="text-lg font-bold mb-4">Football Stats / Predictions</h1>
            <div className="overflow-x-auto">
              <table className="w-full border text-sm">
                <thead>
                  <tr className="bg-slate-800 text-white text-center">
                    <th className="p-2 text-left">England National League (6)</th>
                    <th className="p-2">1</th>
                    <th className="p-2">x</th>
                    <th className="p-2">2</th>
                    <th className="p-2">Betimate</th>
                    <th className="p-2">Correct score</th>
                    <th className="p-2">Avg. goals</th>
                    <th className="p-2">B.O</th>
                    <th className="p-2">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {matches.map((match, idx) => (
                    <tr key={idx} className="border-b text-center">
                      <td className="text-left p-2">
                        <div className="font-semibold">{match.home}</div>
                        <div className="text-red-600">{match.away}</div>
                        <div className="text-xs text-gray-500">{match.date}</div>
                      </td>
                      <td>{match.odds.home}</td>
                      <td>{match.odds.draw}</td>
                      <td>{match.odds.away}</td>
                      <td className="text-cyan-600 font-bold">{match.betimate}</td>
                      <td>{match.score}</td>
                      <td className="text-red-600">{match.goals}</td>
                      <td>{match.bo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>*/}
        </main>
      </div>
    </>
  );
}

export default HomePage;
