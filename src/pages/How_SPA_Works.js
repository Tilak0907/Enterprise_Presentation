import React from 'react';

function SPAArchitecture() {
  return (
    <div style={{ textAlign: 'left', fontSize: '1.3rem', lineHeight: '1.8', padding: '20px' }}>
      <h2 style={{ fontSize: '2.5rem' }}>SPA Architecture & Key Flow</h2>
      <p><strong>SPA</strong> = Single HTML page + JS app that dynamically updates content</p>
      <ul>
        <li>Uses React Router for client-side navigation (no full page reload)</li>
        <li>Communicates with backend via AJAX/fetch to get/send JSON data</li>
      </ul>

      <h3 style={{ fontSize: '2rem', marginTop: '20px' }}>Browser Loads:</h3>
      <ul>
        <li><strong>index.html</strong> (static shell)</li>
        <li><strong>bundle.js</strong> (JS logic, React, routes, etc.)</li>
        <li><strong>CSS</strong> for styling</li>
      </ul>

      <h3 style={{ fontSize: '2rem', marginTop: '20px' }}>React App Manages:</h3>
      <ul>
        <li>UI rendering via components</li>
        <li>Routing, state, and re-rendering via Virtual DOM</li>
      </ul>

      <h2 style={{ fontSize: '2.5rem', marginTop: '40px' }}>How SPA Works + Optimization</h2>
      <ul>
        <li>No full page refresh → only parts that change are re-rendered</li>
      </ul>

      <h3 style={{ fontSize: '2rem', marginTop: '20px' }}>Virtual DOM:</h3>
      <ul>
        <li>Lightweight JS copy of DOM</li>
        <li>React compares (reconciliation) and updates real DOM efficiently</li>
      </ul>

      <h3 style={{ fontSize: '2rem', marginTop: '20px' }}>AJAX:</h3>
      <ul>
        <li>Async calls fetch data in background (without reload)</li>
      </ul>

      <h3 style={{ fontSize: '2rem', marginTop: '20px' }}>Hydration (SSR):</h3>
      <ul>
        <li>Server sends pre-rendered HTML (e.g. Next.js)</li>
        <li>React activates JS + attaches event listeners</li>
      </ul>

      <h3 style={{ fontSize: '2rem', marginTop: '20px' }}>Optimizations:</h3>
      <ul>
        <li><code>React.lazy()</code> + <code>Suspense</code> → load only what’s needed</li>
        <li>Code splitting, Tree shaking, and <code>bundle.js</code> minimize load size</li>
      </ul>

      <h2 style={{ fontSize: '2.5rem', marginTop: '40px' }}>SPA for Enterprise Apps</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '1.3rem' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '10px', borderBottom: '2px solid #ccc' }}>Benefit</th>
            <th style={{ textAlign: 'left', padding: '10px', borderBottom: '2px solid #ccc' }}>Enterprise Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Fast UX</td>
            <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>App-like feel for portals/dashboards</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>API-Driven</td>
            <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Scalable, decoupled frontend-backend</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Component-Based</td>
            <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Reusable, testable architecture</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Real-Time Data</td>
            <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Ideal for CRM, HR, inventory systems</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Scalable Code</td>
            <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Micro-frontend friendly, lazy loaded modules</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Secure & SEO</td>
            <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Supports SSR, JWT, role-based access</td>
          </tr>
        </tbody>
      </table>

      <p style={{ marginTop: '20px' }}>
        <strong>Conclusion:</strong> Robust, modern, and DevOps-friendly choice for enterprise systems.
      </p>
    </div>
  );
}

export default SPAArchitecture;
