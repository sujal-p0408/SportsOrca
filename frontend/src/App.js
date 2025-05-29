import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/matches');
        if (!response.ok) {
          throw new Error('Failed to fetch matches');
        }
        const data = await response.json();
        setMatches(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) return <div className="loading">Loading matches...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Upcoming Premier League Matches</h1>
      </header>
      <main className="matches-container">
        {matches.map((match, index) => (
          <div key={index} className="match-card">
            <div className="teams">
              <span className="team">{match.homeTeam}</span>
              <span className="vs">vs</span>
              <span className="team">{match.awayTeam}</span>
            </div>
            <div className="match-details">
              <p className="date">
                {new Date(match.date).toLocaleString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
              <p className="venue">{match.venue}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
