var React = require('react');
var DragAndDrop = require('react-dropzone');

var Upload = React.createClass({
   onDrop: function (files) {
      console.log('Received files: ', files);
   },

   render: function() {
      return (
         <div>
            <DragAndDrop className="dropzone" onDrop={this.onDrop} >
               <i className="material-icons">cloud_upload</i>
               <p style={{color: "#fff"}}>Drag and Drop<br />
                  or Click to open dialog
               </p>
            </DragAndDrop>
         </div>
      );
   }
});

module.exports = Upload;
