import React from 'react';
import Modal from './WelcomeModal.jsx';
import Menu from './Menu.jsx';

export default class App extends React.Component {

   render() {
      return (
         <div className="mdl-layout__container">
            <div className="mdl-layout mdl-js-layout">
               <header className="mdl-layout__header mdl-layout__header--transparent">
                  <div className="mdl-layout__header-row">
                     <span className="company_name mdl-layout-title">Arcane</span>
                  </div>
               </header>
               <div className="mdl-layout__drawer">
                  <Menu />
               </div>
               <div className="mdl-layout__drawer-button" role="button">
                  <img src="./images/favicon.png"></img>
               </div>

               <div id="welcome_modal">
                  <Modal />
               </div>
               <main className="row">
                  <div>
                     {this.props.children}
                  </div>
               </main>
            </div>
         </div>
      );

   }
}
