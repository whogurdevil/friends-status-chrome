// src/App.jsx
import React, { useState } from 'react';
import './App.css';

function App() {
  const [status, setStatus] = useState('available');

  const startMeet = () => {
    // Implement logic to start Google Meet with the selected status
    chrome.runtime.sendMessage({ action: 'start-meet', status });
  };

  return (
    <div>
      <div id="status-container">
        <label htmlFor="status">Choose your status:</label>
        <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="available">Available</option>
          <option value="idle">Idle</option>
        </select>
      </div>
      <button onClick={startMeet}>Start Google Meet</button>
    </div>
  );
}

export default App;
