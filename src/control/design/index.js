import './design.less';
import React from 'react';
import { render } from 'react-dom';
import Design from './containers/Design';

const target = document.getElementById('mount');
render(<Design />, target);
