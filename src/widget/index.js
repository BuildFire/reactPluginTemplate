import React from 'react';
import { render } from 'react-dom';
import Widget from './Widget';

const container = document.getElementById('mount');

function renderApp() {
  render(<Widget />, container);
}

// Set up HMR re-rendering
if (module.hot) {
  module.hot.accept();
  module.hot.accept('./Widget', renderApp);
}

// Initial render
renderApp();
