import React from 'react';

function Components() {
  return (
    <div className="main-content" style={{ textAlign: 'left' }}>
      <h2 style={{ fontSize: '3rem' }}>Disadvantages of Single Page Applications (SPAs)</h2>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '2rem' }}>1. Initial Load Time</h3>
        <ul style={{ fontSize: '1.3rem', marginLeft: '20px' }}>
          <li>The first page load can be slow due to the large JavaScript bundle.</li>
        </ul>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '2rem' }}>2. SEO Challenges</h3>
        <ul style={{ fontSize: '1.3rem', marginLeft: '20px' }}>
          <li>Search engines may have difficulty indexing SPAs.</li>
          <li>Requires special handling like server-side rendering (SSR).</li>
        </ul>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '2rem' }}>3. Browser Compatibility</h3>
        <ul style={{ fontSize: '1.3rem', marginLeft: '20px' }}>
          <li>Heavy reliance on JavaScript may cause issues in older browsers.</li>
        </ul>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '2rem' }}>4. Security Risks</h3>
        <ul style={{ fontSize: '1.3rem', marginLeft: '20px' }}>
          <li>More exposed to XSS (Cross-Site Scripting) attacks.</li>
        </ul>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '2rem' }}>5. Back/Forward Navigation Issues</h3>
        <ul style={{ fontSize: '1.3rem', marginLeft: '20px' }}>
          <li>Needs extra handling for browser history and navigation.</li>
        </ul>
      </div>
    </div>
  );
}

export default Components;
