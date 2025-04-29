import React from 'react';

function Components() {
  return (
    <div className="main-content" style={{ textAlign: 'left' }}>
      <h2 style={{ fontSize: '3rem' }}>Key Components of a Single Page Application</h2>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '2rem' }}>1. HTML Template</h3>
        <p style={{ fontSize: '1.2rem' }}>
          The HTML template provides the basic structure of the SPA with minimal content. It usually includes a root container where JavaScript dynamically loads the app.
        </p>
      </div>
      <br />
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '2rem' }}>2. Frontend Router</h3>
        <p style={{ fontSize: '1.2rem' }}>
          The frontend router manages navigation between different views within the SPA. It updates the browser's URL without reloading the page using techniques like History API or Hash routing.
        </p>
      </div>
      <br />
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '2rem' }}>3. State Management</h3>
        <p style={{ fontSize: '1.2rem' }}>
          State management handles dynamic data within the app, like user inputs or authentication status. It ensures the UI updates correctly when data changes.
        </p>
      </div>
      <br />
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '2rem' }}>4. API Integration (Backend Communication)</h3>
        <p style={{ fontSize: '1.2rem' }}>
          SPAs interact with backend servers using APIs to fetch or send data. This is typically done using AJAX or Fetch API without refreshing the page.
        </p>
      </div>
      <br />
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '2rem' }}>5. Event Handlers</h3>
        <p style={{ fontSize: '1.2rem' }}>
          Event handlers respond to user actions like clicks, typing, or form submissions. They make the application interactive and dynamic based on user behavior.
        </p>
      </div>
      <br />
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '2rem' }}>6. UI Libraries and Frameworks</h3>
        <p style={{ fontSize: '1.2rem' }}>
          UI libraries and frameworks simplify building attractive and responsive user interfaces. Common tools include Bootstrap, Material UI, and Tailwind CSS for styling.
        </p>
      </div>
      <br />
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '2rem' }}>7. Authentication and Authorization</h3>
        <p style={{ fontSize: '1.2rem' }}>
          Authentication verifies users' identities, while authorization controls access to different parts of the app. Token-based methods like JWT are commonly used.
        </p>
      </div>
    </div>
  );
}

export default Components;
