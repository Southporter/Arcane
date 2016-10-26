var React = require('react');
var Link = require('react-router').Link;

var iconStyle = { fontSize: '3em', paddingTop: '20%'};

var MenuTile = React.createClass({

   render: function () {
      return (
         <Link to={this.props.link}>
            <div className="tile mdl-shadow--5dp" >
               <i className="material-icons" style={iconStyle} >{this.props.icon}</i>
               <div className="menu-item-name">{this.props.name}</div>
            </div>
         </Link>
      );
   }
});

module.exports = MenuTile;
