import { useState, useEffect } from 'react';
import sampleCSV from './csvTeams.csv?raw';

function EarningsTable() {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    // Parse CSV manually, handling quoted fields
    const lines = sampleCSV.trim().split('\n');
    
    if (lines.length === 0) return;

    const parseCSVLine = (line) => {
      const result = [];
      let current = '';
      let inQuotes = false;
      
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          result.push(current.trim());
          current = '';
        } else {
          current += char;
        }
      }
      result.push(current.trim());
      return result;
    };

    // First line is headers
    const headerLine = parseCSVLine(lines[0]);
    setHeaders(headerLine);

    // Rest are data rows
    const dataRows = lines.slice(1).map(line => parseCSVLine(line));
    setData(dataRows);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, i) => (
            <th key={i}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EarningsTable;