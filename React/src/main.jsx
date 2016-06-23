var React    = require('react');
var ReactDOM = require('react-dom');
var Menu    = require('./components/Menu.jsx');
var Controls   = require('./components/Controls.jsx');
var WelcomeModal = require('./components/WelcomeModal.jsx');

ReactDOM.render(<Controls />, document.getElementById('play_button'));
ReactDOM.render(<Menu />, document.getElementById('menu'));
ReactDOM.render(<WelcomeModal />, document.getElementById('welcome_modal'));
