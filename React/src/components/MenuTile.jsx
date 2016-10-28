var React = require('react');
var Link = require('react-router').Link;

var iconStyle = { fontSize: '3em', paddingTop: '20%'};

var MenuTile = React.createClass({
   closeDrawer: function() {
      var layout = document.querySelector('.mdl-layout');
      layout.MaterialLayout.toggleDrawer();
   },
   render: function () {
      return (
         <Link to={this.props.link}>
            <div className="tile mdl-shadow--5dp" onClick={this.closeDrawer} >
               <i className="material-icons" style={iconStyle} >{this.props.icon}</i>
               <div className="menu-item-name">{this.props.name}</div>
            </div>
         </Link>
      );
   }
});

module.exports = MenuTile;
