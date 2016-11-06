import React from 'react';

export default class ListItem extends React.Component{
   render: function() {
      return (
         <li className={this.props.liClasses} onClick={this.props.onClick}>
            <h4>{this.props.value}</h4>
         </li>
      );
   }
}
