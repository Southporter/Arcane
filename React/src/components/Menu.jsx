var React = require('react');
var MenuTile = require('./MenuTile.jsx');

var Menu = React.createClass({

    render: function() {
        return (
            <div>
               <span className="company_name mdl-layout-title">Arcane</span>
               <nav className="mdl-navigation">
                  <div className="row">
                     <MenuTile />
                     <MenuTile />
                     <MenuTile />
                     <MenuTile />
                     <MenuTile />
                     <MenuTile />
                  </div>
               </nav>
            </div>
         );
    }
});

module.exports = Menu;
