var React = require('react');
var AudioPlayer = require('./AudioPlayer.jsx');


var Main = React.createClass({
   render: function() {
      return (
         <div id="main">
            <div className="row">
               <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
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
});

module.exports = Main;
