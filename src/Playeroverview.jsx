
const PlayerOverview = () => {
  // Sample player data - you can replace this with your own data
  const [playerData, setPlayerData] = useState({
    name: "Knightlight",
    realName: "Jakub Kuzmar",
    age: 37,
    country: "🇷🇺",
    team: "Invictus",
    avatar: "https://via.placeholder.com/120x150/2a2a2a/ffffff?text=Player",
    rating: {
      current: 1.36,
      t_side: 1.43,
      ct_side: 1.29
    },
    stats: {
      roundSwing: { value: 3.17, trend: "up" },
      fpr: { value: 0.67, label: "FPR" },
      kast: { value: 77.0, unit: "%" },
      multikill: { value: 26.0, unit: "%" },
      adr: { value: 97.8 },
      kpr: { value: 0.94, label: "KPR" }
    },
    mapsPlayed: 349
  });

  const getRatingColor = (rating) => {
    if (rating >= 1.3) return "#4ade80"; // green-400
    if (rating >= 1.1) return "#facc15"; // yellow-400
    if (rating >= 1.0) return "#fb923c"; // orange-400
    return "#ef4444"; // red-400
  };

  const StatCard = ({ title, value, unit = "", trend, color = "#6b7280" }) => (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-400 uppercase tracking-wider">{title}</span>
        {trend && (
          <span className={`text-xs px-1 ${trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
            {trend === 'up' ? '↗' : '↘'}
          </span>
        )}
      </div>
      <div className="text-2xl font-bold" style={{ color }}>
        {typeof value === 'number' ? value.toFixed(2) : value}
        <span className="text-sm ml-1">{unit}</span>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <span className="text-2xl">{playerData.country}</span>
          <div className="bg-white p-2 rounded">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">🐎</span>
            </div>
          </div>
        </div>
        <div className="text-right text-sm text-gray-400">
          <div>{playerData.mapsPlayed} maps</div>
          <div className="flex items-center gap-2">
            <span>Show player average</span>
            <input type="checkbox" className="w-4 h-4" />
            <span>Eco-adjust stats</span>
            <input type="checkbox" className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Player Info */}
        <div className="lg:col-span-1">
          <div className="relative">
            <img
              src={playerData.avatar}
              alt={playerData.name}
              className="w-full h-64 object-cover rounded-lg bg-gray-800"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-80 px-3 py-2 rounded">
              <div className="text-2xl font-bold">{playerData.name}</div>
              <div className="text-sm text-gray-300">
                {playerData.realName} • {playerData.age} years
              </div>
            </div>
          </div>
          <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
            Player profile
          </button>
        </div>

        {/* Stats */}
        <div className="lg:col-span-2">
          {/* Rating Section */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <div className="text-yellow-400 text-lg font-semibold">1.43</div>
              <div className="text-xs text-gray-400">T RATING</div>
            </div>
            <div className="text-center">
              <div className="relative inline-flex items-center justify-center">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="36"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-gray-700"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="36"
                    stroke={getRatingColor(playerData.rating.current)}
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${(playerData.rating.current / 2) * 226} 226`}
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold" style={{ color: getRatingColor(playerData.rating.current) }}>
                      {playerData.rating.current}
                    </div>
                    <div className="text-xs text-gray-400">RATING 2.0</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-blue-400 text-lg font-semibold">1.29</div>
              <div className="text-xs text-gray-400">CT RATING</div>
            </div>
          </div>

          {/* Performance Stats */}
          <div className="grid grid-cols-3 gap-4">
            <StatCard
              title="ROUND SWING"
              value={`+${playerData.stats.roundSwing.value}`}
              unit="%"
              trend={playerData.stats.roundSwing.trend}
              color="#60a5fa"
            />
            <StatCard
              title="FPR"
              value={playerData.stats.fpr.value}
              color="#facc15"
            />
            <StatCard
              title="KAST"
              value={playerData.stats.kast.value}
              unit="%"
              color="#facc15"
            />
            <StatCard
              title="MULTI-KILL"
              value={playerData.stats.multikill.value}
              unit="%"
              color="#4ade80"
            />
            <StatCard
              title="ADR"
              value={playerData.stats.adr.value}
              color="#4ade80"
            />
            <StatCard
              title="KPR"
              value={playerData.stats.kpr.value}
              color="#4ade80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerOverview;