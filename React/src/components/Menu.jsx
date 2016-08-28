var React = require('react');
var MenuTile = require('./MenuTile.jsx');

var Menu = React.createClass({

    render: function() {
        return <div>
                  <span className="company_name mdl-layout-title">Arcane</span>
                  <nav className="sidenav mdl-navigation">
                     <div className="row">
                        <div className="col-xs-6">
                           <MenuTile />
                        </div>
                        <div className="col-xs-6">
                           <MenuTile />
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-xs-12">
                           <MenuTile />
                        </div>
                     </div>
                  </nav>
               </div>
    }
});

module.exports = Menu;
