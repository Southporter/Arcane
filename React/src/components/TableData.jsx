import React from 'react';
import {TableRowColumn, TableRow} from 'material-ui/Table';

export default class TableData extends React.Component {
   constructor(props) {
      super(props);
   }
   renderRowItems() {
      var items = [];
      if (typeof this.props.datum != "undefined") {
         Object.keys(this.props.datum).forEach(function(key) {
            items.push(<TableRowColumn key={key}>{this.props.datum[key]}</TableRowColumn>);
         }.bind(this));
      }
      return items;
   }

   render() {
      return (
         <TableRow>{this.renderRowItems()}</TableRow>
      );
   }
}
