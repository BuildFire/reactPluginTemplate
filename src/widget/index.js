import React from 'react';
import { render } from 'react-dom';
import Widget from './widget';

const target = document.getElementById('mount');
render(<Widget />, target);
