import React from 'react';
import ReactDOM from 'react-dom/client';  // React 18 and above
import './index.css';  // Optional: Your global CSS file
import App from './App';  // Import your main App component

// Select the root element from the HTML
const rootElement = document.getElementById('root');
if (rootElement) {
  // Create a root container to render the app
  const root = ReactDOM.createRoot(rootElement);
  
  // Render the app inside the root element
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("No root element found to mount the app.");
}
