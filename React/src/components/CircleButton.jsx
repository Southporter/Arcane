import React from "react";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class CircleButton extends React.Component {
   getChildContext() {
      return {muiTheme: getMuiTheme(baseTheme)};
   }
   render() {
      return (
         <div onClick={this.props.click} id={this.props.id}>
            <FloatingActionButton className="circle-button">
               <FontIcon className="material-icons" >{this.props.name}</FontIcon>
            </FloatingActionButton>
         </div>
      );
   }
}

CircleButton.childContextTypes = {
   muiTheme: React.PropTypes.object.isRequired,
};
