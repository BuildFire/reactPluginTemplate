import './content.less';
import React from 'react';
import { render } from 'react-dom';
import Content from './containers/Content';

const target = document.getElementById('mount');
render(<Content />, target);
