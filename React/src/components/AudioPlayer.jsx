import React from 'react';

import Reflux from 'reflux';
import Actions from '../reflux/actions.jsx';
import AudioStore from '../reflux/audio-store.jsx';

import Controls from './Controls.jsx';

const AudioPlayer = React.createClass({
   mixins: [Reflux.listenTo(AudioStore, "onChange")],
   getInitialState() {
      return {
         currTime: 0,
         max: 1
      }
   },
   onChange(event, currTime, len) {
      this.setState({currTime: currTime, max: len});
   },

   render() {
      return <Controls
         playClick={Actions.play}
         nextClick={Actions.next}
         previousClick={Actions.back}
         value={this.state.currTime}
         len={this.state.max}
         timeUpdate={Actions.skip}
         />;
   }
});

export default AudioPlayer;
