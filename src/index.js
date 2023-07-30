import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

if (rootElement.hasChildNodes()) {
  root.hydrate(<StrictMode>
    <HelmetProvider>
      <Router>
        <App />
      </Router>
    </HelmetProvider>
  </StrictMode>);
} else {
  root.render(
    <StrictMode>
      <HelmetProvider>
        <Router>
          <App />
        </Router>
      </HelmetProvider>
    </StrictMode>);
}

