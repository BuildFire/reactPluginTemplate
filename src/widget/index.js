import './widget.less';
import React from 'react';
import { render } from 'react-dom';
import Widget from './containers/Widget';

const target = document.getElementById('mount');
render(<Widget />, target);
