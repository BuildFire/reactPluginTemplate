import './settings.less';
import React from 'react';
import { render } from 'react-dom';
import Settings from './containers/Settings';

const target = document.getElementById('mount');
render(<Settings />, target);
