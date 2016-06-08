// import styles
import './styles/style.scss';

// import promise polyfill & fetch
import {polyfill} from 'es6-promise';
polyfill();

import React from 'react';
import {render} from 'react-dom';

import Root from './containers/Root';

render(<Root />, document.getElementById('root'));
