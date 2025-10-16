// Leaderboard.jsx
import { useEffect, useState } from 'react';
import './styleLeaderboard.css'
import { bool } from 'three/tsl';

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}

async function displayTable() {
    try {
        const leaderboardData = await fetchData('https://host.neatqueue.com/api/leaderboard/1410340318250926182/1410340513873395804');
        return leaderboardData;
    } catch (err) {
        console.error("Failed to display table:", err);
        throw err;
    }
}

function LeaderboardComponent() {
    const [data, setData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const playersPerPage = 10;
    const totalPages = 10;

    useEffect(() => {
        async function loadData() {
            try {
                const result = await displayTable();
                setData(result);
            } catch (error) {
                console.error('Failed to load leaderboard:', error);
            }
        }
        loadData();
    }, []);

    if (!data || !data.alltime) {
        return (
            <section id='leaderboard' className='table-leaderboard'>
                <div>
                    <p>Loading...</p>
                </div>
            </section>
        );
    }

    // Calculate pagination
    const totalPlayers = data.alltime.length;
    const startIndex = (currentPage - 1) * playersPerPage;
    const endIndex = startIndex + playersPerPage;
    const currentPlayers = data.alltime.slice(startIndex, endIndex);
    console.log(totalPages, totalPlayers, currentPlayers);

    // Pagination handlers
    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const isFirstPage = currentPage === 1;

    return (
        <section id='leaderboard' className={`table-leaderboard ${isFirstPage?'leaderboard-first-rank leaderboard-second-rank leaderboard-third-rank':''} `} >
            <div>
                <table className='table-leaderboard-glow'>
                    <thead className='head-leaderboard-glow'>
                        <tr>
                            <th>Rank</th>
                            <th>Player</th>
                            <th>MMR</th>
                            <th>Wins</th>
                            <th>Losses</th>
                            <th>Win Rate</th>
                            <th>Streak</th>
                        </tr>
                    </thead>
                    <tbody >
                        {currentPlayers.map((player) => (
                            <tr key={player.id} className='table-tr-hover'>
                                <td>{player.data.current_rank}</td>
                                <td>{player.name}</td>
                                <td>{Math.round(player.data.mmr)}</td>
                                <td>{player.data.wins}</td>
                                <td>{player.data.losses}</td>
                                <td>{(player.data.winrate * 100).toFixed(1)}%</td>
                                <td>{player.data.streak}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination Controls */}
                <div className="pagination">
                    <button 
                        onClick={goToPreviousPage} 
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    
                    {/* Page numbers */}
                    {[...Array(totalPages)].map((_, index) => {
                        const pageNumber = index + 1;
                        return (
                            <button
                                key={pageNumber}
                                onClick={() => goToPage(pageNumber)}
                                className={currentPage === pageNumber ? 'active' : ''}
                            >
                                {pageNumber}
                            </button>
                        );
                    })}
                    
                    <button 
                        onClick={goToNextPage} 
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>

                <p className="page-info">
                    Page {currentPage} of {totalPages}
                </p>
            </div>
        </section>
    );
}

export default LeaderboardComponent;