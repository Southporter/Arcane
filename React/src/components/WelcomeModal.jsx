import React from 'react';

import LoginForm from './LoginForm.jsx';
import ButtonMenu from './HorizontalButtonMenu.jsx';
import SignupMenu from './SignupButtonMenu.jsx';
import SignupArtistForm from './SignupArtistForm.jsx';
import ListenerForm from './SignupListenerForm.jsx';

export default class WelcomeModal extends React.Component {

   render() {
      return (
         <div className="modal fade" id="welcome-modal" tabIndex="-1">
            <div className="modal-dialog" role="document">
               <div className="arcane-modal modal-content">
                  <div className="modal-header">
                     <h4 className="display-text modal-title">Login or Signup</h4>
                  </div>
                  <div className="arcane-modal-body modal-body">
                     <LoginForm  location="push-left"/>
                     <ButtonMenu location="center" />
                     <SignupMenu location="push-right" />
                     <SignupArtistForm location="push-right" />
                     <ListenerForm location="push-right" />
                  </div>
               </div>
            </div>
         </div>
         );
   }
}
