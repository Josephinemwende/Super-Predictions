import '../App.css';
import Navigation from '../Components/Navigation';
import SideBarNavigation from '../Components/SideBarNavigation';
import BelarusFlag from '../assets/icons8-belarus-48.png';
import ScotlandFlag from '../assets/icons8-scotland-48.png';

function HomePage() {
    const data = [
      {
        home: 'Belarus',
        away: 'Scotland',
        homeFlag: BelarusFlag,
        awayFlag: ScotlandFlag,
        percentages: [15, 33, 52],
        prediction: 2,
        correctScore: '0 - 1',
        avgGoals: 1.63,
        odds: 1.92,
      },
      {
        home: 'Switzerland',
        away: 'Slovenia',
        percentages: [90, 10, 0],
        prediction: 1,
        correctScore: '2 - 0',
        avgGoals: 2.26,
        odds: 1.11,
      },
      {
        home: 'Kosovo',
        away: 'Sweden',
        percentages: [13, 28, 59],
        prediction: 2,
        correctScore: '0 - 1',
        avgGoals: 1.85,
        odds: 1.69,
      },
      {
        home: 'Gibraltar',
        away: 'Faroe Islands',
        percentages: [2, 11, 87],
        prediction: 2,
        correctScore: '0 - 3',
        avgGoals: 2.74,
        odds: 1.15,
      },
      {
        home: 'Croatia',
        away: 'Montenegro',
        percentages: [88, 9, 3],
        prediction: 1,
        correctScore: '3 - 0',
        avgGoals: 3.34,
        odds: 1.14,
      },
      {
        home: 'Israel',
        away: 'Italy',
        percentages: [29, 32, 39],
        prediction: 2,
        correctScore: '0 - 1',
        avgGoals: 1.84,
        odds: 2.56,
      },
    ];
    const matches = [
      {
      id: 1,
      teamA: "Nottingham Forest",
      teamB: "Arsenal",
      date: "Sat, Sep 13, 2025",
      time: "04:30 AM PDT",
      },
      {
        id: 2,
        teamA: "Brighton",
        teamB: "Bournemouth",
        date: "Sat, Sep 13, 2025",
        time: "07:00 AM PDT",
      },
      {
        id: 3,
        teamA: "Sunderland",
        teamB: "Crystal Palace",
        date: "Sat, Sep 13, 2025",
        time: "07:00 AM PDT",
      },
      {
        id: 4,
        teamA: "Aston Villa",
        teamB: "Everton",
        date: "Sat, Sep 13, 2025",
        time: "07:00 AM PDT",
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
          <section className="bg-gray-100">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-semibold text-left text-[#031326] mb-5">
                Featured Matches
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {matches.map((match) => (
                  <div
                    key={match.id}
                    className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="text-xl font-bold text-gray-800 text-center mb-2">
                      {match.teamA} <span className="text-gray-500">vs</span> {match.teamB}
                    </div>
                    <div className="text-center text-sm text-gray-600">
                      <p>{match.date}</p>
                      <p>{match.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="py-10">
            <h2 className="text-3xl font-semibold mb-4 text-left text-[#031326]">
              Mathematical Football Predictions, Stats & Livescores
            </h2>
            <table className="min-w-full border border-gray-200 text-sm text-left">
              <thead className="bg-[#D99E30] text-gray-700">
                <tr>
                  <th className="p-2">Match</th>
                  <th className="p-2 text-center">1</th>
                  <th className="p-2 text-center">X</th>
                  <th className="p-2 text-center">2</th>
                  <th className="p-2 text-center">Prediction</th>
                  <th className="p-2 text-center">Correct score</th>
                  <th className="p-2 text-center">Avg. goals</th>
                  <th className="p-2 text-center">B.O</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {data.map((match, idx) => (
                  <tr key={idx} className="border-t border-gray-200 hover:bg-gray-50">
                    <td className="p-2 font-semibold">
                      <div className="flex items-center gap-2 text-red-600">
                        <img src={match.homeFlag} alt={match.home} className="w-5 h-5"/>
                        <span>{match.home}</span>
                      </div>
                      <div className="flex items-center gap-2 text-red-600">
                        <img src={match.awayFlag} alt={match.away} className="w-5 h-5"/>
                        <span>{match.away}</span>
                      </div>
                      <div className="text-xs text-gray-500">E-WC <span className="ml-2">8/9/2025 12:01</span></div>
                    </td>
                    {match.percentages.map((val, i) => (
                      <td key={i} className="p-2 text-center">{val}</td>
                    ))}
                    <td className="p-2 text-center">
                      <span className="bg-[#031326] text-white px-2 py-1 rounded-full text-xs font-bold">
                        {match.prediction}
                      </span>
                    </td>
                    <td className="p-2 text-center text-sm text-gray-700">{match.correctScore}</td>
                    <td className="p-2 text-center text-red-500">{match.avgGoals.toFixed(2)}</td>
                    <td className="p-2 text-center font-medium">{match.odds.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </>
  );
}

export default HomePage;
