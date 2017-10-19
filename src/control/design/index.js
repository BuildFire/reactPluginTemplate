import React from 'react';
import { render } from 'react-dom';
import Design from './Design';

const container = document.getElementById('mount');

function renderApp() {
  render(<Design />, container);
}

// Set up HMR re-rendering
if (module.hot) {
  module.hot.accept();
  module.hot.accept('./Design', renderApp);
}

// Initial render
renderApp();
