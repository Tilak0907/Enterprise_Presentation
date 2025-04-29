import React from 'react';

function WhenToUseSPA() {
  return (
    <div className="main-content" style={{ textAlign: 'left' }}>
      <h2 style={{ fontSize: '3rem' }}>When to Use SPAs</h2>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '2rem' }}>Use SPAs when:</h3>
        <ul style={{ fontSize: '1.3rem', marginLeft: '20px' }}>
          <li>You need a fast, dynamic, app-like experience.</li>
          <li>Your users will stay on the site for longer periods.</li>
          <li>You want to reduce server load and bandwidth usage.</li>
        </ul>
      </div>

      <div>
        <h3 style={{ fontSize: '2rem' }}>Avoid SPAs if:</h3>
        <ul style={{ fontSize: '1.3rem', marginLeft: '20px' }}>
          <li>You require strong SEO support (e.g., blogs, e-commerce).</li>
          <li>Your app is simple or has low interactivity.</li>
        </ul>
      </div>
    </div>
  );
}

export default WhenToUseSPA;
