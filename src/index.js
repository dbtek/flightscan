import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Root from './containers/Root';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
