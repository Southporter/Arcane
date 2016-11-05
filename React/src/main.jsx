import React    from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './Routes.jsx';
var main = document.getElementById('main');

ReactDOM.render(<Router routes={routes} history={browserHistory} />, main);
