var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;

var App = require('./components/App.jsx');
var Main = require('./components/Main.jsx');
var About = require('./components/About.jsx');
var Uploads = require('./components/Upload.jsx');
var Genres = require('./components/Genres.jsx');

var Routes = (
   <Router history={hashHistory} >
      <Route path="/" component={App} >
         <Route path="main" component={Main}>
            <Route path="/main/uploads" component={Uploads} />
            <Route path="/main/genres" component={Genres} />
         </Route>
         <Route path="about" component={About} />
         <Route path="*" component={Main} />
      </Route>
   </Router>
);

module.exports = Routes;
