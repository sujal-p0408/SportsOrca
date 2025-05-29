require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// API endpoint to fetch upcoming matches
app.get('/api/matches', async (req, res) => {
  try {
    const response = await axios.get('https://v3.football.api-sports.io/fixtures', {
      params: {
        date: '2025-05-28' // Demo date for free plan
      },
      headers: {
        'x-rapidapi-key': '2a01f84095afebfa1654d60c84e712e8',
        'x-rapidapi-host': 'v3.football.api-sports.io'
      }
    });

    // Log the raw response for debugging
    console.log('API Response:', JSON.stringify(response.data, null, 2));

    if (response.data.response && response.data.response.length > 0) {
      const matches = response.data.response.map(match => ({
        homeTeam: match.teams.home.name,
        awayTeam: match.teams.away.name,
        date: match.fixture.date,
        venue: match.fixture.venue.name
      }));
      res.json(matches);
    } else {
      res.json([]); // Return empty array if no matches found
    }
  } catch (error) {
    console.error('Error fetching matches:', error.message);
    if (error.response) {
      console.error('Error response status:', error.response.status);
      console.error('Error response data:', error.response.data);
    }
    res.status(500).json({ error: 'Failed to fetch matches' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 