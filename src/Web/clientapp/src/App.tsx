import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState<string | null>(null);
  const [weather, setWeather] = useState<WeatherForecast[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        setError(null);
      } else {
        setError('Login failed');
      }
    } catch (err) {
      setError('Error connecting to API');
    }
  };

  const fetchWeather = async () => {
    if (!token) {
      setError('Please login first');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/weatherforecast', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setWeather(data);
        setError(null);
      } else {
        setError('Failed to fetch weather data');
      }
    } catch (err) {
      setError('Error connecting to API');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>ASP.NET + React + JWT Demo</h1>
        
        {!token ? (
          <form onSubmit={handleLogin} style={{ marginTop: '20px' }}>
            <div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ margin: '5px', padding: '8px' }}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ margin: '5px', padding: '8px' }}
              />
            </div>
            <button type="submit" style={{ margin: '10px', padding: '8px 20px' }}>
              Login
            </button>
          </form>
        ) : (
          <div style={{ marginTop: '20px' }}>
            <p style={{ color: '#4CAF50' }}>✓ Logged in successfully!</p>
            <button 
              onClick={fetchWeather}
              style={{ margin: '10px', padding: '8px 20px' }}
            >
              Fetch Weather Data
            </button>
            <button 
              onClick={() => { setToken(null); setWeather(null); }}
              style={{ margin: '10px', padding: '8px 20px', backgroundColor: '#f44336' }}
            >
              Logout
            </button>
          </div>
        )}

        {error && <p style={{ color: '#f44336' }}>{error}</p>}

        {weather && (
          <div style={{ marginTop: '20px', textAlign: 'left' }}>
            <h2>Weather Forecast:</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {weather.map((w, index) => (
                <li key={index} style={{ margin: '10px 0', padding: '10px', background: '#282c34', borderRadius: '5px' }}>
                  <strong>{w.date}</strong>: {w.summary}, {w.temperatureC}°C ({w.temperatureF}°F)
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
