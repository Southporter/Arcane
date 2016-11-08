import React from 'react';
import TextField from 'material-ui/TextField';
import {white} from 'material-ui/styles/colors';

export default class TextBox extends React.Component {
   render() {
      return (
         <TextField id={this.props.id}
            floatingLabelText={this.props.label}
            floatingLabelStyle={{color: white}}
         />
      );
   }
}
