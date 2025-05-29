# Soccer Matches Display

A web application that displays upcoming Premier League matches using the API-Football service.

## Features

- Displays upcoming Premier League matches
- Shows match details including teams, date/time, and venue
- Responsive design with modern UI
- Real-time data from API-Football

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- API-Football API key from RapidAPI

## Setup

1. Clone the repository
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```
4. Create a `.env` file in the root directory and add your RapidAPI key:
   ```
   RAPIDAPI_KEY=your_api_key_here
   PORT=3001
   ```

## Running the Application

1. Start the backend server:
   ```bash
   npm run dev
   ```
2. In a new terminal, start the frontend:
   ```bash
   cd frontend
   npm start
   ```
3. Open your browser and navigate to `http://localhost:3000`

## API Information

This application uses the API-Football service from RapidAPI:
- API URL: https://api-football-v1.p.rapidapi.com/v3/fixtures
- Documentation: https://rapidapi.com/api-sports/api/api-football/

## Technologies Used

- Frontend: React.js
- Backend: Node.js with Express
- API: API-Football (RapidAPI)
- Styling: CSS3 