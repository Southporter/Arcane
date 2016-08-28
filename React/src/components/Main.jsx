var React = require('react');
var Controls = require('./Controls.jsx');


var Main = React.createClass({
   render: function() {
      return (
         <div id="main">
            <div className="row">
               <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
               </div>
               <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <Controls />
               </div>
               <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4" >
               </div>
            </div>
         </div>
      );
   }
});

module.exports = Main;
