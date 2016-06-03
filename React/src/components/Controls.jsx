var React = require('react');
var RectangleButton = require('./RectangleButton.jsx');
var CircleButton = require('./CircleButton.jsx');
var ProgressBar = require('./ProgressBar.jsx');

var Controls = React.createClass({
   render: function() {
      return <div>
               <div className="row">
                  <div className="col-xs-12">
                     <ProgressBar />
                  </div>
               </div>
               <div className="row">
                  <div className="col-xs-3 col-md-1 col-lg-3">
                  </div>
                  <div className="col-xs-2 col-md-3 col-lg-2">
                     <RectangleButton type="button" id="previous" name="skip_previous" click="" />
                  </div>
                  <div className="col-xs-2 col-md-3 col-lg-2">
                     <CircleButton type="button" id="play" name="play_arrow" click="" />
                  </div>
                  <div className="col-xs-2 col-md-3 col-lg-2" >
                     <RectangleButton type="button" id="next" name="skip_next" click="" />
                  </div>
                  <div className="col-xs-3 col-md-1 col-lg-3">
                  </div>
               </div>
            </div>
   }
});

module.exports = Controls;
