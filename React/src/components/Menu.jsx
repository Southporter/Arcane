var React = require('react');
var MenuTile = require('./MenuTile.jsx');

var Menu = React.createClass({

    render: function() {
        return <div id="mySidenav" className="sidenav">
                  <div className="row" >
                     <div className="col-xs-6">
                        <MenuTile />
                     </div>
                     <div className="col-xs-6">
                        <MenuTile />
                     </div>
                  </div>
                  <div className="row" >
                     <MenuTile />
                     <MenuTile />
                  </div>
               </div>
    }
});

module.exports = Menu;
