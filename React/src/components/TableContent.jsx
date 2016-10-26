var React = require('react');
var Row = require('./TableRow.jsx');

var TableContent = React.createClass({
   renderHeading: function() {
      var items = [];
      if (typeof this.props.data[0] != "undefined") {
         Object.keys(this.props.data[0]).forEach(function (key) {
            items.push(<th className="arcane-table-h mdl-data-table__cell--non-numeric" key={key}>{key}</th>);
         });
      }
      return items;
   },
   renderData: function() {
      var items = [];
      for (var i = 0; i < this.props.data.length; i++) {
         items.push(<Row key={"datum" + i} datum={this.props.data[i]} />);
      }
      return items;
   },
   render: function() {
      return (
         <div>
            <table className="arcane-table mdl-data-table mdl-js-data-table">
               <thead>
                  <tr>{this.renderHeading()}</tr>
               </thead>
               <tbody>
                  {this.renderData()}
               </tbody>
            </table>
         </div>
      );
   }
});

module.exports = TableContent;
