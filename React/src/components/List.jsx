import React from 'react';
import ListItem from './ListItem.jsx';


export default class List extends React.Component {
   render() {
      var listItems = this.props.list.map(function(item, i) {
         var boundClick = this.props.onClick.bind(item, i);
         return <ListItem key={item.id} value={item.value} liClasses={this.props.liClasses} onClick={this.boundClick} />
      });

      return (<ul className={this.props.ulClasses} htmlFor={this.props.for} >{listItems}</ul>);
   }
}
