import sampleCSV from './TeamsDOCS.csv?raw'
import {React, useState, useEffect} from 'react';
import './styleCard.css'
// Simple CSV parser function
function parseCSV(csvText) {
  const lines = csvText.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  
  const data = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map(v => v.trim());
    const obj = {};
    headers.forEach((header, index) => {
      // Convert wins to number
      obj[header] = header === 'wins' ? parseInt(values[index]) : values[index];
    });
    data.push(obj);
  }
  
  return data;
}

// Card Component - now accepts props
function Card({ rank, name, wins, description, tag }) {
  return (
    <div className="card">
      <span className="badge">TOP {rank}</span>
      <h2 className="title">{name}</h2>
      <p className="description">{description}</p>
      <div className="footer">
        <div className="tags">
          <span className="tag tag-live">{tag}</span>
          <span className="tag">🏆 {wins}x</span>
          <button className="btn">About</button>
        </div>
      </div>
    </div>
  );
}

// Main App Component
export default function TeamCardsApp() {
  const [teams, setTeams] = useState(() => {
    const parsed = parseCSV(sampleCSV);
    return parsed.sort((a, b) => b.wins - a.wins);
  });
  const [error, setError] = useState(null);

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const csvText = e.target.result;
          const parsed = parseCSV(csvText);
          const sortedTeams = parsed.sort((a, b) => b.wins - a.wins);
          setTeams(sortedTeams);
          setError(null);
        } catch (err) {
          setError('Failed to parse CSV file: ' + err.message);
        }
      };
      reader.onerror = () => {
        setError('Failed to read file');
      };
      reader.readAsText(file);
    }
  };

  // Function to update CSV text area
  const handleCSVTextChange = (event) => {
    const csvText = event.target.value;
    try {
      const parsed = parseCSV(csvText);
      const sortedTeams = parsed.sort((a, b) => b.wins - a.wins);
      setTeams(sortedTeams);
      setError(null);
    } catch (err) {
      setError('Invalid CSV format');
    }
  };

  if (error) {
    return (
      <div className="app-container">
        <div className="error">{error}</div>
        <style>{styles}</style>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="header">
        <h1>Team Rankings</h1>
        <div className="upload-section">
          <label htmlFor="csv-upload" className="upload-btn">
            Upload CSV
          </label>
          <input
            id="csv-upload"
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />
        </div>
      </div>
      
      <div className="card-container">
        {teams.map((team, index) => (
          <Card
            key={team.name}
            rank={index + 1}
            name={team.name}
            description={team.description}
            tag={team.tag}
            wins={team.wins}
          />
        ))}
      </div>
    </div>
  );
}