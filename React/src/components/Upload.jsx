import React from 'react';
import DragAndDrop from 'react-dropzone';

import ArcaneTable from './ArcaneTable.jsx';

export default class Upload extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         fileList: [
            {
               "name": "This is the Song",
               "duration": 3.15,
               "album": "Testing"
            },
            {
               "name": "This is the Song 2",
               "duration": 3.24,
               "album": "Testing"
            },
            {
               "name": "This is the Song 3",
               "duration": 3.33,
               "album": "Testing"
            }

         ],

      };
   }
   onDrop(files) {
      console.log('Received files: ', files);
   }

   render() {
      return (
         <div>
            <DragAndDrop className="dropzone" onDrop={this.onDrop} >
               <i className="material-icons">cloud_upload</i>
               <p style={{color: "#fff"}}>Drag and Drop<br />
                  or Click to open dialog
               </p>
            </DragAndDrop>
            <ArcaneTable data={this.state.fileList} />
         </div>
      );
   }
}
