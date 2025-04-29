// src/Difference.js
import React from 'react';

function Difference() {
  return (
    <div className="main-content">
      <h2>SPA vs MPA Comparison</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#2e86de', color: 'white' }}>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Feature</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>SPA (Single Page Application)</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>MPA (Multi Page Application)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>Page Reloads</td>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>No (after initial load)</td>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>Yes (every navigation)</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>Speed</td>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>Faster after first load</td>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>Slower due to multiple reloads</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>SEO Optimization</td>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>Harder (needs SSR or prerender)</td>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>Easier (static pages)</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>Development Complexity</td>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>More JavaScript-heavy</td>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>Balanced backend & frontend</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>Caching</td>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>Easier with service workers</td>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>More server-side caching</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>Initial Load Time</td>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>Higher</td>
            <td style={{ padding: '10px', border: '1px solid #ccc' }}>Lower</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Difference;
