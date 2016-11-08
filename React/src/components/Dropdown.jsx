import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {white} from 'material-ui/styles/colors';

export default class Dropdown extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         value: null,
      }
   }
   select(event, index, value) {
      this.setState({value});
   }

   renderListItems() {
      var items = [];
      items.push(<MenuItem key={-1} value={null} primaryText="None" />);
      for (var i = 0; i < this.props.list.length; i++) {
         var item = this.props.list[i];
         items.push(<MenuItem key={i} value={item.name} primaryText={item.name} />);
      }
      return items;
   }

   render() {
      return (
         <SelectField value={this.state.value}
            onChange={this.select.bind(this)}
            maxHeight={255}
            floatingLabelText="Genre"
            floatingLabelFixed={true}
            floatingLabelStyle={{color: white}}>
            {this.renderListItems()}
         </SelectField>
      );
   }
}
