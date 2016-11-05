var React = require('react');

var TableRow = React.createClass({
   renderRowItems: function() {
      var items = [];
      if (typeof this.props.datum != "undefined") {
         Object.keys(this.props.datum).forEach(function(key) {
            items.push(<td className="mdl-data-table__cell--non-numeric" key={key}>{this.props.datum[key]}</td>);
         }.bind(this));
      }
      return items;
   },

   render: function() {
      return (
         <tr>{this.renderRowItems()}</tr>
      );
   }
});

module.exports = TableRow;
