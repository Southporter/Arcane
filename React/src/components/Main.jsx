import React from 'react';
import AudioPlayer from './AudioPlayer.jsx';

export default class Main extends React.Component {
   render() {
      return (
         <div id="main">
            <div className="row">
               <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 scrollable"> //TODO Find out why this scrollable class isn't working
                  {this.props.children}
               </div>
               <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <AudioPlayer />
               </div>
               <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4" >
               </div>
            </div>
         </div>
      );
   }
}
