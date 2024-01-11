// src/App.jsx
import React, { useState } from 'react';
import './App.css';

function App() {
  const [status, setStatus] = useState('available');
  const [temp, setTemp] = useState();



  const getTitle = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const activeTab = tabs[0];
      const pageTitle = activeTab.url;

      // Do something with the title, like updating your extension UI
      console.log('Active Tab Title:', pageTitle);

      // Now you can use the title as needed, for example, alerting it
      alert(pageTitle);
    });
  };

  function handleAvailable(){
    console.log("avail ")
  }

  const startMeet = () => {
    // Open a new tab with the Google Meet URL
    chrome.tabs.create({ url: 'https://meet.new' }, function (tab) {
      // Wait for the tab to be fully loaded
      chrome.tabs.onUpdated.addListener(function listener(tabId, changeInfo) {
        if (tabId === tab.id && changeInfo.status === 'complete') {
          // Unsubscribe the listener to avoid multiple alerts
          // chrome.tabs.onUpdated.removeListener(listener);

          // Alert the URL of the newly created Google Meet tab
          alert(tab.url);
          setTemp(tab.url);
        }
      });
    });
  };


  return (
    <div>
      <div id="status-container">
        <label htmlFor="status">Choose your status:</label>
        <button onClick={getTitle}>Get Active Tab Title</button>
        <button onClick={handleAvailable}>Get Active Tab Title</button>
        <button
        style={{backgroundColor:'red'}}
        >{temp}</button>
      </div>
      <button onClick={startMeet}>Start Google Meet</button>
    </div>
  );
}

export default App;
