import React from 'react';
import {Table, TableBody, TableHeader, TableRow, TableHeaderColumn} from 'material-ui/Table';
import TableData from './TableData.jsx';

export default class ArcaneTable extends React.Component {
   constructor(props) {
      super(props);
   }
   renderHeading() {
      var items = [];
      if (typeof this.props.data[0] != "undefined") {
         Object.keys(this.props.data[0]).forEach(function (key) {
            items.push(<TableHeaderColumn key={key}>{key}</TableHeaderColumn>);
         });
      }
      return items;
   }
   renderData() {
      var items = [];
      for (var i = 0; i < this.props.data.length; i++) {
         items.push(<TableData key={"datum" + i} datum={this.props.data[i]} />);
      }
      return items;
   }
   render() {
      return (
         <Table>
            <TableHeader>
               <TableRow>{this.renderHeading()}</TableRow>
            </TableHeader>
            <TableBody>
               {this.renderData()}
            </TableBody>
         </Table>
      );
   }
}
