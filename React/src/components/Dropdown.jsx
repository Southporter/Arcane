import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

export default class Dropdown extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         value: null,
      }
   }
   getChildContext() {
      return {muiTheme: getMuiTheme(baseTheme)};
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
         <SelectField value={this.state.value} onChange={this.select.bind(this)} maxHeight={250} floatingLabelText="Genre" floatingLabelFixed={true}>
            {this.renderListItems()}
         </SelectField>
      );
   }
}

Dropdown.childContextTypes = {
   muiTheme: React.PropTypes.object.isRequired,
};
