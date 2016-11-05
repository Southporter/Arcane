import React from 'react';
import Slider from 'material-ui/Slider';

export default class ProgressBar extends React.Component {
   render() {
      //return <input onChange={this.props.onChange} className="mdl-slider mdl-js-slider" id="progressBar" type="range" min="0" max="100" defaultValue="0" tabIndex="0" />
      return (<Slider onChange={this.props.onChange} value={0} />);
   }
}
