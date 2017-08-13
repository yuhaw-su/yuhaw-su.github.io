import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Container from './components/Container';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Container />, document.getElementById('root'));
registerServiceWorker();
