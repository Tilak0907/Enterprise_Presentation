import React from 'react';

function Home() {
  return (
    <div style={{ textAlign: 'left', fontSize: '3.3rem' }}>
      <h2 style={{ fontSize: '2.5rem' }}>Introduction to Single Page Applications (SPAs)</h2>
      <p style={{ fontSize: '1.4rem' }}>
        Single Page Applications (SPAs) are web apps that load a single HTML page and dynamically update content as the user interacts with it, without refreshing the page. This creates a faster and smoother user experience, similar to desktop applications.
        
        SPAs use JavaScript to update only the necessary parts of the page, improving performance and reducing server load. Technologies like React, Angular, and Vue.js are commonly used for building SPAs.
        
        While SPAs offer seamless interactions, they can pose challenges with SEO and browser history, which can be managed through techniques like server-side rendering (SSR).
        
        In short, SPAs provide fast, dynamic web experiences, making them ideal for apps with high user interaction, such as social media and real-time applications.
      </p>
    </div>
  );
}

export default Home;
