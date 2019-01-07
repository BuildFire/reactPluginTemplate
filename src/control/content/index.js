import React from 'react';
import { render } from 'react-dom';
import Content from './content';

const target = document.getElementById('mount');
render(<Content />, target);
