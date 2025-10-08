import React, { useState } from "react";


const PlayersTable = () => {
    const [data, setData] = useState([
        { name: "Knightlight", turneyWins: 98, team: "Invictus" },
        { name: "Xeno", turneyWins: 76, team: "Elysium" },
        { name: "Zaka", turneyWins: 56, team: "Praxis" },
        { name: "FallenArt", turneyWins: 98, team: "Ariandel" },
        { name: "Bubbo)", turneyWins: 76, team: "Ariandel" },
        { name: "Ivan", turneyWins: 56, team: "Praxis" },
        { name: "Pedro", turneyWins: 98, team: "Invictus" },
        { name: "Dan", turneyWins: 76, team: "Invictus" },
        { name: "Kekso", turneyWins: 56, team: "Invictus" },
        { name: "Momo", turneyWins: 98, team: "Cynic" },
        { name: "Note", turneyWins: 76, team: "Cynic" },
        { name: "Marco", turneyWins: 56, team: "Elysium" },
        { name: "Laser", turneyWins: 98, team: "Praxis" },
        { name: "Hein", turneyWins: 76, team: "Elysium" },
        { name: "Mystic", turneyWins: 56, team: "Praxis" },
    ]);

    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

    const sortData = (key) => {
        let direction = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        }
        setSortConfig({ key, direction });

        const sortedData = [...data].sort((a, b) => {
            if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
            if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
            return 0;
        });
        setData(sortedData);
    };

    return (
        <section>
            <div className="score-table" id="score">
                <table>
                    <thead>
                        <tr>
                            <th onClick={() => sortData("name")}>NAME</th>
                            <th onClick={() => sortData("turneyWins")}>TURNEY WINS</th>
                            <th onClick={() => sortData("team")}>TEAM</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td> {row.name}</td>
                                <td> {row.turneyWins}</td>
                                <td> {row.team}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};


export default PlayersTable;