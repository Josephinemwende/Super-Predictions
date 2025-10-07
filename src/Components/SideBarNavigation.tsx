import '../App.css';
import ArrowDownwards from '../assets/Arrow1.png';

function SideBarNavigation() {
    return (
        <aside className="bg-[#010D26] text-gray-400 w-40 min-h-screen space-y-2 mt-2 ms-35 rounded-sm">
            {/* MY LEAGUES */}
            <div>
                <h1 className="text-white text-sm font-semibold uppercase tracking-wide bg-[#D99E30] shadow-lg py-2 px-3 rounded-sm">My Leagues</h1>
                <p className="flex items-center justify-between text-sm hover:text-[#D99E30] hover:font-bold px-3">
                    Kenya
                    <img src={ArrowDownwards} alt="arrow down" className="w-6 h-6 ml-2" />
                </p>
            </div>

            {/* FOOTBALL */}
            <div className="space-y-2">
                <h1 className="text-white text-sm font-semibold uppercase tracking-wide bg-[#D99E30] py-2 px-3 rounded-sm">Football</h1>
                {[
                    'Predictions for TODAY',
                    'LIVE predictions',
                    'Predictions for TOMORROW',
                    'Predictions for the WEEKEND',
                    'Predictions from YESTERDAY',
                    'ALL predictions',
                ].map((item, index) => (
                    <div key={index}>
                        <div className="flex items-center justify-between text-sm group hover:text-[#D99E30] hover:font-bold px-3">
                            <div className="flex-1"> {item}
                                <hr className="border-gray-700 mt-2 w-full" />
                            </div>
                            <img src={ArrowDownwards} alt="arrow down" className="w-6 h-6 ml-2 flex-shrink-0"/>
                        </div>
                    </div>
                ))}
                {[
                    'Expert Picks',
                    'Values',
                    'Favorites',
                    'Lists',
                    'Trends',
                    'Top trends',
                ].map((item, index) => (
                    <div key={index}>
                        <div className="flex items-center justify-between text-sm group hover:text-[#D99E30] hover:font-bold px-3">
                            <div className="flex-1">{item}
                                <hr className="border-gray-700 mt-1 w-full" />
                            </div>
                            <img src={ArrowDownwards} alt="arrow down" className="w-6 h-6 ml-2 flex-shrink-0"/>
                        </div>
                    </div>
                ))}
            </div>

            {/* POPULAR LEAGUES */}
            <div className="space-y-2">
                <h1 className="text-white text-sm font-semibold uppercase tracking-wide bg-[#D99E30] py-2 px-3 rounded-sm">Popular Leagues</h1>
                {[
                    'UEFA Champions League',
                    'UEFA Europa League',
                    'UEFA Europe Conference League',
                    'Premier League',
                    'LaLiga',
                    'Bundesliga',
                    'Serie A',
                    'Ligue 1',
                    'Eredivisie',
                    'Liga Portugal',
                    'Brasileiro Serie A',
                    'Scottish Premiership',
                    'Saudi Pro League',
                ].map((league, index) => (
                    <div key={index}>
                        <div className="flex items-center justify-between text-sm group hover:text-[#D99E30] hover:font-bold px-3">
                            <div className="flex-1">{league}
                                <hr className="border-gray-700 mt-1 w-full" />
                            </div>
                            <img src={ArrowDownwards} alt="arrow down" className="w-6 h-6 ml-2 flex-shrink-0"/>
                        </div>
                    </div>
                ))}
            </div>

            {/* COUNTRIES */}
            <div className="space-y-2">
                <h1 className="text-white text-sm font-semibold uppercase tracking-wide bg-[#D99E30] py-2 px-3 rounded-sm">Countries</h1>
                {[
                    'Albania','Algeria','Andorra','Angola','Argentina','Armenia','Aruba','Australia','Austria','Azerbaijan',
                    'Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize', 'Benin','Bermuda','Bolivia','Bosnia','Botswana',
                    'Brazil','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Canada','Chile','China','Colombia','Costa Rica',
                    'Croatia','Cuba','Curacao','Cyprus','Czech Republic','DR Congo','Denmark','Djibouti','Dominican Republic','Ecuador',
                    'Egypt','El Salvador','England','Estonia','Ethopia','Faroe Islands', 'Fiji','Finland','France','Gabon','Gambia','Georgia',
                    'Germany','Ghana','Gilbraltar','Greece','Guatemala','Guinea','Haiti','Honduras','Hong Kong','Hungary','Iceland',
                    'India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Ivory Coast','Jamaica','Japan','Kazakhstan','Kenya',
                    'Kosovo','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Libya','Lithuania','Luxembourg','Macau','Malawi',
                    'Malaysia','Mali','Malta','Mauritania','Mauritius','Mexico','Moldova','Mongolia','Montenegro','Morocco','Mozambique',
                    'Myanmar','Nepal','Netherlands','New Zealand','Nicaragua','Nigeria','North Macedonia','Northern Ireland','Norway','Oman',
                    'Palestine','Palestine','Panama','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Republic of the Congo',
                    'Romania','Russia','Rwanda','San Marino','Saudi Arabia','Scotland','Senegal','Serbia','Sierra Leone','Singapore','Slovakia', 
                    'Slovenia','Somalia','South Africa','South Korea','Spain','Sudan','Suriname','Sweden','Switzerland','Syria','Taiwan','Tajikistan',
                    'Tanzania','Thailand','Togo','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','UAE','Uganda','Ukraine','United Kingdom', 
                    'United States','Uruguay','Uzbekistan','Venezuela','Vietnam','Wales','Zambia','Zimbabwe',
                ].map((country, index) => (
                    <div key={index}>
                        <div className="flex items-center justify-between text-sm group hover:text-[#D99E30] hover:font-bold px-3">
                            <div className="flex-1">{country}
                                <hr className="border-gray-700 mt-1 w-full" />
                            </div>
                            <img src={ArrowDownwards} alt="arrow down"className="w-6 h-6 ml-2 flex-shrink-0"/>
                        </div>
                    </div>
                ))}
            </div>

            {/* INTERNATIONAL */}
            <div className="space-y-2">
                <h1 className="text-white text-sm font-semibold uppercase tracking-wide bg-[#D99E30] py-2 px-3 rounded-sm">International</h1>
                {['Africa','Asia','Australia & Oceania','Europe','North & Central America','South America','World',
                ].map((international, index) => (
                    <div key={index}>
                        <div className="flex items-center justify-between text-sm group hover:text-[#D99E30] hover:font-bold px-3">
                            <div className="flex-1">{international}
                                <hr className="border-gray-700 mt-1 w-full" />
                            </div>
                            <img src={ArrowDownwards} alt="arrow down" className="w-6 h-6 ml-2 flex-shrink-0"/>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
}

export default SideBarNavigation;
