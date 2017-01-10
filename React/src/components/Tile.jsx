var React = require('react');
var Link = require('react-router').Link;

var Tile = React.createClass({
   render: function () {
      return (
         <Link to={this.props.link}>
            <div className="tile mdl-shadow--5dp" style={{background: this.props.color}} onClick={this.props.click} >
               <i className="material-icons" style={{ fontSize: '3em', paddingTop: '20%', backgroundColor: this.props.color}} >{this.props.icon}</i>
               <div className="menu-item-name">{this.props.name}</div>
            </div>
         </Link>
      );
   }
});

module.exports = Tile;
