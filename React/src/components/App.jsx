var React = require('react');
var Modal = require('./WelcomeModal.jsx');
var Menu = require('./Menu.jsx');

var App = React.createClass({

   render: function() {
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
});

module.exports = App;
