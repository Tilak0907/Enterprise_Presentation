import React from 'react';

function Components() {
  return (
    <div className="main-content">
      <h2 style={{ fontSize: '3rem', textAlign: 'left' }}>Advantages of Single Page Applications (SPAs)</h2>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '2rem', textAlign: 'left' }}>1. Faster User Experience</h3>
        <ul style={{ fontSize: '1.3rem', textAlign: 'left', marginLeft: '20px' }}>
          <li>Only data is exchanged with the server, not entire HTML pages.</li>
          <li>Reduces load time after the first request.</li>
        </ul>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '2rem', textAlign: 'left' }}>2. Smooth Navigation</h3>
        <ul style={{ fontSize: '1.3rem', textAlign: 'left', marginLeft: '20px' }}>
          <li>No page reloads or flickers.</li>
          <li>Feels more like a desktop application.</li>
        </ul>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '2rem', textAlign: 'left' }}>3. Efficient Development</h3>
        <ul style={{ fontSize: '1.3rem', textAlign: 'left', marginLeft: '20px' }}>
          <li>Frontend and backend can be developed separately.</li>
          <li>Reusable UI components using frameworks like React, Angular, or Vue.</li>
        </ul>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '2rem', textAlign: 'left' }}>4. Better Caching Capabilities</h3>
        <ul style={{ fontSize: '1.3rem', textAlign: 'left', marginLeft: '20px' }}>
          <li>SPAs can cache local data efficiently.</li>
          <li>Useful for offline usage and reducing server load.</li>
        </ul>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '2rem', textAlign: 'left' }}>5. Reduced Server Load</h3>
        <p style={{ fontSize: '1.3rem', textAlign: 'left' }}>
          Since only one HTML page is loaded, the server handles fewer requests.
        </p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '2rem', textAlign: 'left' }}>6. Debugging with Chrome</h3>
        <p style={{ fontSize: '1.3rem', textAlign: 'left' }}>
          Debugging allows for detecting and removing web application bugs, errors, and security vulnerabilities that slow performance. Chrome’s developer tools simplify SPA debugging. Developers can inspect JavaScript code directly in the browser without going through large codebases.
        </p>
        <p style={{ fontSize: '1.3rem', textAlign: 'left' }}>
          SPAs are built on JavaScript frameworks like AngularJS and React, which integrate well with browser developer tools. These tools help developers understand data requests, caching behavior, and page rendering, and they can monitor elements and network activity effectively.
        </p>
      </div>
    </div>
  );
}

export default Components;
