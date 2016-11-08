import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class RectangleTextButton extends React.Component {
   render() {
      return (
         <RaisedButton
            label={this.props.name}
            secondary={true}
            id={this.props.id}
            onClick={this.props.click} >
         </RaisedButton>
      );
   }
}
