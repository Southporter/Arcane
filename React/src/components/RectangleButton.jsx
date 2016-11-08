import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

var RectangleButton = React.createClass({
   render() {
      return (
         <RaisedButton id={this.props.id} secondary={true} className="rectangle-button" onClick={this.props.click}
            icon={<FontIcon className="material-icons" >{this.props.name}</FontIcon>} />
      );
   }
});

module.exports = RectangleButton;
